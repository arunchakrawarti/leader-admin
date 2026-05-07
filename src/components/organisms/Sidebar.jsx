"use client";

import { SideBarData } from "../../config/SideBarData";
import NavigationLink from "./NavigationLink";

const SideBar = ({ isMobile = false, isOpen = true, onClose }) => {
  return (
    <>
      {isMobile && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 
          w-[255px]
          bg-gradientBlue
          text-white
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0
        `}
      >
        <nav className="h-full flex flex-col">
          <div className="flex items-center gap-3 px-6 py-3 border-b relative border-white/10">

            <div className="absolute h-25 w-22 rounded-bl-[80px] right-0 top-[-15px] transition-all duration-300 bg-circle"></div>

            <div className="w-10 h-10 border border-gray-400 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <i className="ri-flashlight-line text-xl"></i>
            </div>

            <div>
              <h1 className="text-md font-semibold font-inter">
                Admin
              </h1>

              <p className="text-xs font-inter text-gray-300">
                Leader Platform
              </p>
            </div>
          </div>
          <ul className="flex-1 overflow-y-auto px-4 py-4 space-y-2 no-scrollbar pb-10">

            {SideBarData.map((item, index) => (
              <div
                key={index}
                className=""
              >
                <NavigationLink {...item} />
              </div>
            ))}

          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;