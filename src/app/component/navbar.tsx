"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const router = useRouter()

    function handleLogin():void {
       router.push("/login")
    }

    return (
      <>
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <ul className="sm:flex md:flex gap-x-6 text-white">
                <li>
                  <Link href="/">
                    <p className="text-lg font-bold	">My Lister</p>
                  </Link>
                </li>
               
              </ul>
              <button onClick={handleLogin} className="transition-all duration-300 ease-in-out transform
    hover:bg-opacity-90 hover:-translate-y-1 hover:scale-105 hover:shadow-lg
    focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-opacity-50 font-bold rounded-lg w-auto h-auto py-2 px-2 hover:bg-orange-400 bg-yellow-400">login</button>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Navbar;