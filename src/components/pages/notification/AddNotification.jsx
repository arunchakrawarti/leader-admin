"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddNotification = () => {
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="mb-6">

          <h2 className="text-2xl font-semibold text-gray-900 font-montserrat">
            Add Notification
          </h2>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <Input
            label="User ID"
            type="text"
            placeholder="Enter user id"
          />

          <Input
            label="Title"
            type="text"
            placeholder="Enter notification title"
          />

          <Input
            label="Type"
            type="select"
            placeholder="Select notification type"
            options={[
              { label: "Info", value: "info" },
              { label: "Success", value: "success" },
              { label: "Warning", value: "warning" },
              { label: "Error", value: "error" },
            ]}
          />

          <Input
            label="Read Status"
            type="select"
            placeholder="Select status"
            options={[
              { label: "Read", value: true },
              { label: "Unread", value: false },
            ]}
          />

        </div>
        <div className="mt-5">

          <Input
            label="Message"
            type="textarea"
            placeholder="Enter notification message"
          />

        </div>
        <div className="flex items-center gap-4 mt-8">

          <Button
            variant="gradient"
            className="px-8"
          >
            Send Notification
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

export default AddNotification;