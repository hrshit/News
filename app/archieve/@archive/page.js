import { getAvailableNewsYears } from "@/lib/news"
import Link from "next/link";

export default function ArchivePage(){
    const links = getAvailableNewsYears();

    return(
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => <li key={link}>
                        <Link href={`/archieve/${link}`}>{link}</Link>
                    </li>)}
                </ul>
            </nav>
        </header>
    )
}