"use client";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import React from "react";
import Heading from "@/components/atoms/Heading";

const TamplateTable = () => {

  const templates = [
    {
      _id: "69f9be2e8b61b478f05c033d",
      title: "Daily Developer Motivation",
      description:
        "A motivational poster for software developers focused on consistency.",
      category: {
        description: "Motivation",
      },
      tags: [
        "developer",
        "coding",
        "motivation",
      ],
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      dimensions: {
        width: 1080,
        height: 1080,
      },
      layers: [{}, {}, {}, {}],
      isPremium: false,
      price: 0,
      status: "active",
    },

    {
      _id: "69f9be2e8b61b478f05c033e",
      title: "Startup Success",
      description:
        "Creative startup success social media template.",
      category: {
        description: "Business",
      },
      tags: [
        "startup",
        "business",
        "success",
      ],
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      dimensions: {
        width: 1200,
        height: 628,
      },
      layers: [{}, {}, {}],
      isPremium: true,
      price: 199,
      status: "inactive",
    },

    {
      _id: "69f9be2e8b61b478f05c033f",
      title: "Fitness Motivation",
      description:
        "Gym and fitness motivational post design.",
      category: {
        description: "Fitness",
      },
      tags: [
        "gym",
        "fitness",
        "health",
      ],
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      dimensions: {
        width: 1080,
        height: 1350,
      },
      layers: [{}, {}, {}, {}, {}],
      isPremium: false,
      price: 0,
      status: "pending",
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
      key: "backgroundImageUrl",
      render: (value, row) => (
        <img
          src={value}
          alt={row.title}
          className="w-20 h-14 object-cover rounded-lg"
        />
      ),
    },

    {
      label: "Title",
      key: "title",
      render: (value, row) => (
        <div>
          <h3 className="font-semibold text-gray-900">
            {value}
          </h3>

          <p className="text-sm text-gray-500 max-w-[250px] truncate">
            {row.description}
          </p>
        </div>
      ),
    },

    {
      label: "Category",
      key: "category.description",
      render: (value) => (
        <Badge text={value} customStyle="capitalize" />
      ),
    },

    {
      label: "Tags",
      key: "tags",
      render: (value) => (
        <div className="flex flex-wrap gap-2 max-w-[220px]">
          {value.map((tag, index) => (
            <Badge
              key={index}
              text={tag}
              customStyle="capitalize"
            />
          ))}
        </div>
      ),
    },

    {
      label: "Dimensions",
      key: "dimensions",
      render: (value) => (
        <span className="font-medium">
          {value.width} × {value.height}
        </span>
      ),
    },

    {
      label: "Layers",
      key: "layers",
      render: (value) => (
        <Badge
          text={`${value.length} Layers`}
          customStyle="bg-blue-100 text-blue-700"
        />
      ),
    },

    {
      label: "Premium",
      key: "isPremium",
      render: (value) => (
        <Badge
          text={value ? "Premium" : "Free"}
          customStyle={
            value
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }
        />
      ),
    },

    {
      label: "Price",
      key: "price",
      render: (value) => (
        <span className="font-semibold">
          ₹{value}
        </span>
      ),
    },

    {
      label: "Status",
      key: "status",
      render: (value) => (
        <Badge text={value} customStyle="capitalize" />
      ),
    },
  ];

  // ACTIONS
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

      <div className="items-center justify-between mb-5">

       
        <Heading
        title="Template Management"
        paragraph=" Manage all templates from here"
        actions={[
          {
            text: "Add Template",
            icon: "ri-add-line",
            route: "/template/add-template",
            variant: "gradient",
          },
        ]}
      />

      </div>

      <BasicTable
        columns={columns}
        data={templates}
        actions={actions}
        pagination={true}
        pageSize={10}
        total={templates.length}
      />

    </div>
  );
};

export default TamplateTable;