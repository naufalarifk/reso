import { IcBitcoin, IcDropdown, IcSwapHorizontal } from "@/assets/icons"
import { Input, Text } from "@/components"

export const SwapComponent = () => {
    const inputStyles = {
        background: `var(--COLOR-COLOR, linear-gradient(236deg, #5D636F1A 10%, #191E2859 35%))`,
        backdropFilter: `blur(12px)`
    }
    return (
        <div className="space-y-4">
            <div style={inputStyles} className="rounded-lg flex p-4 justify-between">
                <div>
                    <Text className="text-white">Pay</Text>
                    <Input className="bg-transparent" placeholder="0.00" />
                </div>
                <div>
                    <Text className="text-white">Balance: 0.00</Text>
                    <div className="flex items-center space-x-1">
                        <IcBitcoin />
                        <Text className="text-white">BTC</Text>
                        <div className="p-1 rounded-full bg-[#9c8a8f]">
                            <IcDropdown />
                        </div>
                    </div>
                </div>
            </div>


            {/* <div style={styles} className="mx-auto p-1 rounded-full"> */}
            <div className="bg-[#34312f] rounded-full w-12 h-12 grid place-items-center mx-auto">
                <IcSwapHorizontal height="24" width="24" color="#FE9F00" />
            </div>
            {/* </div> */}
            <div style={inputStyles} className="rounded-lg flex p-4 justify-between">
                <div>
                    <Text className="text-white">Receive</Text>
                    <Input className="bg-transparent" placeholder="0.00" />
                </div>
                <div>
                    <Text className="text-white">Leverage: 0.00</Text>
                    <div className="flex items-center space-x-1">
                        <IcBitcoin />
                        <Text className="text-white">BTC</Text>
                        <div className="p-1 rounded-full bg-[#9c8a8f]">
                            <IcDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}