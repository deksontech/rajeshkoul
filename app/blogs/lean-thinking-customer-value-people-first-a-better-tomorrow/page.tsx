import { getAdditionalArticle, StandardArticle } from "../_components/standard-article";
const article=getAdditionalArticle("lean-thinking-customer-value-people-first-a-better-tomorrow");
export const metadata={title:`${article.title} | Rajesh Koul`,description:article.subtitle};
export default function Page(){return <StandardArticle article={article}/>}
