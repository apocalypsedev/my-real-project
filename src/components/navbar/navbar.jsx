import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

import './navbar.css';
import { Logo } from "../../assets"
const Navbar = () => {
    return (
        <section>
            <header>
                <article>
                    <FaFacebookSquare className="header__icons" />
                    <FaTwitterSquare className="header__icons" />
                    <FaGithubSquare className="header__icons" />
                    <FaInstagramSquare className="header__icons" />
                </article>
                <article>
                    <MdMarkEmailUnread className="header__icons" />
                    <span id="head-text">example@gmail.com</span>
                </article>
            </header>
            <nav className='navbar'>
                <img src={Logo} alt="react-logo" className="animation" />
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Register</li>
                    <li>Faq</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;