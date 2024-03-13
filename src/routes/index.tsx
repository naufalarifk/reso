import { Route, Routes } from "react-router-dom"
import { Home } from "@/pages"
import { MainMenu } from "./MainMenu"
import { LayoutDashboard } from "@/components"

export const RootLayout = () => {
    return (
        <Routes>
            <Route element={<MainMenu />}>
                <Route element={<LayoutDashboard />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Route>
        </Routes>
    )
}