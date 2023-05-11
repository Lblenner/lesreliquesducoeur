import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type LayoutProps = { children: ReactNode }

const poppy = localFont({ src: '../public/fonts/Poppy-Handwriting.ttf' });

export default function Layout(props: LayoutProps) {
    //  bg-gray-900
    return <Navbar> {props.children}</Navbar>
}

import { useState } from 'react'

type NavLinkProps = { to: string, children: ReactNode }

function NavLink({ to, children }: NavLinkProps) {
    return <Link
        href={to}>
        {children}
    </Link>
}

type MobileNavProps = { open: boolean, setOpen: any }

const MobileNav = ({ open, setOpen }: MobileNavProps) => {
    let router = useRouter();
    const goTo = async (path: string) => {
        await router.push(path)
        setOpen(!open);
    }

    return (
        <div className={`z-10 absolute top-0 left-0 h-screen w-screen  bg-orange-clair transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex  h-16 items-center justify-center filter drop-shadow-md bg-orange-fonce h-20"> {/*logo container*/}
                {/* <a className="text-xl font-semibold" href="/">JUTO</a> */}
            </div>
            <div className={`${poppy.className} flex flex-col`}>
                <button className={`text-2xl my-4 text-black block py-2 pl-3 pr-4 text-gray-700 rounded mx-16 hover:bg-orange-fonce text-white`}
                    onClick={() => goTo("/")}>
                    Présentation
                </button>
                <button className="text-2xl my-4 text-black block py-2 pl-3 pr-4 text-gray-700 rounded mx-16 hover:bg-orange-fonce  text-white"
                    onClick={() => goTo("/show_content")}>
                    Témoignages
                </button>
                {/* <button className="text-xl font-normal my-4 text-black block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => goTo("/add_content")}>
                    Participer
                </button> */}
            </div>
        </div>
    )
}

function Navbar(props: LayoutProps) {

    const [open, setOpen] = useState(false)
    // COLOUR ICI
    return <div className="min-h-screen overflow-hiddenrelative bg-orange-clair">

        <nav className="w-full bg-orange-fonce h-20 flex items-center md:justify-center">
            < MobileNav open={open} setOpen={setOpen} />

            <div className="p-4">
                <button className={`z-50 flex relative w-8 h-8 flex-col justify-between items-center ${open ? "" : "md:hidden"} z-10`} onClick={() => {
                    setOpen(!open)
                }}>
                    <span className="sr-only">Open main menu</span>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "scale-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </button>
            </div>

            <ul className={`${poppy.className} h-8 text-white text-2xl w-full items-center justify-center hidden w-full md:flex md:w-auto gap-40`}>
                <li className="hover:text-black ">
                    <NavLink to="/">
                        Présentation
                    </NavLink>
                </li>
                <li className="hover:text-black ">
                    <NavLink to="/show_content">
                        Objets
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/add_content">
                        Participer
                    </NavLink>
                </li> */}
            </ul>

        </nav >
        {open ? <div></div> : props.children}
    </div>

}
