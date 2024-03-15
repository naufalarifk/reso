import { Route, Routes } from "react-router-dom"
import { Home, Trade } from "@/pages"
import { MainMenu } from "./MainMenu"
import { LayoutDashboard } from "@/components"

export const RootLayout = () => {
    return (
        <Routes>
            <Route element={<MainMenu />}>
                <Route element={<LayoutDashboard />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/trade" element={<Trade />} />
                </Route>
            </Route>
        </Routes>
    )
}