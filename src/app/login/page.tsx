"use client"; 
import React from "react";

const Login = () => {
    const [showMessage, setShowMessage] = React.useState(true);

    return (
      <>
        <div className="bg-slate-800 flex items-center justify-center min-h-screen absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white`}>
            <div className="bg-white rounded-xl px-16 py-20"> {/* Container styles */}
              <form className="space-y-6 px-10 rounded-xl md:space-y-8"> {/* Form styles */}
                <div>
                  <label htmlFor="username" className="block mb-2 text-lg font-medium text-gray-900">Your username</label>
                  <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    className="border px-6 py-4 text-left text-lg text-gray-900 rounded-lg bg-gray-700 border-gray-600" 
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
                    className="border px-6 py-4 text-left text-lg text-gray-900 rounded-lg bg-gray-700 border-gray-600" 
                    required 
                  />
                </div>
                <button type="submit" className="w-full text-white bg-red-400 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-6 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;
