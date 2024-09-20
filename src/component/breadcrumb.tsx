import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

interface BreadcrumbProps {
    breadcrumb: Array<{
        title: string;
        to: string;
    }>;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({breadcrumb}) => {
    return (<>
    <div className="page-heading py-[20px] bg-white border-b border-[#e7eaec]">
        <div className="px-[10px]">
            
        <h2 className="text-[24px] mb-[5px]">{breadcrumb[breadcrumb.length - 1].title}</h2>
    <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href='/dashboard'>Dash Board</BreadcrumbLink>
            
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            
            {breadcrumb.map(bc => (
                <>
                <BreadcrumbItem key={bc.to}>
                    <BreadcrumbLink href={bc.to}>{bc.title}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
             </>  
            ))}
           
           
        </BreadcrumbList>
    </Breadcrumb>
        </div>
    </div>
    </>)
}

export default Breadcrumbs;