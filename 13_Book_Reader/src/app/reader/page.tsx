"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import the Reader component with SSR disabled
const Reader = dynamic(() => import("./Reader"), { 
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-[#1a1a1a] text-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
        <p className="text-white/50 animate-pulse">Initializing Reader...</p>
      </div>
    </div>
  )
});

export default function ReaderPage() {
  return <Reader />;
}
