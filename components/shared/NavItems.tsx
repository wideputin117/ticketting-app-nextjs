'use client'
import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"


const NavItems = () => {
// usePathname hook to keep track of which page we are on
const pathname = usePathname();

  return (
     <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
        {headerLinks.map((link)=>{
            const isActive = pathname === link.route; // keeps track of current page and makes it active
            return(
                <li key={link.route}
                className={`${
                    isActive && 'text-primary-500'
                  } flex-center p-medium-16 whitespace-nowrap`}>
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
     </ul>
  )
}

export default NavItems