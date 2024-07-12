"use client";
import "@tonconnect/sdk";
import { useRouter } from "next/navigation";

export default function LaunchApp() {
  const router = useRouter();
  return (
    <button
      className="px-5 py-2 text-xl md:text-1 lg:text-2 font-bold text-white rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
      onClick={() => router.push("/app")}
    >
      Launch App
    </button>
  );
}
