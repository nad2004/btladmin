import Breadcrumbs from "@/component/breadcrumb";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Accounts, columns } from "./colums"
  import { DataTable } from "./dataTable";
  import axios from 'axios';
  import { useState, useEffect } from 'react';


export default function Account(){
    const breadcrumb = [{
        title: 'Quản Lý Tài Khoản',
        to: '/account'
    }]
    const [data, setData] = useState<Accounts[]>([]);
    useEffect(() => {
       
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8081/account/student');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        
        fetchData();
      }, []); 
    
    return (<>
    <Breadcrumbs breadcrumb={breadcrumb} />
    <div className="container px-[15px]">
    
    <Card className="rounded-[5px] mt-[15px]">
        <CardHeader className="border-b border-solid border-[#f3f3f3] flex flex-row">
            <CardTitle className="uppercase flex-1">Quản Lý Tài Khoản Sinh Viên</CardTitle>
            
        </CardHeader>
        <CardContent>
        <DataTable columns={columns} data={data} />
        </CardContent>
        
    </Card>

    </div>
        
    </>)
}