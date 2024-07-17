import logo from "../assets/logo_1250.png"
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (

        <footer>
            <div className="bg-gray-900">
                <div className="container m-auto space-y-8 px-6 text-gray-600 md:px-12 lg:px-20">
                    <div className="grid grid-cols-8 gap-6 md:gap-0">
                        <div className="col-span-8 md:border-r border-gray-700 md:col-span-2 lg:col-span-3 md:pt-16">
                            <div
                                className="flex items-center justify-between gap-6 border-b border-gray-700 py-6 md:block md:space-y-6 md:border-none md:py-0"
                            >
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Radx</span>
                                    <img src={logo} className="w-20 md:w-24 bg-white" />
                                </a>
                                <div className="flex gap-4 text-gray-500">
                                    <a target="_blank" href=""><FaFacebook size={20} className="hover:text-primary-500" /></a>
                                    <a target="_blank" href=""><FaInstagram size={20} className="hover:text-primary-500" /></a>
                                    <a target="_blank" href=""><FaTelegram size={20} className="hover:text-primary-500" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 md:col-span-6 lg:col-span-5 md:pt-16">
                            <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-3 md:pl-16 text-gray-200">

                                <div className="col-span-2 flex flex-col gap-4">
                                    <h6 className="text-lg font-medium text-primary-500">Contact</h6>

                                    <div className="flex flex-wrap gap-1">
                                        <p className="text-gray-400">Address:</p>
                                        <p className="text-gray-200">Lorem ipsum is placeholder text commonly used in the graphic</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        <p className="text-gray-400">Phone:</p>
                                        <p className="text-gray-200">+91 9876543210</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        <p className="text-gray-400">Email:</p>
                                        <p className="text-gray-200">demo@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="text-lg font-medium text-primary-500">About</h6>
                                    <ul className="mt-4 list-inside space-y-4">
                                        <li>
                                            <a href="#" className="transition hover:text-primary-600 underline">Career</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-start items-center border-t border-gray-700 py-8 pl-8 md:pl-16 text-gray-500 text-sm">
                    <span>&copy; Blue IAS {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>

    )
}

export default Footer