import Breadcrumbs from "@/component/breadcrumb"




export default function Dashboard(){
    const breadcrumb = [{
        title: 'Quản Lý',
        to: '/dashboard'
    }]
    return <>
        <div>
           <Breadcrumbs breadcrumb={breadcrumb} />
        </div>
    
    </>
}