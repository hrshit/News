import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";

export default function LattestNewsPage(){

    const lattestNews = getLatestNews();

    return(
        <>
            <h1>Lattest News </h1>
            <NewsList news={lattestNews}/> 
        </>
    )
}