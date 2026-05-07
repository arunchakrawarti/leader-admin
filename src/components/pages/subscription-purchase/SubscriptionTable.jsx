"use client";
import Heading from "@/components/atoms/Heading";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import React from "react";


const SubscriptionTable = () => {

  const subscriptions = [
    {
      _id: "69f895ff5502d8375d8d0620",
      user: "69f58dcbdbd04f2a59f953d0",
      plan: "69f593b7f2bdeb21efd5cc7c",
      pricePaid: 99,
      paymentId: "order_SlHkikjqOYRPJT",
      startDate: "2026-05-04T12:50:07.717Z",
      endDate: null,
      status: "active",
      walletBalance: 0,
      unlimitedPoster: false,
      totalPostersGenerated: 0,
      isCancelled: false,
      createdAt: "2026-05-04T12:50:07.721Z",
    },

    {
      _id: "69f895ff5502d8375d8d0621",
      user: "69f58dcbdbd04f2a59f953d1",
      plan: "69f593b7f2bdeb21efd5cc7d",
      pricePaid: 499,
      paymentId: "order_XYZ123456",
      startDate: "2026-05-05T10:20:07.717Z",
      endDate: "2026-06-05T10:20:07.717Z",
      status: "expired",
      walletBalance: 50,
      unlimitedPoster: true,
      totalPostersGenerated: 120,
      isCancelled: true,
      createdAt: "2026-05-05T10:20:07.721Z",
    },
  ];
  const columns = [
    {
    label: "S.No",
    key: "serial",
    render: (_, row, index) => index + 1,
  },
    {
      label: "User ID",
      key: "user",
      render: (value) => (
        <span className="text-sm text-gray-700">
          {value}
        </span>
      ),
    },

    {
      label: "Plan ID",
      key: "plan",
      render: (value) => (
        <span className="text-sm text-gray-700">
          {value}
        </span>
      ),
    },

    {
      label: "Price Paid",
      key: "pricePaid",
      render: (value) => (
        <span className="font-medium">
          ₹{value}
        </span>
      ),
    },

    {
      label: "Payment ID",
      key: "paymentId",
    },

    {
      label: "Status",
      key: "status",
      render: (value) => (
        <Badge
          text={value}
          customStyle="capitalize"
        />
      ),
    },

    {
      label: "Wallet Balance",
      key: "walletBalance",
    },

    {
      label: "Unlimited Poster",
      key: "unlimitedPoster",
      render: (value) => (
        <Badge
          text={value ? "Yes" : "No"}
          customStyle={
            value
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }
        />
      ),
    },

    {
      label: "Posters Generated",
      key: "totalPostersGenerated",
    },

    {
      label: "Cancelled",
      key: "isCancelled",
      render: (value) => (
        <Badge
          text={value ? "Cancelled" : "Active"}
          customStyle={
            value
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }
        />
      ),
    },

    {
      label: "Start Date",
      key: "startDate",
      render: (value) => (
        <span>
          {new Date(value).toLocaleDateString()}
        </span>
      ),
    },

    {
      label: "End Date",
      key: "endDate",
      render: (value) => (
        <span>
          {value
            ? new Date(value).toLocaleDateString()
            : "-"}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <Heading
        title="Subscription Management"
        paragraph="Manage all subscription purchases from here"
      />
      <BasicTable
        columns={columns}
        data={subscriptions}
        pagination={true}
        pageSize={10}
        total={subscriptions.length}
      />

    </div>
  );
};

export default SubscriptionTable;