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
import { useNavigate, useParams } from "react-router-dom";
import {  useEffect } from "react";

const breadcrumb = [
  {
    title: 'Quản Lý Sinh Viên',
    to: '/user',
  },
  {
    title: 'Sửa Thông Tin Điểm Sinh Viên',
    to: '/user/update',
  },
];

const formSchema = z.object({
  subject_code: z.string().min(2).max(50),
  grade: z.string().min(2).max(50),
  
});

export default function GradeUpdate() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        subject_code: "",
        grade: "",
    },
});

  const { reset } = form; 
  const { id: grade_id } = useParams(); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://btlltuddd-2.onrender.com/grade/subject/' + grade_id);
        
        reset({
          subject_code: res.data.subject_code,
          grade: res.data.grade,
        });
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
   
  }, [grade_id, reset]); 

  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios.put('https://btlltuddd-2.onrender.com/grade/subject/' + grade_id, values)
      .then(res => {
        console.log(res);
        navigate('/user');
      })
      .catch(err => {
        console.error(err);
      });
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
