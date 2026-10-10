import { getAdditionalArticle, StandardArticle } from "../_components/standard-article";

const article=getAdditionalArticle("reimagining-sustainable-growth-and-transformation-mindset");

export const metadata={title:`${article.title} | Rajesh Koul`,description:article.subtitle};

export default function Page(){return <StandardArticle article={article}/>}
