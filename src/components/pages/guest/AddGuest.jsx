"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddGuest = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Add Guest
        </h2>
      </div>
      <div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Guest Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <Input
            label="Guest Type"
            type="select"
            placeholder="Select guest type"
            options={[
              { label: "Speaker", value: "speaker" },
              { label: "Mentor", value: "mentor" },
              { label: "Guest", value: "guest" },
              { label: "Influencer", value: "influencer" },
            ]}
          />

          <Input
            label="Guest Name"
            type="text"
            placeholder="Enter guest name"
          />

          <Input
            label="Image URL"
            type="text"
            placeholder="Enter image URL"
          />

          <Input
            label="Designation"
            type="text"
            placeholder="Enter designation"
          />

        </div>

        <div className="mt-5">
          <Input
            label="Bio"
            type="textarea"
            placeholder="Enter guest bio"
          />
        </div>

      </div>
      <div>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Social Media Links
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <Input
            label="Instagram"
            type="text"
            placeholder="https://instagram.com/username"
          />

          <Input
            label="X / Twitter"
            type="text"
            placeholder="https://x.com/username"
          />

          <Input
            label="LinkedIn"
            type="text"
            placeholder="https://linkedin.com/in/username"
          />

          <Input
            label="Facebook"
            type="text"
            placeholder="https://facebook.com/username"
          />

          <Input
            label="Website"
            type="text"
            placeholder="https://example.com"
          />

        </div>

      </div>
      <div className="flex items-center gap-4 pt-2">

        <Button
          variant="gradient"
          className="px-8"
        >
          Add Guest
        </Button>

        <Button
          variant="outline"
          className="px-8"
        >
          Cancel
        </Button>

      </div>

    </div>
  );
};

export default AddGuest;