"use client"; 
import React from "react";

const login = () => {
    return (
      <>
        <div className="bg-slate-500 flex items-center justify-center min-h-screen">
          <div className="bg-white bg-center rounded-xl px-16 py-20"> {/* เพิ่มขนาด padding ของ container */}
            <form className="space-y-6 px-10 rounded-xl md:space-y-8"> {/* เพิ่ม padding ของฟอร์ม */}
              <div>
                <label htmlFor="username" className="block mb-2 text-lg font-medium text-gray-900">Your username</label> {/* ขนาดข้อความใหญ่ขึ้น */}
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  className=" border px-6 py-4 text-left text-lg  text-gray-900 rounded-lg  bg-gray-700 border-gray-600 " 
                  placeholder="username" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="••••••••" 
                  className=" border px-6 py-4 text-left text-lg  text-gray-900 rounded-lg  bg-gray-700 border-gray-600 " 
                  required 
                />
              </div>
              <button type="submit" className="w-full text-white bg-red-400 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-6 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button> {/* ขนาดปุ่มใหญ่ขึ้น */}
            </form>
          </div>
        </div>
      </>
    );
};

export default login;
