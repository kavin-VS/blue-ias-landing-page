import logo from "../assets/logo_1250.png"
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Header() {
    return (
        <header className="z-50 border-b border-gray-100 py-2">
            <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-16" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Radx</span>
                        <img src={logo} className="w-20 md:w-24" />
                    </a>
                </div>
                <div className="flex flex-1 justify-end space-x-2 pr-2 text-gray-400">
                    <a target="_blank" href=""><FaFacebook size={20} className="hover:text-primary-500" /></a>
                    <a target="_blank" href=""><FaInstagram size={20} className="hover:text-primary-500" /></a>
                    <a target="_blank" href=""><FaTelegram size={20} className="hover:text-primary-500" /></a>
                </div>
            </nav>
        </header>
    )
}
