import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
export default function Header(){
    return <>
    <div className="app-header pl-60 h-14 fixed w-full content-center items-center top-0 bg-white">
        <div className="main-header mx-auto px-4 h-full flex items-center justify-between">
        <FaBars className="w-12 text-2xl cursor-pointer"/>
        <div className="header-right-content flex justify-between items-center">
           
            <div className="profile ">
            <DropdownMenu>
            <DropdownMenuTrigger className="flex">
            <Avatar className="mr-3">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="profile-content text-left">
                    <div className="font-semibold">NAD</div>
                    <div className="role text-xs text-[#536485]">Administrator</div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Account Infor</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center text-[#333335] cursor-pointer">
                    <CgProfile className="mr-2 text-sm" />
                    Profile 
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center text-[#333335] cursor-pointer">
                    <IoIosLogOut className="mr-2 text-sm" />
                    Log Out
                </DropdownMenuItem>
               
            </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>
        </div>
    </div>
    </>
}