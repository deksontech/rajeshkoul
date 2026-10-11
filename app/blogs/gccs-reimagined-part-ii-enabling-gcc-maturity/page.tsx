import { getAdditionalArticle, StandardArticle } from "../_components/standard-article";

const article=getAdditionalArticle("gccs-reimagined-part-ii-enabling-gcc-maturity");

export const metadata={title:`${article.title} | Rajesh Koul`,description:article.subtitle};

export default function Page(){return <StandardArticle article={article}/>}
