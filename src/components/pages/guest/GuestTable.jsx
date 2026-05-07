"use client";
import Heading from "@/components/atoms/Heading";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const GuestTable = () => {
  const guests = [
    {
      _id: "69f5bdfd693ca609c0c7cc3a",
      type: "speaker",
      name: "Amit Verma",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      designation: "Motivational Speaker",
      bio: "Amit Verma is a renowned motivational speaker with over 10 years of experience inspiring young entrepreneurs across India.",
      socialMedia: {
        instagram: "https://instagram.com/amitverma",
        x: "https://x.com/amitverma",
        linkedin: "https://linkedin.com/in/amitverma",
        facebook: "https://facebook.com/amitverma",
        website: "https://amitverma.com",
      },
      createdAt: "2026-05-02T09:03:57.752Z",
    },

    {
      _id: "69f5bdfd693ca609c0c7cc3c",
      type: "guest",
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      designation: "Business Coach",
      bio: "Priya Sharma helps startups scale their business with smart marketing strategies.",
      socialMedia: {
        instagram: "https://instagram.com/priyasharma",
        linkedin: "https://linkedin.com/in/priyasharma",
      },
      createdAt: "2026-05-03T10:20:57.752Z",
    },

    {
      _id: "69f5bdfd693ca609c0c7cc3d",
      type: "mentor",
      name: "Rahul Mehta",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      designation: "Startup Mentor",
      bio: "Rahul Mehta is a startup mentor and investor with expertise in tech startups.",
      socialMedia: {
        x: "https://x.com/rahulmehta",
        website: "https://rahulmehta.com",
      },
      createdAt: "2026-05-04T11:30:57.752Z",
    },
  ];
  const columns = [
    {
      label: "S.No",
      key: "serial",
      render: (_, row, index) => index + 1,
    },
    {
      label: "Guest",
      key: "image",
      render: (value, row) => (
        <div className="flex items-center gap-3 min-w-[200px]">
          <img
            src={value}
            alt={row.name}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />

          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{row.name}</h3>

            <p className="text-sm text-gray-500 truncate max-w-[160px]">
              {row.designation}
            </p>
          </div>
        </div>
      ),
    },

    {
      label: "Type",
      key: "type",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },

    {
      label: "Bio",
      key: "bio",
      render: (value) => (
        <p className="max-w-[320px] truncate text-sm text-gray-600">{value}</p>
      ),
    },

    {
      label: "Social Media",
      key: "socialMedia",
      render: (value) => (
        <div className="flex items-center gap-3 text-lg">
          {value?.instagram && (
            <i className="ri-instagram-line text-pink-500"></i>
          )}

          {value?.x && <i className="ri-twitter-x-line text-black"></i>}

          {value?.linkedin && (
            <i className="ri-linkedin-box-line text-blue-600"></i>
          )}

          {value?.facebook && (
            <i className="ri-facebook-circle-line text-blue-500"></i>
          )}

          {value?.website && <i className="ri-global-line text-green-600"></i>}
        </div>
      ),
    },

    {
      label: "Created At",
      key: "createdAt",
      render: (value) => (
        <span>{new Date(value).toLocaleDateString("en-GB")}</span>
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
        title="Guest Management"
        paragraph="Manage all guests from here"
        actions={[
          {
            text: "Add Guest",
            icon: "ri-add-line",
            route: "/guest/add-guest",
            variant: "gradient",
          },
        ]}
      />
      <BasicTable
        columns={columns}
        data={guests}
        actions={actions}
        pagination={true}
        pageSize={10}
        total={guests.length}
      />
    </div>
  );
};

export default GuestTable;
