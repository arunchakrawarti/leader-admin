"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddCategory = () => {
  return (
    <div className="space-y-6">

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        {/* Heading */}
        <h1 className="font-inter text-2xl font-semibold mb-6">
          Add Category
        </h1>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Title */}
          <Input
            label="Title"
            type="text"
            placeholder="Enter category title"
          />

          {/* Parent Category */}
          <Input
            label="Parent Category"
            type="select"
            placeholder="Select parent category"
            options={[
              { label: "None", value: "" },
              { label: "Motivation", value: "motivation" },
              { label: "Business", value: "business" },
              { label: "Technology", value: "technology" },
            ]}
          />

          {/* Image URL */}
          <Input
            label="Image URL"
            type="text"
            placeholder="Enter image url"
          />

        </div>

        {/* Description */}
        <div className="mt-5">
          <Input
            label="Description"
            type="textarea"
            placeholder="Enter category description"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">

          <Button
            variant="gradient"
            className="px-8"
          >
            Save Category
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

export default AddCategory;