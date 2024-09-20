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
       title: 'Quản Lý Môn Học',
        to: '/subject'
    },
    {
        title: 'Thêm Môn Học ',
        to: '/subject/create',
    }
];

const formSchema = z.object({
    subject_code: z.string().min(2).max(50),
    subject_name: z.string().min(2).max(50),
    lecturer: z.string().min(2).max(50),
});

export default function SubjectCreate() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject_code: "",
            subject_name: "",
            lecturer: "",
            
        },
    });
    const navigate = useNavigate();
    function onSubmit(values: z.infer<typeof formSchema>) {
        axios.post('http://localhost:8081/subject/create' , values)
            .then(res => {
                console.log(res);
                navigate('/subject')
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
                            name="subject_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tên</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập Tên Môn Học" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lecturer"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Giảng Viên</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nhập Giảng Viên" {...field}  />
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
