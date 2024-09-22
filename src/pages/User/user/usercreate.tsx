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
        title: 'Quản Lý Sinh Viên',
        to: '/user'
    },
    {
        title: 'Thêm Sinh Viên',
        to: '/user/create',
    }
];

const formSchema = z.object({
    student_id: z.string().min(2).max(50),
    name: z.string().min(2).max(50),
    date: z.string().min(2).max(50),
    class: z.string().min(2).max(50),
    major: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    phone: z.string().min(2).max(50),
    address: z.string().min(2).max(50),
});

export default function UserCreate() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            student_id: "",
            name: "",
            date: "",
            class: "",
            major: "",
            email: "",
            phone: "",
            address: "",
        },
    });
    const navigate = useNavigate();
    function onSubmit(values: z.infer<typeof formSchema>) {
        axios.post('https://btlltuddd-2.onrender.com/student/create'' , values)
            .then(res => {
                console.log(res);
                navigate('/user')
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
                <div className="grid grid-cols-2  gap-4">
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Họ Tên</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập Tên" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ngày Tháng Năm Sinh</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} type="date" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="class"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lớp</FormLabel>
                                    <FormControl>
                                        <Input placeholder="CL02" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                    <FormField
                            control={form.control}
                            name="major"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Chuyên Ngành</FormLabel>
                                    <FormControl>
                                        <Input placeholder="CNTT" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="abcd@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số Điện Thoại</FormLabel>
                                    <FormControl>
                                        <Input placeholder="0123456" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Địa Chỉ</FormLabel>
                                    <FormControl>
                                        <Input placeholder="abc ..." {...field} />
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
