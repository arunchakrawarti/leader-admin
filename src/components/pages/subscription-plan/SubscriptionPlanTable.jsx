"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Heading from "@/components/atoms/Heading";

const SubscriptionPlanTable = () => {
  // DUMMY DATA
  const plans = [
    {
      _id: "69f593b7f2bdeb21efd5cc7c",
      name: "Basic Plan",
      images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085"],
      description: "Basic subscription plan",
      price: 99,
      currency: "INR",
      billingCycle: "one_time",
      usageType: "wallet",
      walletCredits: 100,
      unlimitedPoster: false,
      features: ["Feature 1", "Feature 2"],
      currentSubscribers: 0,
      sortOrder: 1,
      isActive: true,
      createdAt: "2026-05-02T06:03:35.678Z",
    },

    {
      _id: "69f593b7f2bdeb21efd5cc7d",
      name: "Premium Plan",
      images: ["https://images.unsplash.com/photo-1556740749-887f6717d7e4"],
      description: "Premium unlimited subscription",
      price: 499,
      currency: "INR",
      billingCycle: "monthly",
      usageType: "subscription",
      walletCredits: 1000,
      unlimitedPoster: true,
      features: ["Unlimited Access", "Premium Templates"],
      currentSubscribers: 120,
      sortOrder: 2,
      isActive: true,
      createdAt: "2026-05-03T10:10:35.678Z",
    },

    {
      _id: "69f593b7f2bdeb21efd5cc7e",
      name: "Starter Plan",
      images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f"],
      description: "Starter plan for beginners",
      price: 49,
      currency: "INR",
      billingCycle: "weekly",
      usageType: "wallet",
      walletCredits: 50,
      unlimitedPoster: false,
      features: ["Starter Access", "Basic Support"],
      currentSubscribers: 35,
      sortOrder: 3,
      isActive: false,
      createdAt: "2026-05-04T08:20:35.678Z",
    },
  ];
  const columns = [
    {
      label: "Image",
      key: "images",
      render: (value, row) => (
        <img
          src={value?.[0]}
          alt={row.name}
          className="w-16 h-16 rounded-lg object-cover"
        />
      ),
    },

    {
      label: "Plan",
      key: "name",
      render: (value, row) => (
        <div>
          <h3 className="font-semibold text-gray-900">{value}</h3>

          <p className="text-sm text-gray-500 max-w-[250px] truncate">
            {row.description}
          </p>
        </div>
      ),
    },

    {
      label: "Price",
      key: "price",
      render: (value, row) => (
        <span className="font-medium">
          ₹{value} {row.currency}
        </span>
      ),
    },

    {
      label: "Billing",
      key: "billingCycle",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },

    {
      label: "Usage Type",
      key: "usageType",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },

    {
      label: "Wallet Credits",
      key: "walletCredits",
    },

    {
      label: "Unlimited Poster",
      key: "unlimitedPoster",
      render: (value) => (
        <Badge
          text={value ? "Yes" : "No"}
          customStyle={
            value ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }
        />
      ),
    },

    {
      label: "Subscribers",
      key: "currentSubscribers",
    },

    {
      label: "Status",
      key: "isActive",
      render: (value) => <Badge text={value ? "Active" : "Inactive"} />,
    },

    {
      label: "Features",
      key: "features",
      render: (value) => (
        <div className="flex flex-wrap gap-2 max-w-[220px]">
          {value.map((item, index) => (
            <span
              key={index}
              className="bg-gray-100 px-2 py-1 rounded-md text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      ),
    },
  ];
  const actions = [
    ({ row }) => (
      <Button
        variant="secondary"
        className="!w-9 !h-9 !p-0 rounded-lg bg-blue-100 hover:bg-blue-200"
        title="View"
      >
        <i className="ri-eye-line text-lg text-blue-600"></i>
      </Button>
    ),

    ({ row }) => (
      <Button
        variant="success"
        className="!w-9 !h-9 !p-0 rounded-lg bg-green-100 hover:bg-green-200"
        title="Edit"
      >
        <i className="ri-pencil-line text-lg text-green-600"></i>
      </Button>
    ),

    ({ row }) => (
      <Button
        variant="danger"
        className="!w-9 !h-9 !p-0 rounded-lg bg-red-100 hover:bg-red-200 border-none"
        title="Delete"
      >
        <i className="ri-delete-bin-6-line text-lg text-red-500"></i>
      </Button>
    ),
  ];

  return (
    <div>
      <div className="mb-5">
        <Heading
          title="Subscription Plan Management"
          paragraph="Manage all subscription plans from here"
          actions={[
            {
              text: "Add Plan",
              icon: "ri-add-line",
              route: "/subscription-plan/add-subscription",
              variant: "gradient",
            },
          ]}
        />
      </div>
      <BasicTable
        columns={columns}
        data={plans}
        actions={actions}
        pagination={true}
        pageSize={10}
        total={plans.length}
      />
    </div>
  );
};

export default SubscriptionPlanTable;
