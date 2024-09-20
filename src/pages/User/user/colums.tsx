import { ColumnDef } from "@tanstack/react-table"
export type Students = {
    student_id: string
    class: string
    name: string
  }
  import { CiMenuKebab } from "react-icons/ci";
  import { MdModeEdit } from "react-icons/md";
  import { MdDeleteForever } from "react-icons/md";
  import { Button } from "@/components/ui/button"
  import { Link } from "react-router-dom";
  import { MdGrade } from "react-icons/md";
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
      await axios.delete(`https://btlltuddd-2.onrender.com/${student_id}`)
      alert("Xóa thành công")
      window.location.reload()
    }catch(err){
      console.log(err)
      alert("Xóa thất bại")
    }
  }
  export const columns: ColumnDef<Students>[] = [
    {
      accessorKey: "student_id",
      header: "MSV",
    },
    {
      accessorKey: "name",
      header: "Tên",
    },
    {
      accessorKey: "class",
      header: "Lớp",
    },
    
    {
        
        id: "actions",
        cell: ({ row }) => {
          const student = row.original
          
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
                <Link  to={`/user/update/${student.student_id}`} className="flex items-center ">
                <MdModeEdit className="mr-2 text-sm"/>
                  Sửa
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDelete(student.student_id)}>
                <MdDeleteForever className="mr-2 text-sm" />
                  Xoá
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link  to={`/grade/${student.student_id}`} className="flex items-center ">
                <MdGrade className="mr-2 text-sm"/>
                  Xem Điểm Thi
                </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  ]