import { ColumnDef } from "@tanstack/react-table"
export type Grades = {
    grade_id: number
    subject_code: string
    subject_name: string
    grade: number
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
  const handleDelete = async(grade_id: number) =>{
    try{
      await axios.delete(`http://localhost:8081/grade/subject/${grade_id}`)
      alert("Xóa thành công")
      window.location.reload()
    }catch(err){
      console.log(err)
      alert("Xóa thất bại")
    }
  }
 
  export const columns: ColumnDef<Grades>[] = [
    {
      accessorKey: "subject_code",
      header: "Mã Môn",
    },
    {
      accessorKey: "subject_name",
      header: "Tên Môn",
    },
    {
      accessorKey: "grade",
      header: "Điểm",
    },
    {
      accessorKey: "grade_id",
      header: "Grade ID",
      enableSorting: false,
      enableHiding: false,   
    },
    {
        
        id: "actions",
        cell: ({ row }) => {
          const grade = row.original
          
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
                <Link  to={`grade/subject/${grade.grade_id}`} className="flex items-center ">
                <MdModeEdit className="mr-2 text-sm"/>
                  Sửa
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDelete(grade.grade_id)}>
                <MdDeleteForever className="mr-2 text-sm" />
                  Xoá
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  ]