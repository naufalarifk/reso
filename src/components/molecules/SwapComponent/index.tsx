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
                    <Text className="text-white">Receive</Text>
                    <Input className="bg-transparent" placeholder="0.00" />
                </div>
                <div>
                    <Text className="text-white">Leverage: 0.00</Text>
                    <div className="flex items-center space-x-1">
                        <IcBitcoin height="16" width="16" />
                        <Text className="text-white font-semibold text-lg">BTC</Text>
                        <div className="p-[2px] rounded-full bg-gray-800">
                            <IcDropdown height='16' width='16' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-1 rounded-full z-10">
                <div className="bg-[#34312f] rounded-full mx-auto border-4 border-[#282729] w-10 h-10 grid place-items-center">
                    <IcSwapHorizontal height="24" width="24" color="#FE9F00" />
                </div>
            </div>
            <div style={inputStyles} className="rounded-lg flex p-4 justify-between">
                <div>
                    <Text className="text-white">Receive</Text>
                    <Input className="bg-transparent" placeholder="0.00" />
                </div>
                <div>
                    <Text className="text-white">Leverage: 0.00</Text>
                    <div className="flex items-center space-x-1">
                        <IcBitcoin height="16" width="16" />
                        <Text className="text-white font-semibold text-lg">BTC</Text>
                        <div className="p-[2px] rounded-full bg-gray-800">
                            <IcDropdown height='16' width='16' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}