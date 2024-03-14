import { IcStaking, IcSwap, IcTrade } from "@/assets/icons";
import { Text } from "@/components";
import { navigationDashboard, navigationDashboardName } from "@/constants";
import { NavLink } from "react-router-dom";

export const SidebarDashboard = () => {

    const styles = {
        borderRadius: `4px`,
        border: `0.5px solid rgba(255, 255, 255, 0.10)`,
        background: `var(--COLOR - COLOR, linear - gradient(236deg, rgba(93, 99, 111, 0.10) 1.26 %, rgba(25, 30, 40, 0.35) 100 %))`,
        backdropFilter: `blur(12px)`
    }

    const handleIcon = (name: string, active: boolean) => {
        switch (name) {
            case navigationDashboardName.TRADE:
                return (
                    <>
                        <IcTrade />
                    </>
                );
            case navigationDashboardName.STAKING:
                return (
                    <>
                        <IcStaking />
                    </>
                );
            case navigationDashboardName.BRIDGE:
                return (
                    <>
                        <IcSwap />
                    </>
                );
            case navigationDashboardName.SWAP:
                return (
                    <>
                        <IcSwap />
                    </>
                );
            default:
                return;
        }
    };





    return (
        <nav style={styles} className="p-4 h-full gap-y-3 flex flex-col">
            {
                navigationDashboard.map(nav =>
                    <>
                        <NavLink to={nav.route}>
                            {({ isActive }) => (
                                <div className="mr-16 px-4 py-5 flex items-center space-x-2">
                                    {handleIcon(nav.name.toLowerCase(), isActive)}
                                    <Text variant={"heading"} className="text-white">{nav.name}</Text>
                                </div>
                            )}
                        </NavLink>
                    </>)
            }
        </nav>
    )
}