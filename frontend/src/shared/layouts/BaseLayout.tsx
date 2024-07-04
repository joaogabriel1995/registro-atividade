import { Home, LayoutDashboard, Wallet, Activity, Settings } from "lucide-react"
import { Sidebar, SidebarItem } from "../components"


export const BaseLayout = () => {
    return (

        <div className="flex">
            <Sidebar  >
            <SidebarItem text="Home" icon={<Home size={20}></Home>} ></SidebarItem>
            <SidebarItem text="Dashboard" icon={<LayoutDashboard size={20}></LayoutDashboard> }></SidebarItem>
            <SidebarItem text="Registro de Atividades" icon={<Activity size={20}></Activity> }></SidebarItem>
            <SidebarItem text="Carteira" icon={<Wallet size={20}></Wallet> }></SidebarItem>
            <hr className="my-3"/>
            <SidebarItem text="Setting" icon={<Settings size={20}></Settings> }></SidebarItem>

            </Sidebar>
            
        </div>
    )
}