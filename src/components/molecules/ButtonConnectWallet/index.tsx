import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";
import { ButtonGlow } from "@/components";
import { formatAddress } from "@/utils";

export const ButtonConnectWallet = ({ className }: { className?: string }) => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const formattedAddress = formatAddress(address);
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });


  return (
    <div className={className}>
      {!isConnected ? (
        <ButtonGlow onClick={() => open()}>Connect Wallet</ButtonGlow>
      ) : (
        <ButtonGlow
          className="gap-3"
          onClick={() => open({ view: "Account" })}
        >
          {ensAvatar ? (
            <img
              alt="ENS Avatar"
              className="avatar w-5 h-5"
              src={ensAvatar}
            />
          ) : (
            <img className="avatar" src="/images/placeholder.svg" />
          )}
          {address && (
            <div className="text-sm">
              {ensName
                ? `${ensName} (${formattedAddress})`
                : formattedAddress}
            </div>
          )}
          {/* <IcDropdown /> */}
        </ButtonGlow>
      )
      }
    </div>
  );
};
