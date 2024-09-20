import Breadcrumbs from "@/component/breadcrumb";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const breadcrumb = [
    {
        title: 'Quản Lý Sinh Viên',
        to: '/user'
    },
    {
        title: 'Điểm',
        to: '/user',
    },
    {
        title: 'Thêm Điểm',
        to: '/user',
    }
];

const formSchema = z.object({
    subject_code: z.string().min(2).max(50),
    grade: z.string().min(0).max(50),
    
});
type Subjects = {
    subject_code: string
    subject_name: string
    lecturer: string
  }
export default function UserCreate() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject_code: "",
            grade: "",
        },
    });
    const [data, setData] = useState([]);
    const { id: student_id } = useParams(); 
    const navigate = useNavigate();
    
    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8081/subject');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        
        fetchData();
      }, []); 
    function onSubmit(values: z.infer<typeof formSchema>) {
        const exists = data.some((item:Subjects) => item.subject_code === values.subject_code);
        if(exists){
            axios.post('http://localhost:8081/grade/create/' + student_id , values)
            .then(res => {
                console.log(res);
                navigate('/grade/' + student_id)
            })
            .catch(err => {
                console.error(err);
            });
        }else{
            alert('Mã môn không tồn tại!')
        }
        
    }
    return (
        <>
            <Breadcrumbs breadcrumb={breadcrumb} />
            <div className="m-[15px]">
                <Form {...form}>         
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1  gap-4">
                    <div>
                    <FormField
                            control={form.control}
                            name="subject_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mã Môn</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập Mã Môn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="grade"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Điểm</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Điểm" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>   
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </>
    );
}
