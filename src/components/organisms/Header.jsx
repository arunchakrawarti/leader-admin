"use client";
import { useEffect, useState } from "react";
import Button from "../common/Button";
export default function Header({ onMenuClick }) {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setTheme(saved);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-blue-50 border-b border-blue-100 transition-colors">

      <div className="flex items-center justify-between px-4 md:px-6 py-3 gap-2">
        <div className="flex items-center gap-3 w-full max-w-md">

          <Button
            onClick={onMenuClick}
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-600 lg:hidden  hover:bg-gray-100"
          >
            <i className="ri-menu-2-line text-xl" />
          </Button>

          <h1 className="text-2xl font-semibold font-inter">Leader</h1>

        </div>
        <div className="flex items-center gap-4">
          
          <div className="relative">
            <button className="text-gray-500   text-lg hover:text-gray-700"
            >
              <i className="ri-notification-3-line"></i>
            </button>

            <span className="absolute top-1 -right-0.5 h-2 w-2 bg-red-500 rounded-full"></span>
          </div>
          <div className="h-6 w-px  bg-gray-200"
          ></div>
          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full   bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-600  text-white font-semibold"
            >
              A
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-medium  text-gray-800"
              >
                Admin User
              </p>
              <p
                className="text-xs text-gray-500"
              >
                Super Admin
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}