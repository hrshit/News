import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({params}){
    const newsyear = params.year;
    const news = getNewsForYear(newsyear); 
    return(
        <NewsList news={news}/>
    )
}