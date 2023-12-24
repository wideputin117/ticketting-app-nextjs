// a layout for the signin and signup 

import { Children } from "react";

const Layout = ({ children }: { children: React.ReactNode})=>{
return(
    <div className=" flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern
    bg-cover bg-fixed bg-center">
        {children}
    </div>
)
}

export default Layout

// by creating this layout now we can style the the auth