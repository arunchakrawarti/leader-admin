"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Heading from "@/components/atoms/Heading";

const NotificationTable = () => {
  const notifications = [
    {
      _id: "69f59111db0ebc7f666903c4",
      user: "69f58dcbdbd04f2a59f953d0",
      title: "Welcome",
      message: "Welcome to our app!",
      type: "info",
      isRead: false,
      deliveredAt: "2026-05-02T05:52:17.990Z",
      createdAt: "2026-05-02T05:52:17.991Z",
    },

    {
      _id: "69f59111db0ebc7f666903c5",
      user: "69f58dcbdbd04f2a59f953d1",
      title: "Order Delivered",
      message: "Your order has been delivered successfully.",
      type: "success",
      isRead: true,
      deliveredAt: "2026-05-03T08:20:10.990Z",
      createdAt: "2026-05-03T08:10:17.991Z",
    },

    {
      _id: "69f59111db0ebc7f666903c6",
      user: "69f58dcbdbd04f2a59f953d2",
      title: "Payment Failed",
      message: "Your payment could not be processed.",
      type: "failed",
      isRead: false,
      deliveredAt: "2026-05-04T09:15:17.990Z",
      createdAt: "2026-05-04T09:10:17.991Z",
    },
  ];
  const columns = [
    {
      label: "S.No",
      key: "serial",
      render: (_, row, index) => index + 1,
    },
    {
      label: "Title",
      key: "title",
      render: (value, row) => (
        <div>
          <h3 className="font-semibold text-gray-900">{value}</h3>

          <p className="text-sm text-gray-500 max-w-[250px] truncate">
            {row.message}
          </p>
        </div>
      ),
    },

    {
      label: "User ID",
      key: "user",
      render: (value) => <span className="text-sm text-gray-600">{value}</span>,
    },

    {
      label: "Type",
      key: "type",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },

    {
      label: "Status",
      key: "isRead",
      render: (value) => (
        <Badge
          text={value ? "Read" : "Unread"}
          customStyle={
            value
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }
        />
      ),
    },

    {
      label: "Delivered At",
      key: "deliveredAt",
      render: (value) => <span>{new Date(value).toLocaleDateString()}</span>,
    },

    {
      label: "Created At",
      key: "createdAt",
      render: (value) => <span>{new Date(value).toLocaleDateString()}</span>,
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
    <div className="">
      <div className="mb-5">
        <Heading
          title="Notifications"
          paragraph="Manage all notification records"
          actions={[
            {
              text: "Add Notification",
              icon: "ri-add-line",
              route: "/notification/add-notification",
              variant: "gradient",
            },
          ]}
        />
      </div>
      <BasicTable
        columns={columns}
        data={notifications}
        actions={actions}
        pagination={true}
        pageSize={10}
        total={notifications.length}
      />
    </div>
  );
};

export default NotificationTable;
