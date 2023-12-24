'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Separator } from "@/components/ui/separator";

  import Image from "next/image";
import NavItems from "./NavItems";


const MobileNav = () => {
    // shadcn component sheet is used for making the mobile nav
  return (
    <nav className="md:hidden">
        <Sheet>
        <SheetTrigger className="align-middle">
            <Image className="cursor-pointer"
            src='/assets/icons/menu.svg' 
            alt="Nav Logo"
            height={24}
            width={24}/>
        </SheetTrigger>
        <SheetContent side={"right"} className="flex flex-col gap-6 bg-white md:hidden">
             <Image src={'/assets/images/logo.svg'}
             alt="Logo"
             width={128}
             height={38} />
            <Separator className="border border-grey-50" />
            <NavItems />
        </SheetContent>
        
        </Sheet>

    </nav>
  )
}

export default MobileNav