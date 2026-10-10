import { getAdditionalArticle, StandardArticle } from "../_components/standard-article";
const article=getAdditionalArticle("evolution-of-quality-4-0");
export const metadata={title:`${article.title} | Rajesh Koul`,description:article.subtitle};
export default function Page(){return <StandardArticle article={article}/>}
