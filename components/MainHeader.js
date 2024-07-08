"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLinks from './nav-links';


export default function MainHeader() {
 const path = usePathname();

  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLinks href="/news"> News </NavLinks>
          </li>
          <li>
            <NavLinks href="/archieve"> Archieve </NavLinks>          
          </li>
        </ul>
      </nav>
    </header>
  );
}