"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddSunscription = () => {
  return (
    <div className="space-y-6">
      
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h1 className="text-2xl mb-5 text-black font-semibold font-montserrat">Add Subscription</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Plan Name"
            type="text"
            placeholder="Enter subscription plan name"
          />

          <Input label="Price" type="number" placeholder="Enter price" />

          <Input
            label="Billing Cycle"
            type="select"
            placeholder="Select billing cycle"
            options={[
              { label: "One Time", value: "one_time" },
              { label: "Weekly", value: "weekly" },
              { label: "Monthly", value: "monthly" },
              { label: "Yearly", value: "yearly" },
            ]}
          />

          <Input
            label="Usage Type"
            type="select"
            placeholder="Select usage type"
            options={[
              { label: "Wallet", value: "wallet" },
              { label: "Subscription", value: "subscription" },
            ]}
          />

          <Input
            label="Wallet Credits"
            type="number"
            placeholder="Enter wallet credits"
          />

          <Input
            label="Sort Order"
            type="number"
            placeholder="Enter sort order"
          />

          <Input
            label="Unlimited Poster"
            type="select"
            placeholder="Select option"
            options={[
              { label: "True", value: true },
              { label: "False", value: false },
            ]}
          />

          <Input
            label="Status"
            type="select"
            placeholder="Select status"
            options={[
              { label: "Active", value: true },
              { label: "Inactive", value: false },
            ]}
          />
        </div>

        {/* IMAGE URL */}
        <div className="mt-5">
          <Input label="Image URL" type="text" placeholder="Enter image URL" />
        </div>

        {/* DESCRIPTION */}
        <div className="mt-5">
          <Input
            label="Description"
            type="textarea"
            placeholder="Enter subscription description"
          />
        </div>

        {/* FEATURES */}
        <div className="mt-5">
          <Input
            label="Features"
            type="textarea"
            placeholder="Feature 1, Feature 2, Feature 3"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 mt-8">
          <Button variant="gradient" className="px-8">
            Save Plan
          </Button>

          <Button variant="outline" className="px-8">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddSunscription;
