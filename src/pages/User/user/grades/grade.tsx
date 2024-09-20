import Breadcrumbs from "@/component/breadcrumb";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {  useParams } from "react-router-dom";
  import { Grades, columns } from "./colums"
  import { DataTable } from "./dataTable";
  import axios from 'axios';
  import { useState, useEffect } from 'react';
export default function Grade(){
    const [data, setData] = useState<Grades[]>([]);
    const { id: student_id } = useParams(); 
    const breadcrumb = [
        {
            title: 'Quản Lý Sinh Viên',
            to: '/user'
        },
        {
            title: 'Điểm',
            to: '/grade/',
        }
    ];
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://btlltuddd-2.onrender.com/grade/' + student_id);
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };  
        fetchData();
      }, []); 
    return <>
    <Breadcrumbs breadcrumb={breadcrumb} />
    <div className="container px-[15px]">
    
    <Card className="rounded-[5px] mt-[15px]">
        <CardHeader className="border-b border-solid border-[#f3f3f3] flex flex-row">
            <CardTitle className="uppercase flex-1">Quản Lý Điểm Sinh Viên</CardTitle>
            
        </CardHeader>
        <CardContent>
        <DataTable columns={columns} data={data} />
        </CardContent>
        
    </Card>

    </div>
        
    </>
}