import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import '../assets/scss/sidebar.scss'
import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
export default function Aside(){
    return <>
        <div className="app-aside w-60 bg-[#111c43] h-full fixed top-0">
            <div className="main-sidebar-header p-3.5 fixed z-10 h-14 w-60 text-center border-solid border-b border-gray-700">
                <a href="" className="inline-block text-white "><img className="h-8" src="https://img.icons8.com/ios7/600w/FFFFFF/dashboard.png" alt="" /></a>
            </div>
            <div className="main-sidebar mt-14  ">
                <a className="menu-category px-3 py-6 text-lg opacity-70 tracking-wider font-semibold text-white ">
                Main
                </a>
                <Accordion type="single" collapsible className="px-3 sidebar-accordiation mt-5">
                    <AccordionItem value="item-1" className=""> 
                        <AccordionTrigger className=" hover:no-underline text-white rounded-lg">
                        <FaHome />
                            <span>Quản Lý Môn Học</span>
                        </AccordionTrigger>
                        <AccordionContent className="border-0 hover:no-underline">
                        <ul>
                            <li className="pl-6">
                                <Link
                                    className="block side-menu__item text-slate-400 text-xs hover:text-white relative rounded-lg hover:bg-slate-700"
                                    to="/subject"
                                >
                                    Quản Lý Môn Học
                                    <span
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 border border-primary rounded-full border-white"
                                    ></span>
                                </Link>
                            </li>
                        </ul>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="px-3 sidebar-accordiation">
                    <AccordionItem value="item-1" className="">
                        <AccordionTrigger className=" hover:no-underline text-white rounded-lg">
                        <FaUser />
                            <span>Quản Lý Sinh Viên</span>
                        </AccordionTrigger>
                        <AccordionContent className="border-0 hover:no-underline">
                        <ul>
                            <li className="pl-6">
                                <Link
                                    className="block side-menu__item text-slate-400 text-xs hover:text-white relative rounded-lg hover:bg-slate-700"
                                    to="/user"
                                >
                                    Thống Kê Sinh Viên
                                    <span
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 border border-primary rounded-full border-white"
                                    ></span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="pl-6">
                                <Link
                                    className="block side-menu__item text-slate-400 text-xs hover:text-white relative rounded-lg hover:bg-slate-700"
                                    to="/account"
                                >
                                    Quản Lý Tài Khoản
                                    <span
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 border border-primary rounded-full border-white"
                                    ></span>
                                </Link>
                            </li>
                        </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </>
}
