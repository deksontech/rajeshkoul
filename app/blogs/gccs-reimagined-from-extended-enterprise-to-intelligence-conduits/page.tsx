import { getAdditionalArticle, StandardArticle } from "../_components/standard-article";

const article=getAdditionalArticle("gccs-reimagined-from-extended-enterprise-to-intelligence-conduits");

export const metadata={title:`${article.title} | Rajesh Koul`,description:article.subtitle};

export default function Page(){return <StandardArticle article={article}/>}
