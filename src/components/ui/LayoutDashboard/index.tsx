import { SidebarDashboard, HeaderDashboard } from "@/components/organisms";
import { Outlet } from "react-router-dom";

export const LayoutDashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <div className="flex  pt-4 p-4 h-full  min-h-screen">
        <SidebarDashboard />
        <section className="relative h-fit min-h-screen  w-full overflow-y-scroll lg:ml-[16.999rem]">
          <div className="pt-20">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};

//   return (
//     <>
//       <HeaderDashboard />
//       <div className="flex overflow-hidden pt-4 p-4 h-auto">
//         <SidebarDashboard />
//         <section className="relative h-full w-full overflow-y-auto">
//           <div className="ml-4 h-full">
//             <Outlet />
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };
