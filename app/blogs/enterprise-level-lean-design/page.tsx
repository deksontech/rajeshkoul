import { getAdditionalArticle, StandardArticle } from "../_components/standard-article";
const article=getAdditionalArticle("enterprise-level-lean-design");
export const metadata={title:`${article.title} | Rajesh Koul`,description:article.subtitle};
export default function Page(){return <StandardArticle article={article}/>}
