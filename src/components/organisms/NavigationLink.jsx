"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ title, icon, link, children = [] }) => {
  const pathname = usePathname();
  
  const hasChildren = children.length > 0;
  const isChildActive = children.some((child) => pathname === child.link);

  const [open, setOpen] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) setOpen(true);
  }, [pathname]);

  return (
    <li>
      <Link
        href={link || "#"}
        onClick={() => hasChildren && setOpen(!open)}
        className={`group flex items-center justify-between px-4 py-1.5 rounded-2xl transition-all duration-300
        ${
          pathname === link || isChildActive
            ? "bg-white/20 text-white border border-white/20 shadow-md"
            : "text-gray-300 hover:bg-white/10 hover:translate-x-1"
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <i
            className={`${icon} text-lg transition-transform duration-300 group-hover:scale-110`}
          ></i>
          <span className="text-sm font-medium font-montserrat truncate">
            {title}
          </span>
        </div>
        {hasChildren && (
          <i
            className={`ri-arrow-down-s-line transition-all duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        )}
      </Link>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="ml-6 md:ml-8 space-y-2 text-sm">
          {children.map((child, index) => (
            <li key={index}>
              <Link
                href={child.link}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300
                ${
                  pathname === child.link
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-white/70 hover:text-white hover:bg-white/10 hover:translate-x-1"
                }`}
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default NavigationLink;