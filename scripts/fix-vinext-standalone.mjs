import { createRequire } from "node:module";
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, realpathSync } from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const standaloneNodeModules = path.join(projectRoot, "dist", "standalone", "node_modules");
const projectRequire = createRequire(path.join(projectRoot, "package.json"));

if (!existsSync(standaloneNodeModules)) {
  throw new Error("Vinext standalone output is missing. Set output: \"standalone\" and run the Vinext build first.");
}

function readPackageJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function resolvePackageJson(packageName, resolver) {
  try {
    return resolver.resolve(`${packageName}/package.json`);
  } catch {
    for (const lookupPath of resolver.resolve.paths(packageName) ?? []) {
      const candidate = path.join(lookupPath, packageName, "package.json");
      if (existsSync(candidate) && readPackageJson(candidate).name === packageName) return candidate;
    }

    try {
      let directory = path.dirname(resolver.resolve(packageName));
      while (directory !== path.dirname(directory)) {
        const candidate = path.join(directory, "package.json");
        if (existsSync(candidate) && readPackageJson(candidate).name === packageName) return candidate;
        directory = path.dirname(directory);
      }
    } catch {}

    return null;
  }
}

function installedStandalonePackages() {
  const installed = new Set();
  for (const entry of readdirSync(standaloneNodeModules, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("@")) {
      const scopeDirectory = path.join(standaloneNodeModules, entry.name);
      for (const scopedEntry of readdirSync(scopeDirectory, { withFileTypes: true })) {
        const packageJsonPath = path.join(scopeDirectory, scopedEntry.name, "package.json");
        if (scopedEntry.isDirectory() && existsSync(packageJsonPath)) {
          installed.add(readPackageJson(packageJsonPath).name);
        }
      }
      continue;
    }

    const packageJsonPath = path.join(standaloneNodeModules, entry.name, "package.json");
    if (existsSync(packageJsonPath)) installed.add(readPackageJson(packageJsonPath).name);
  }
  return installed;
}

const vinextPackageJsonPath = resolvePackageJson("vinext", projectRequire);
if (!vinextPackageJsonPath) throw new Error("Unable to resolve vinext/package.json.");

const vinextPackage = readPackageJson(vinextPackageJsonPath);
const copied = installedStandalonePackages();
const queue = Object.keys(vinextPackage.peerDependencies ?? {}).map((packageName) => ({
  packageName,
  resolver: projectRequire,
  optional: vinextPackage.peerDependenciesMeta?.[packageName]?.optional === true,
}));
const added = [];

while (queue.length > 0) {
  const entry = queue.shift();
  if (!entry || copied.has(entry.packageName)) continue;

  const packageJsonPath = resolvePackageJson(entry.packageName, entry.resolver);
  if (!packageJsonPath) {
    if (entry.optional) continue;
    throw new Error(`Unable to resolve required Vinext peer dependency: ${entry.packageName}`);
  }

  const realPackageJsonPath = realpathSync(packageJsonPath);
  const packageRoot = path.dirname(realPackageJsonPath);
  const packageTarget = path.join(standaloneNodeModules, entry.packageName);
  mkdirSync(path.dirname(packageTarget), { recursive: true });
  cpSync(packageRoot, packageTarget, {
    recursive: true,
    dereference: true,
    filter(source) {
      return !path.relative(packageRoot, source).split(path.sep).includes("node_modules");
    },
  });

  copied.add(entry.packageName);
  added.push(entry.packageName);

  const packageJson = readPackageJson(realPackageJsonPath);
  const optionalDependencies = new Set(Object.keys(packageJson.optionalDependencies ?? {}));
  const runtimeDependencies = Object.keys({
    ...packageJson.dependencies,
    ...packageJson.optionalDependencies,
  });
  const packageRequire = createRequire(realPackageJsonPath);

  for (const packageName of runtimeDependencies) {
    if (!copied.has(packageName)) {
      queue.push({
        packageName,
        resolver: packageRequire,
        optional: optionalDependencies.has(packageName),
      });
    }
  }
}

console.log(`[standalone] Added Vinext peer runtime packages: ${added.join(", ") || "none"}`);
