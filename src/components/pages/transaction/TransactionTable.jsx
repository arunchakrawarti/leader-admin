"use client";
import Heading from "@/components/atoms/Heading";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import React from "react";

const TransactionTable = () => {
  const transactions = [
    {
      _id: "69f88f71bb21cd30c3e065fc",
      payerId: "69f58dcbdbd04f2a59f953d0",
      amount: 99,
      planId: "69f593b7f2bdeb21efd5cc7c",
      razorpayOrderId: "order_SlHkikjqOYRPJT",
      status: "success",
      createdAt: "2026-05-04T12:22:09.532Z",
      updatedAt: "2026-05-04T12:50:07.552Z",
      razorpayPaymentId: "pay_SlHkikjqOYRPJT",
      razorpaySignature: "signature_123456",
    },

    {
      _id: "69f88f71bb21cd30c3e065fd",
      payerId: "69f58dcbdbd04f2a59f953d1",
      amount: 199,
      planId: "69f593b7f2bdeb21efd5cc7d",
      razorpayOrderId: "order_XYZ123456",
      status: "pending",
      createdAt: "2026-05-05T10:15:20.532Z",
      updatedAt: "2026-05-05T10:20:30.552Z",
      razorpayPaymentId: "pay_XYZ123456",
      razorpaySignature: "signature_654321",
    },

    {
      _id: "69f88f71bb21cd30c3e065fe",
      payerId: "69f58dcbdbd04f2a59f953d2",
      amount: 499,
      planId: "69f593b7f2bdeb21efd5cc7e",
      razorpayOrderId: "order_ABC789654",
      status: "failed",
      createdAt: "2026-05-06T09:10:11.532Z",
      updatedAt: "2026-05-06T09:30:40.552Z",
      razorpayPaymentId: "pay_ABC789654",
      razorpaySignature: "signature_789456",
    },
  ];
  const columns = [
    {
      label: "S.No",
      key: "serial",
      render: (_, row, index) => index + 1,
    },
    {
      label: "Transaction ID",
      key: "_id",
      render: (value) => <p className="max-w-[180px] truncate">{value}</p>,
    },

    {
      label: "Payer ID",
      key: "payerId",
      render: (value) => <p className="max-w-[180px] truncate">{value}</p>,
    },

    {
      label: "Amount",
      key: "amount",
      render: (value) => (
        <span className="font-semibold text-green-600">₹{value}</span>
      ),
    },

    {
      label: "Plan ID",
      key: "planId",
      render: (value) => <p className="max-w-[180px] truncate">{value}</p>,
    },

    {
      label: "Order ID",
      key: "razorpayOrderId",
      render: (value) => <p className="max-w-[180px] truncate">{value}</p>,
    },

    {
      label: "Payment ID",
      key: "razorpayPaymentId",
      render: (value) => <p className="max-w-[180px] truncate">{value}</p>,
    },

    {
      label: "Status",
      key: "status",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },

    {
      label: "Created At",
      key: "createdAt",
      render: (value) => <span>{new Date(value).toLocaleDateString()}</span>,
    },

    {
      label: "Updated At",
      key: "updatedAt",
      render: (value) => <span> {new Date(value).toLocaleDateString("en-GB")}</span>,
    },
  ];

  return (
    <div className="space-y-5">
      <Heading
        title="Transaction Management"
        paragraph="Manage all transactions from here"
      />
      <BasicTable
        columns={columns}
        data={transactions}
        pagination={true}
        pageSize={10}
        total={transactions.length}
      />
    </div>
  );
};

export default TransactionTable;
