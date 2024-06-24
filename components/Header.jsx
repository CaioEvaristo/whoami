import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header  = () => {
    return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Caio<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* Desktop navbar
                <Link href="/contact">
                    <Button>Hire me</Button>
                </Link>
             */}
            <div className="hidden xl:flex">
                <Nav />
            </div>

            {/* Mobile navbar */}
            <div className="xl:hidden">
                <MobileNav />
            </div>

        </div>
    </header>
    )
};

export default Header;