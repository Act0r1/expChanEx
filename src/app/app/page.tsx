"use client";
import ConnectButton from "@/components/button/connect_button";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://github.com/Act0r1/expChanEx/blob/master/tonconnect-manifest.json">
      <div className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-[#00091d] to-[#000000] bg-[size:20px_20px]">
        <ConnectButton />
      </div>
    </TonConnectUIProvider>
  );
}
