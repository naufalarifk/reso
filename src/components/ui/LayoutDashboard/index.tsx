import { SidebarDashboard, HeaderDashboard } from "@/components/organisms";
import { Outlet } from "react-router-dom";

export const LayoutDashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <div className="flex  pt-4 p-4 h-full  min-h-screen">
        <SidebarDashboard />
        <section className="relative h-fit min-h-screen  w-full overflow-y-scroll lg:ml-60">
          <div className="pt-20">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};
