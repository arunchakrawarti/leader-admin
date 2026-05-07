"use client";
import Heading from "@/components/atoms/Heading";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const Banner = () => {
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
        title="Banner Management"
        paragraph="Manage all website banners from here."
        actions={[
          {
            text: "Add Banner",
            icon: "ri-add-line",
            route: "/banner/add-new",
            variant: "gradient",
          },
        ]}
      />
      <BasicTable
        columns={columns}
        data={bannerData}
        actions={actions}
        pagination={true}
        total={bannerData.length}
        pageSize={10}
      />
    </div>
  );
};

export default Banner;

const bannerData = [
  {
    _id: "1",
    title: "Summer Sale Banner",
    type: "top",
    position: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    publicId: "banner_001",
    link: "https://example.com/summer-sale",
    description: "Flat 50% off on summer collection",
    isPublished: true,
    createdAt: "2026-05-01T13:15:51.364Z",
  },
  {
    _id: "2",
    title: "Fashion Week Banner",
    type: "middle",
    position: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
    publicId: "banner_002",
    link: "https://example.com/fashion",
    description: "Latest fashion trends available now",
    isPublished: true,
    createdAt: "2026-05-02T10:20:11.364Z",
  },
  {
    _id: "3",
    title: "Electronics Offer",
    type: "bottom",
    position: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    publicId: "banner_003",
    link: "https://example.com/electronics",
    description: "Best deals on electronics products",
    isPublished: false,
    createdAt: "2026-05-03T09:45:21.364Z",
  },
  {
    _id: "4",
    title: "Mobile App Promo",
    type: "sidebar",
    position: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
    publicId: "banner_004",
    link: "https://example.com/mobile-app",
    description: "Download our mobile app today",
    isPublished: true,
    createdAt: "2026-05-04T08:30:41.364Z",
  },
  {
    _id: "5",
    title: "New Arrival Banner",
    type: "top",
    position: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    publicId: "banner_005",
    link: "https://example.com/new-arrivals",
    description: "Check out our latest arrivals",
    isPublished: false,
    createdAt: "2026-05-05T11:10:31.364Z",
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
    key: "thumbnail",
    render: (value) => (
      <img
        src={value}
        alt="banner"
        className="w-12 h-12 object-cover rounded-lg"
      />
    ),
  },

  {
    label: "Title",
    key: "title",
  },

  {
    label: "Type",
    key: "type",
    render: (value) => <Badge text={value} customStyle="capitalize" />,
  },

  {
    label: "Position",
    key: "position",
  },

  {
    label: "Description",
    key: "description",
  },

  {
    label: "Status",
    key: "isPublished",
    render: (value) => (
      <Badge text={value ? "Active" : "Inactive"} customStyle="capitalize" />
    ),
  },

  {
    label: "Created At",
    key: "createdAt",
    render: (value) => new Date(value).toLocaleDateString(),
  },
];
