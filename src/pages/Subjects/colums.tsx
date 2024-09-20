import { ColumnDef } from "@tanstack/react-table"
export type Subjects = {
    subject_code: string
    subject_name: string
    lecturer: string
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
  const handleDelete = async(subject_code: string) =>{
    try{
      await axios.delete(`https://btlltuddd-2.onrender.com/subject/${subject_code}`)
      alert("Xóa thành công")
      window.location.reload()
    }catch(err){
      console.log(err)
      alert("Xóa thất bại")
    }
  }
  export const columns: ColumnDef<Subjects>[] = [
    {
      accessorKey: "subject_code",
      header: "Mã Môn",
    },
    {
      accessorKey: "subject_name",
      header: "Tên",
    },
    {
      accessorKey: "lecturer",
      header: "Giảng Viên",
    },
    
    {
        
        id: "actions",
        cell: ({ row }) => {
          const subject = row.original
          
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
                <Link  to={`/subject/update/${subject.subject_code}`} className="flex px-[8px] py-[6px] items-center">
                <MdModeEdit className="mr-2 text-sm"/>
                Sửa
                </Link>
                <DropdownMenuItem onClick={() => handleDelete(subject.subject_code)}>
                <MdDeleteForever className="mr-2 text-sm" />
                  Xoá
                </DropdownMenuItem>
               
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  ]