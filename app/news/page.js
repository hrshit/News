import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

export default function News(){
    return(
        <div>
            <h1>News Page</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map(newsItem=>(<li>
                    <Link href={`/news/${newsItem.slug}`}>
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
                        <span>{newsItem.title}</span>
                    </Link>
                </li>))}
            </ul>
        </div>
    )
}