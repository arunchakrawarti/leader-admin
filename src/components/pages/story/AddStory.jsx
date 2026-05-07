"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddStory = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 font-montserrat">Add Story</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Story Title"
          type="text"
          placeholder="Enter story title"
        />

        <Input
          label="Media Type"
          type="select"
          placeholder="Select media type"
          options={[
            { label: "Image", value: "image" },
            { label: "Video", value: "video" },
          ]}
        />

        <div className="md:col-span-2">
          <Input label="Media URL" type="text" placeholder="Enter media URL" />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <Button variant="gradient" className="px-8">
          Add Story
        </Button>

        <Button variant="outline" className="px-8">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddStory;
