"use client";

import React from "react";
import Heading from "@/components/atoms/Heading";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const CategoryTable = () => {

  // Dummy Data
  const categoryData = [
    {
      _id: "69fb146769c823c7389124fd",
      title: "Motivation",
      parent: null,
      description: "Motivation description",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
      createdAt: "2026-05-06T10:13:59.356Z",
    },

    {
      _id: "69f58e48ac7f0041762d8712",
      title: "Business",
      parent: null,
      description: "Business category description",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400",
      createdAt: "2026-05-02T05:40:24.814Z",
    },

    {
      _id: "69f58e48ac7f0041762d8713",
      title: "Technology",
      parent: null,
      description: "Technology category description",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
      createdAt: "2026-05-01T08:10:10.814Z",
    },
  ];

 const columns = [
  {
    label: "S.No",
    key: "serial",
    render: (_, row, index) => index + 1,
  },

  {
    label: "Image",
    key: "img",
    render: (value) => (
      <img
        src={value}
        alt="category"
        className="w-12 h-12 rounded-lg object-cover border border-gray-200"
      />
    ),
  },

  {
    label: "Title",
    key: "title",
  },

  {
    label: "Parent",
    key: "parent",
    render: (value) => value || "No Parent",
  },

  {
    label: "Description",
    key: "description",
  },

  {
    label: "Created At",
    key: "createdAt",
    render: (value) =>
      new Date(value).toLocaleDateString(),
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
    <div className="space-y-6">
      <Heading
        title="Category Management"
        paragraph="Manage all categories from here."
        actions={[
          {
            text: "Add Category",
            icon: "ri-add-line",
            route: "/category/add-category",
            variant: "gradient",
          },
        ]}
      />
      <BasicTable
        columns={columns}
        data={categoryData}
        actions={actions}
        pagination={true}
        total={categoryData.length}
        pageSize={10}
      />
    </div>
  );
};

export default CategoryTable;