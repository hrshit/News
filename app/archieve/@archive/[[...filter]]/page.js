import NewsList from "@/components/NewsList";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({params}){
    const filter = params.filter;
    let links = getAvailableNewsYears();
   
    const selectedYear = filter?.[0];  // concise notation for the ternary operator
    const selectedMonth = filter?.[1];

    let news;

    if(selectedYear && !selectedMonth){
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if(selectedYear && selectedMonth){
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links =[];
    }

    let newsContent = <p>No News Found for the selected period</p>

    if(news && news.length>0){
        newsContent = <NewsList news={news}/>
    }

    if(
        (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
        (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
    ){
        throw new Error('Invalid filter')
    }

    return(
        <header id="archive-header">
        <nav>
            <ul>
                {links.map((link) => { 
                const href = selectedYear 
                ? `/archieve/${selectedYear}/${link}`
                : `/archieve/${link}`;  
                
                return ( 
                    <li key={link}>
                        <Link href={href}>{link}</Link>
                    </li>
                    ); 
                })}
            </ul>
        </nav>
        {newsContent}
    </header>
    )
}

// this page.js will be activated now for any segment after the archive page , no matter how many segments are there
//no matter how they are named

// filter will catch here all the segments after the archieve 

// filter wil give us the array of all matched segments 
