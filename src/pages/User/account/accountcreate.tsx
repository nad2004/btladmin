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

const breadcrumb = [
    {
       title: 'Quản Lý Tài Khoản',
        to: '/account'
    },
    {
        title: 'Thêm Taì Khoản ',
        to: '/user/create',
    }
];

const formSchema = z.object({
    student_id: z.string().min(2).max(50),
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
});

export default function AccountCreate() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            student_id: "",
            username: "",
            password: "",
            
        },
    });
    const navigate = useNavigate();
    function onSubmit(values: z.infer<typeof formSchema>) {
        axios.post('http://localhost:8081/account/student/create' , values)
            .then(res => {
                console.log(res);
                navigate('/account')
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
