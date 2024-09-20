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
     title: 'Quản Lý Tài Khoản',
      to: '/account'
  },
  {
      title: 'Sửa Taì Khoản ',
      to: '/account/update',
  }
];

const formSchema = z.object({
  student_id: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export default function AccountUpdate() {
  const { id: student_id } = useParams(); 
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        student_id: "",
        username: "",
        password: "",
    },
});

  const { reset } = form; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://btlltuddd-2.onrender.com/account/student/' + student_id);

        
        reset({
          student_id: res.data.student_id,
          username: res.data.username,
          password: res.data.password,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [student_id, reset]); 

  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios.put('https://btlltuddd-2.onrender.com/account/student/update/' + student_id, values)
      .then(res => {
        console.log(res);
        navigate('/account');
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
                            name="student_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mã Sinh Viên</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập Mã Sinh Viên" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tài Khoản</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập Tài Khoản" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mật Khẩu</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập Mật Khẩu" {...field}  />
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
