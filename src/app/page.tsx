"use client";
import LaunchApp from "@/components/button";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-[#00091d] to-[#000000] bg-[size:20px_20px]">
      <div className="absolute top-4 right-4">
        <LaunchApp />
      </div>
      <div className="flex-grow" />
      <div className="relative text-center">
        <h1 className="text-[15vmin] md:text-[20vmin] lg:text-[25vmin] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x leading-[1.1] drop-shadow-lg">
          ChanEx
        </h1>
        <p className="mt-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-pulse">
          Flip Channels, Earn TON!
        </p>
      </div>
      <div className="flex-grow" />
    </div>
  );
}
