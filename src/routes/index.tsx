import { Route, Routes } from "react-router-dom";
import {
  CreateStakingPage,
  Landing,
  Staking,
  Trade,
  Bridge,
  Terms,
  Privacy,
} from "@/pages";
import { MainMenu } from "./MainMenu";
import { LayoutDashboard } from "@/components";
import { useScrollTop } from "@/hooks";

export const RootLayout = () => {
  useScrollTop();
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route element={<MainMenu />}>
        <Route element={<LayoutDashboard />}>
          <Route path="/trade" element={<Trade />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/staking/create" element={<CreateStakingPage />} />
          <Route path="/bridge" element={<Bridge />} />
        </Route>
      </Route>
    </Routes>
  );
};
