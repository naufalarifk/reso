import { Route, Routes } from "react-router-dom";
import { CreateStakingPage, Landing, Staking, Trade } from "@/pages";
import { MainMenu } from "./MainMenu";
import { LayoutDashboard } from "@/components";

export const RootLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<MainMenu />}>
        <Route element={<LayoutDashboard />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/trade" element={<Trade />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/staking/create" element={<CreateStakingPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
