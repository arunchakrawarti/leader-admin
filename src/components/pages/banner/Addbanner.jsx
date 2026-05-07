"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Addbanner = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <h1 className="font-montserrat text-2xl font-semibold mb-3 text-black">
          Add Banner
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Title"
            type="text"
            placeholder="Enter banner title"
          />
          <Input
            label="Type"
            type="select"
            placeholder="Select banner type"
            options={[
              { label: "Top", value: "top" },
              { label: "Middle", value: "middle" },
              { label: "Bottom", value: "bottom" },
              { label: "Sidebar", value: "sidebar" },
            ]}
          />
          <Input
            label="Position"
            type="number"
            placeholder="Enter position"
          />
          <Input
            label="Thumbnail URL"
            type="text"
            placeholder="Enter image url"
          />
          <Input
            label="Public ID"
            type="text"
            placeholder="Enter public id"
          />
          <Input
            label="Link"
            type="text"
            placeholder="Enter redirect link"
          />

          {/* Status */}
          <Input
            label="Status"
            type="select"
            placeholder="Select status"
            options={[
              { label: "Published", value: true },
              { label: "Unpublished", value: false },
            ]}
          />
        </div>
        <div className="mt-5">
          <Input
            label="Description"
            type="textarea"
            placeholder="Enter banner description"
          />
        </div>
        <div className="flex items-center gap-4 mt-6">

          <Button
            variant="gradient"
            className="px-8"
          >
            Save Banner
          </Button>

          <Button
            variant="outline"
            className="px-8"
          >
            Cancel
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Addbanner;