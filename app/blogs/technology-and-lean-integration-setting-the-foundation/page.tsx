import { getAdditionalArticle, StandardArticle } from "../_components/standard-article";

const article=getAdditionalArticle("technology-and-lean-integration-setting-the-foundation");

export const metadata={title:`${article.title} | Rajesh Koul`,description:article.subtitle};

export default function Page(){return <StandardArticle article={article}/>}
