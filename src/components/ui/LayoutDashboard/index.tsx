import { SidebarDashboard, HeaderDashboard } from "@/components/organisms"
import { Outlet } from "react-router-dom"

export const LayoutDashboard = () => {
    return (
        <>
            <HeaderDashboard
            />
            <div className="flex overflow-hidden pt-4 p-4">
                <SidebarDashboard
                />
                <section className="relative h-full w-full overflow-y-auto lg:ml-64">
                    <div className="p-4">
                        <Outlet />
                    </div>
                </section>
            </div>
        </>
    )
}