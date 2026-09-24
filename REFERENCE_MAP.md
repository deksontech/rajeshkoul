# Reference-to-route map

All ZIP images were inspected at their original pixel dimensions before implementation.

## `/` — continuous homepage

| Reference | Dimensions | Implemented section |
|---|---:|---|
| `home page/Home -1.png` | 1672×941 | Hero: “Scaling Enterprises Through Lean, Digital & AI-Led Transformation” |
| `home page/Home -2.png` | 1672×941 | Featured strip, author summary, mission, operating principles |
| `home page/Home -3.png` | 1672×941 | Areas of expertise |
| `home page/Home -4.png` | 1672×941 | Featured Digi-e-Lean book |
| `home page/Home -5.png` | 1672×941 | Exact duplicate of `Home -4.png`; not rendered twice |
| `home page/Home-6.png` | 2005×784 | DigiLean Nexus banner |
| `home page/Home -6.99999999.png` | 1672×941 | Mission statement and three pillars |
| `home page/Home -8.png` | 2103×748 | Mission summary quotation |
| `home page/Home -9.png` | 1672×941 | Core expertise tab composition |
| `home page/Home -10.png` | 1671×941 | Lean Nervous System teaser; both book/image frames are placeholders in the source |
| `home page/Home -11.png` | 1671×941 | “Global Transformation Leader” positioning section. Its content is represented across the homepage hero, expertise, and footer rather than duplicated as a second hero near the end. |

## `/about` — continuous About page

| Reference | Dimensions | Implemented section |
|---|---:|---|
| `About us/about us -1.png` | 1672×941 | About hero |
| `About us/about us -2.png` | 1672×941 | Biography, experience, strategic foundation, perspective, recognition |
| `About us/about us -3.png` | 1672×941 | Research & Thought Leadership |

## Literary Lounge routes

| Reference | Route | Dimensions |
|---|---|---:|
| `others/1-1.png` | `/literary-lounge` | 1672×941 |
| `others/1-2 books.png` | `/literary-lounge/books` | 1672×941 |
| `others/1-3 personal leadership.png` | `/literary-lounge/coaching` | 1672×941 |
| `others/Industry and campus talks.png` | `/literary-lounge/talks` | 1672×941 |
| `others/Podcast.png` | `/literary-lounge/podcast` | 1672×941 |

## Shared footer

`bottom image for all pages minus lean nervous system.png` (1672×941) maps to the reusable footer on every implemented route except `/lean-nervous-system`, matching the filename instruction. The footer is rebuilt from live text, links, icons, layout, and two extracted decorative artwork regions.

## Known gaps from the supplied source

- No alternate footer was supplied for `/lean-nervous-system`; that route intentionally ends without the shared footer.
- The Lean Nervous System reference includes two explicit blank image placeholders. They remain labelled placeholders; no cover or testimonial artwork was invented.
- No destination URLs were supplied for LinkedIn, email, conversation, book/framework requests, episode playback, upcoming talks, coaching, privacy policy, or terms. The visible controls are present, but unknown external-contact controls are disabled rather than linked to invented destinations.
- Only the first Core Expertise panel is supplied. The remaining visible tab labels are retained but disabled rather than populated with invented panel content.
- `Home -11.png` is visually an alternate/secondary hero-like positioning composition. It is not repeated as an additional homepage hero because its message overlaps the primary hero and neighbouring sections.

## Screenshot evidence

- `artifacts/screenshots/home-desktop-1440.png`
- `artifacts/screenshots/home-mobile-375.png`
- `artifacts/screenshots/about-tablet-768.png`
- `artifacts/screenshots/literary-desktop-1024.png`
