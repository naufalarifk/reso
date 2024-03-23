import { CardStaking, Tabs, Text } from "@/components";
import { STAKE_COIN } from "@/constants";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export const Staking = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();

  const tabs = useMemo(
    () => [
      {
        label: "Active",
        content: (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {STAKE_COIN.map((item) => (
                <CardStaking
                  handleConnected={() => open()}
                  isConnected={isConnected}
                  whileConnected={() =>
                    navigate(
                      `create?type=${
                        item.staking_card.staking_cryptos &&
                        item.staking_card.staking_cryptos.length > 1
                          ? "multiple"
                          : "one"
                      }&ticker=${
                        item.staking_card.ticker_symbol ?? "BTC"
                      }&price=${
                        item.staking_card?.current_price ?? "5000"
                      }&reward=${
                        item.staking_card?.estimated_reward
                      }&stakingbalance=${
                        item.staking_card?.staking_balance ?? 5
                      }`
                    )
                  }
                  item={{
                    coinOne: item.staking_card?.ticker_symbol || "BTC",
                    coinTwo: "Reso",
                    apy: String(item.staking_card.annual_reward_percentage),
                    isMultiple:
                      item.staking_card.staking_cryptos &&
                      item.staking_card.staking_cryptos.length > 1,
                    totalStake: item.staking_card.total_staking_balance!,
                  }}
                />
              ))}
            </div>
          </div>
        ),
      },
      {
        label: "Ended",
        content: <div className="mt-10">No Data</div>,
      },
      {
        label: "My Staking",
        content: <div className="mt-10">No Data</div>,
      },
    ],
    [isConnected, navigate, open]
  );

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="max-w-">
          <div className="flex items-center justify-center flex-col p-0 lg:p-8">
            <div className="text-white font-semibold text-2xl text-center lg:text-5xl mb-4">
              Reso Staking: Maximize{" "}
              <span className="text-primary">Your Earnings</span>{" "}
            </div>
            <Text className="text-sm text-center  md:text-base text-soft mb-4">
              Maximize Your Earnings with Reso Staking and discover expert tips
              and tricks to boost your profits in the Reso staking ecosystem
            </Text>
          </div>
          <div className="flex gap-3 md:gap-0 mb-4 border-soft/15 rounded border-[0.5px] justify-between items-center p-4 md:py-4 md:px-6 bg-card-background from-[#5D636F1A] to-[#191E2859]">
            <div className="space-y-1 text-center">
              <div className="text-soft text-xxs  md:text-base font-normal">
                Total Value Locked (TVL)
              </div>
              <div className="text-white font-semibold text-sm md:text-xl">
                ~$3.478.542
              </div>
            </div>
            <div className="space-y-1 text-center">
              <div className="text-soft text-xxs md:text-base font-normal">
                Estimated APY
              </div>
              <div className="text-white font-semibold text-sm md:text-xl">
                ~236%
              </div>
            </div>
            <div className="space-y-1 text-center">
              <div className="text-soft text-xxs  md:text-base font-normal">
                Estimated Total Rewards
              </div>
              <div className="text-white font-semibold text-sm md:text-xl">
                ~$79.323
              </div>
            </div>
          </div>
          <div>
            <Tabs
              classNameWrapper="justify-between flex gap-4 md:justify-start"
              items={tabs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
