import { getAdditionalArticle, StandardArticle } from "../_components/standard-article";
const article=getAdditionalArticle("how-to-establish-a-lean-thinking-mindset-in-organizations");
export const metadata={title:`${article.title} | Rajesh Koul`,description:article.subtitle};
export default function Page(){return <StandardArticle article={article}/>}
