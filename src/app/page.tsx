"use client";
import { useEffect, useState } from "react";
import Navbar from "@/app/component/navbar";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show the message after a short delay to allow the background to load
    const timer = setTimeout(() => setShowMessage(true), 500); // Delay in milliseconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="px-20  flex justify-center mt-2"><Navbar /></div>
      
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ${showMessage ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl font-bold animate-bounceIn">
          Welcome to MyListWebsite
        </h1>
      </div>
    </>
  );
}
