"use client";
import { useState, useEffect } from "react";
import SideBar from "../organisms/Sidebar";
import Header from "../organisms/Header";


const MainLayout = ({ children, title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  return (
    <div className="h-screen w-full overflow-hidden flex bg-gray-100">
      
      <SideBar
        isOpen={drawerOpen}
        isMobile
        onClose={() => setDrawerOpen(false)}
      />

     
      <div className="flex-1 min-w-0 flex flex-col">
        <Header title={title} onMenuClick={() => setDrawerOpen(true)} />
          
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
