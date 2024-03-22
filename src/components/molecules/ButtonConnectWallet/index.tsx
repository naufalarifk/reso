import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { ButtonGlow } from "@/components";

export const ButtonConnectWallet = () => {
  const { open } = useWeb3Modal();
  const account = useAccount();

  return (
    <ButtonGlow onClick={() => open()}>
      {account.isConnected ? account.addresses : "Connect Wallet"}
    </ButtonGlow>
  );
};
