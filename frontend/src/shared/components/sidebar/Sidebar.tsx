
import { ReactNode } from "react";
import profile from "../../../assets/profile.png";
import logo from "../../../assets/logo.png";
import { Menu } from "lucide-react";

interface ISidebarProps {
    children: ReactNode;
}

export const Sidebar = ({ children }: ISidebarProps) => {
    return (
        <>
            <aside className="h-screen bg-black">
                <nav className="h-full flex  flex-col bg-background-paper border-r">
                    <div className="p-4 pb-2 flex justify-between items-center mb-12">
                        <img className="w-10 h-10" src={logo} alt="" />
                        <h4 className="font-semibold">
                            Acme Inc
                        </h4>
                        <button><Menu></Menu></button>
                    </div>
                    <ul className="flex-1 px-3">{children}</ul>
                    <div className="border-t flex p-3">
                        <img src={profile} className="w-10 h-10 rounded-3xl"></img>
                        <div className="flex justify-between items-center overflow-hidden w-32 ml-3">
                            <div className="leading-4">
                                <h4 className="font-semibold">
                                    João Gabriel
                                </h4>
                                <span className="text-xs text-subtle">
                                    joaogabrielrp@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>

                </nav>
            </aside>
        </>
    )


}
interface ISidebarItem {
    icon: ReactNode,
    text: string,
    active?: boolean,
    alert?: boolean

}

export const SidebarItem = ({ icon, text, active }: ISidebarItem) => {
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-background-paper-hover text-title-body" : "hover:bg-background-paper-hover text-title-subtle"}`}>
            {icon}
            <span className="w-44 ml-3">{text}</span>
        </li>)
}