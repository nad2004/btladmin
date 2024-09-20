import { ColumnDef } from "@tanstack/react-table"
export type Accounts = {
    student_id: string
    username: string
    password: string
  }
  import { CiMenuKebab } from "react-icons/ci";
  import { MdModeEdit } from "react-icons/md";
  import { MdDeleteForever } from "react-icons/md";
  import { Button } from "@/components/ui/button"
  import { Link } from "react-router-dom";
  import axios from "axios"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
  const handleDelete = async(student_id: string) =>{
    try{
      await axios.delete(`http://localhost:8081/account/student/${student_id}`)
      alert("Xóa thành công")
      window.location.reload()
    }catch(err){
      console.log(err)
      alert("Xóa thất bại")
    }
  }
  export const columns: ColumnDef<Accounts>[] = [
    {
      accessorKey: "student_id",
      header: "MSV",
    },
    {
      accessorKey: "username",
      header: "Tài Khoản ",
    },
    {
      accessorKey: "password",
      header: "Mật Khẩu",
    },
    
    {
        
        id: "actions",
        cell: ({ row }) => {
          const account = row.original
          
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild >
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <CiMenuKebab className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Chỉnh Sửa</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                <Link  to={`/account/update/${account.student_id}`} className="flex items-center ">
                <MdModeEdit className="mr-2 text-sm"/>
                Sửa
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDelete(account.student_id)}>
                <MdDeleteForever className="mr-2 text-sm" />
                  Xoá
                </DropdownMenuItem>
               
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  ]