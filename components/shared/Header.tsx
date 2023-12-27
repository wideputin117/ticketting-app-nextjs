import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b flex flex-row items-stretch">
        <div className="wrapper flex items-center justify-between">
            <Link href='/' className=" w-36">
                <Image src='/assets/images/logo.svg' width={128} height={38} alt=" Ticket Logo"/>
            </Link>

            
            {/* Nav to display for desktop*/}
              <SignedIn>   
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>
              </SignedIn>

             
             <div className="flex w-32 justify-center gap-3 ">
                 <SignedIn>        {/* this will render a signed button if log out it will take back to home page */}
                    <UserButton afterSignOutUrl="/" />
                    <MobileNav />  {/* Component for mobile view */}
                 </SignedIn>
                 
                 <SignedOut>        {/* this is signing and signup button */}
                    <Button asChild className="rounded-full " size='lg'>
                        <Link href='/sign-in'>
                            Login
                        </Link>
                    </Button>
                 </SignedOut>
             </div>
        </div>
    </header>
  )
}

export default Header