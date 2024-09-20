import { Outlet } from "react-router-dom"
import Header from "./header"
import Aside from "./aside"
import "../assets/scss/style.scss"
export default function Layout(){
    return <>
    <Header />

    <Aside />
    <div className="main-content ml-60">
        <Outlet />
    </div>
    </>
}
