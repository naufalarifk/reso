import { IcBitcoin, IcDropdown } from "@/assets/icons"
import { Text } from "@/components"
import TradingView from "@/components/organisms/TradingView"
import { useState } from "react"
export const Trade = () => {

    const [selectedMenu, setSelectedMenu] = useState('')

    const styles = {
        borderRadius: `4px`,
        border: `0.5px solid rgba(255, 255, 255, 0.10)`,
        background: `var(--COLOR - COLOR, linear - gradient(236deg, rgba(93, 99, 111, 0.10) 1.26 %, rgba(25, 30, 40, 0.35) 100 %))`,
        backdropFilter: `blur(12px)`
    }

    const menu = ['Position', 'Orders', 'Trades', 'Claims']


    return (
        <>
            <div className="p-6 flex items-center space-x-6" style={styles}>
                <div className="flex items-center space-x-4">
                    <IcBitcoin />
                    <div>
                        <Text className="text-white">BTC/USD</Text>
                        <Text className="text-[#ADB1B8]">Bitcoin</Text>
                    </div>
                    <div className="p-1 rounded-full bg-[#231f20]">
                        <IcDropdown />
                    </div>
                </div>
                <div className="flex space-x-1 text-lg font-semibold">
                    <Text className="text-green font-semibold">$108.42 =</Text>
                    <Text className="font-semibold">$108.42</Text>
                </div>
                <div className="text-lg font-semibold">
                    <Text className="font-semibold">24h Change</Text>
                    <Text className="text-green font-semibold">+1.93%</Text>
                </div>
                <div className="text-lg font-semibold">
                    <Text className="font-semibold">24h High</Text>
                    <Text className="text-white font-semibold">29.479.24</Text>
                </div>
                <div className="text-lg font-semibold">
                    <Text className="font-semibold">24h Low</Text>
                    <Text className="text-white font-semibold">25.479.24</Text>
                </div>
                <div className="text-lg font-semibold">
                    <Text className="font-semibold">24h Volume (BTC)</Text>
                    <Text className="text-white font-semibold">30.479.24</Text>
                </div>
            </div>
            <section>
                <div style={styles} className="h-[60vh] mt-4">
                    <TradingView />
                </div>
                <div style={styles} className="h-1/5 mt-4 p-6">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {
                                menu.map(menu =>
                                    <Text className={`${selectedMenu === menu ? 'text-white border-b-2 border-amber-400' : ''} cursor-pointer`} onClick={() => setSelectedMenu(menu)}>{menu}</Text>)
                            }
                        </div>
                        <div className="flex space-x-1 items-center">
                            <input type="checkbox" name="hide market" placeholder="Hide other market" id="" />
                            <Text>Hide other market</Text>
                        </div>
                    </div>
                    <Text className="text-center mt-5">No Options</Text>
                </div>
            </section>
            <section>

            </section>
        </>
    )
}