import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function News(){
    return(
        <div>
            <h1>News Page</h1>
            <ul className="news-list">
               <NewsList news={DUMMY_NEWS}/>
            </ul>
        </div>
    )
}