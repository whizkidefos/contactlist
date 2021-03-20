// import '../styles/Navbar.css';

import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">ContactApp</Link>
            </div>
            <div className="navigation">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contacts"><a>Contacts</a></Link>
                {/* <Link href="/contact">Contact Us</Link> */}
            </div>
        </nav>
    );
}
 
export default Navbar;