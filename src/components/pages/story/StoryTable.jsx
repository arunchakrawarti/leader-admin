"use client";
import Heading from "@/components/atoms/Heading";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";


const StoryTable = () => {
  const stories = [
    {
      _id: "69fc5bda69c823c738912516",
      title: "My Story",
      mediaUrl:
        "https://image.devloperhemant.com/wp-content/uploads/poster_1777715825744.webp",
      mediaType: "image",
      isActive: true,
      expiresAt: "2026-05-08T09:31:06.703Z",
      userId: "69f4a6de3cc04f37a386b01f",
      isDeleted: false,
      createdAt: "2026-05-07T09:31:06.703Z",
    },

    {
      _id: "69fc5bda69c823c738912517",
      title: "Travel Vlog",
      mediaUrl:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      mediaType: "video",
      isActive: false,
      expiresAt: "2026-05-10T09:31:06.703Z",
      userId: "69f4a6de3cc04f37a386b01f",
      isDeleted: false,
      createdAt: "2026-05-06T09:31:06.703Z",
    },

    {
      _id: "69fc5bda69c823c738912518",
      title: "Fitness Motivation",
      mediaUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      mediaType: "image",
      isActive: true,
      expiresAt: "2026-05-12T09:31:06.703Z",
      userId: "69f4a6de3cc04f37a386b01f",
      isDeleted: false,
      createdAt: "2026-05-05T09:31:06.703Z",
    },
  ];
  const columns = [
    {
      label: "Media",
      key: "mediaUrl",
      render: (value, row) => (
        <div className="flex items-center gap-3">

          <img
            src={value}
            alt={row.title}
            className="w-16 h-16 rounded-xl object-cover border border-gray-200"
          />

          <div>
            <h3 className="font-semibold text-gray-900">
              {row.title}
            </h3>

            <p className="text-sm text-gray-500 capitalize">
              {row.mediaType}
            </p>
          </div>

        </div>
      ),
    },

    {
      label: "Media Type",
      key: "mediaType",
      render: (value) => (
        <Badge
          text={value}
          customStyle="capitalize"
        />
      ),
    },

    {
      label: "Status",
      key: "isActive",
      render: (value) => (
        <Badge
          text={value ? "active" : "inactive"}
          customStyle="capitalize"
        />
      ),
    },

    {
      label: "User ID",
      key: "userId",
      render: (value) => (
        <p className="max-w-[180px] truncate">
          {value}
        </p>
      ),
    },

    {
      label: "Expires At",
      key: "expiresAt",
      render: (value) => (
        <span>
          {new Date(value).toLocaleDateString()}
        </span>
      ),
    },

    {
      label: "Created At",
      key: "createdAt",
      render: (value) => (
        <span>
          {new Date(value).toLocaleDateString()}
        </span>
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
    <div className="space-y-5">
      <Heading
        title="Story Management"
        paragraph="Manage all stories from here"
        actions={[
          {
            text: "Add Story",
            icon: "ri-add-line",
            route: "/story/add-story",
            variant: "gradient",
          },
        ]}
      />
      <BasicTable
        columns={columns}
        data={stories}
        actions={actions}
        pagination={true}
        pageSize={10}
        total={stories.length}
      />

    </div>
  );
};

export default StoryTable;