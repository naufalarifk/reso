import { SidebarDashboard, HeaderDashboard } from "@/components/organisms";
import { Outlet } from "react-router-dom";

export const LayoutDashboard = () => {
    return (
        <>
            <HeaderDashboard
            />
            <div className="flex overflow-hidden pt-4 p-4 h-auto">
                <SidebarDashboard
                />
                <section className="relative h-full w-full overflow-y-auto">
                    <div className="ml-4 h-full">
                        <Outlet />
                    </div>
                </section>
            </div>
        </>
    )
}