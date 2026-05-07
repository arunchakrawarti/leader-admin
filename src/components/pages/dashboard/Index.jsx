"use client";

import Heading from "@/components/atoms/Heading";
import React from "react";

const Maindashboard = () => {
  const dashboardCards = [
    {
      title: "Total Users",
      value: "12,540",
      icon: "ri-user-3-line",
      bg: "bg-blue-100",
      text: "text-blue-600",
    },

    {
      title: "Total Templates",
      value: "1,280",
      icon: "ri-layout-grid-line",
      bg: "bg-green-100",
      text: "text-green-600",
    },

    {
      title: "Total Transactions",
      value: "₹2,45,000",
      icon: "ri-wallet-3-line",
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },

    {
      title: "Active Subscriptions",
      value: "860",
      icon: "ri-vip-crown-2-line",
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <Heading
          title=" Dashboard"
          paragraph=" Welcome back, here’s your platform overview"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 font-inter">{card.title}</p>

                <h2 className="text-3xl font-bold text-gray-600 font-inter mt-2">
                  {card.value}
                </h2>
              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.bg}`}
              >
                <i className={`${card.icon} text-2xl ${card.text}`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maindashboard;
