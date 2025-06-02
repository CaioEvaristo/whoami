"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "contact",
        path: "/contact",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    }
]

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" aria-label="Menu" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" aria-label="Ir para página inicial">
                        <h1 className="text-4xl font-semibold">
                            Caio<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        const isActive = link.path === pathname;
                        return (
                            <Link 
                                href={link.path} 
                                key={index} 
                                className={`text-xl capitalize transition-all duration-300 hover:text-accent ${
                                    isActive ? "text-accent border-b-2 border-accent" : ""
                                }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;