import { CardStaking, Tabs, Text } from "@/components";
import { useMemo } from "react";

export const Staking = () => {
  const tabs = useMemo(
    () => [
      {
        label: "Active",
        content: (
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              <CardStaking />
              <CardStaking />
              <CardStaking />
              <CardStaking />
              <CardStaking />
              <CardStaking />
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
    []
  );

  return (
    <div className="relative">
      <div className="flex items-center justify-center flex-col p-8">
        <Text variant={"title"} className="text-white" weight={"semiBold"}>
          Reso Staking: Maximize{" "}
          <span className="text-primary">Your Earnings</span>{" "}
        </Text>
        <Text className="text-base text-soft">
          Maximize Your Earnings with Reso Staking and discover expert tips and
          tricks to boost your profits in the Reso staking ecosystem
        </Text>
      </div>
      <div className="flex mb-4 border-soft/15 rounded border-[0.5px] justify-between items-center py-4 px-6 bg-card-background from-[#5D636F1A] to-[#191E2859]">
        <div className="space-y-1 text-center">
          <div className="text-soft text-base font-normal">
            Total Value Locked (TVL)
          </div>
          <div className="text-white font-semibold text-xl">~$3.478.542</div>
        </div>
        <div className="space-y-1 text-center">
          <div className="text-soft text-base font-normal">Estimated APY</div>
          <div className="text-white font-semibold text-xl">~236%</div>
        </div>
        <div className="space-y-1 text-center">
          <div className="text-soft text-base font-normal">
            Estimated Total Rewards
          </div>
          <div className="text-white font-semibold text-xl">~$79.323</div>
        </div>
      </div>
      <div className="bg-card-background from-[#5D636F1A] py-4 px-8 to-[#191E2859] border-soft/15 rounded border-[0.5px]">
        <Tabs items={tabs} />
      </div>
    </div>
  );
};
