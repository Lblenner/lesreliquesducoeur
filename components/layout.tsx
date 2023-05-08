import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type LayoutProps = { children: ReactNode }

export default function Layout(props: LayoutProps) {
    //  bg-gray-900
    return <div className="min-h-screen bg-gray-500">
        <Navbar />
        {props.children}
    </div>
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
        <div className={`absolute top-0 left-0 h-screen w-screen  bg-gray-900 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex  h-16 items-center justify-center filter drop-shadow-md bg-gray-500 h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">JUTO</a>
            </div>
            <div className="flex flex-col">
                <button className="text-xl font-normal my-4 text-black block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => goTo("/")}>
                    Présentation
                </button>
                <button className="text-xl font-normal my-4 text-black block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => goTo("/show_content")}>
                    Explorer
                </button>
                <button className="text-xl font-normal my-4 text-black block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => goTo("/add_content")}>
                    Participer
                </button>
            </div>
        </div>
    )
}

function Navbar() {

    const [open, setOpen] = useState(false)


    return (
        <nav className="w-full bg-gray-900 h-16 flex items-center md:justify-center">
            < MobileNav open={open} setOpen={setOpen} />

            <div className="p-4">
                <button className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    <span className="sr-only">Open main menu</span>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "scale-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </button>
            </div>

            <ul className="h-8 text-xl w-full items-center justify-center hidden w-full md:flex md:w-auto gap-40">
                <li className="">
                    <NavLink to="/">
                        Présentation
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/show_content">
                        Explorer
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add_content">
                        Participer
                    </NavLink>
                </li>
            </ul>

        </nav >
    )
}
