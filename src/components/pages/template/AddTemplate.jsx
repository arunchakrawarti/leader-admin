"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Heading from "@/components/atoms/Heading";

const AddTemplate = () => {
  const defaultLayer = {
    type: "text",
  };

  const [layers, setLayers] = useState([defaultLayer]);

  // ADD LAYER
  const handleAddLayer = () => {
    setLayers([...layers, defaultLayer]);
  };

  // REMOVE LAYER
  const handleRemoveLayer = (index) => {
    const updatedLayers = layers.filter((_, i) => i !== index);
    setLayers(updatedLayers);
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <Heading
          title=" Add New Template"
          paragraph=" Create beautiful templates with multiple editable layers"
        />
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Template Information
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Basic details about your template
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            label="Template Title"
            type="text"
            placeholder="Enter template title"
          />

          <Input label="Category" type="text" placeholder="Enter category id" />

          <Input
            label="Background Image URL"
            type="text"
            placeholder="https://example.com/image.jpg"
          />

          <Input
            label="Thumbnail URL"
            type="text"
            placeholder="https://example.com/thumb.jpg"
          />

          <Input label="Canvas Width" type="number" placeholder="1080" />

          <Input label="Canvas Height" type="number" placeholder="1080" />

          <Input label="Price" type="number" placeholder="0" />

          <Input label="Download Count" type="number" placeholder="0" />

          <Input
            label="Premium Template"
            type="select"
            placeholder="Select option"
            options={[
              { label: "Free", value: false },
              { label: "Premium", value: true },
            ]}
          />

          <Input
            label="Watermark"
            type="select"
            placeholder="Select option"
            options={[
              { label: "Disabled", value: false },
              { label: "Enabled", value: true },
            ]}
          />

          <Input
            label="Template Status"
            type="select"
            placeholder="Select status"
            options={[
              { label: "Active", value: true },
              { label: "Inactive", value: false },
            ]}
          />

          <Input label="Created By" type="text" placeholder="Enter user id" />
        </div>

        <div className="mt-5">
          <Input
            label="Description"
            type="textarea"
            placeholder="Write template description..."
          />
        </div>

        <div className="mt-5">
          <Input
            label="Tags"
            type="text"
            placeholder="coding, business, motivation"
          />
        </div>

        <div className="mt-5">
          <Input
            label="Watermark Text"
            type="text"
            placeholder="Enter watermark text"
          />
        </div>
      </div>

      {/* LAYERS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Template Layers
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Add multiple text or image layers
            </p>
          </div>

          <Button variant="gradient" className="px-6" onClick={handleAddLayer}>
            + Add Layer
          </Button>
        </div>

        {layers.map((layer, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Layer {index + 1}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Configure your layer settings
                  </p>
                </div>
              </div>

              {layers.length > 1 && (
                <Button
                  variant="outline"
                  onClick={() => handleRemoveLayer(index)}
                  className="border-red-200 text-red-500 hover:bg-red-50"
                >
                  Remove Layer
                </Button>
              )}
            </div>

            {/* LAYER FORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                label="Layer Type"
                type="select"
                placeholder="Select type"
                options={[
                  { label: "Text", value: "text" },
                  { label: "Image", value: "image" },
                ]}
              />

              <Input
                label="Layer Key"
                type="text"
                placeholder="example: titleText"
              />

              <Input label="X Position" type="number" placeholder="0" />

              <Input label="Y Position" type="number" placeholder="0" />

              <Input label="Width" type="number" placeholder="300" />

              <Input label="Height" type="number" placeholder="300" />

              <Input label="Font Family" type="text" placeholder="Arial" />

              <Input label="Font Size" type="number" placeholder="48" />

              <Input label="Font Weight" type="text" placeholder="700" />

              <Input label="Color" type="color" className="h-12"/>

              <Input
                label="Text Align"
                type="select"
                placeholder="Select align"
                options={[
                  { label: "Left", value: "left" },
                  { label: "Center", value: "center" },
                  { label: "Right", value: "right" },
                ]}
              />

              <Input
                label="Placeholder"
                type="text"
                placeholder="Enter placeholder"
              />

              <Input
                label="Default Text"
                type="text"
                placeholder="Enter default text"
              />

              <Input
                label="Default Image URL"
                type="text"
                placeholder="https://example.com/image.jpg"
              />

              <Input label="Max Width" type="number" placeholder="600" />

              <Input
                label="Wrap Text"
                type="select"
                placeholder="Select option"
                options={[
                  { label: "True", value: true },
                  { label: "False", value: false },
                ]}
              />

              <Input label="Opacity" type="number" placeholder="1" />

              <Input label="Rotation" type="number" placeholder="0" />
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER BUTTONS */}
      <div className="flex items-center justify-end gap-4 pt-2">
        <Button variant="outline" className="px-8">
          Cancel
        </Button>

        <Button variant="gradient" className="px-8">
          Save Template
        </Button>
      </div>
    </div>
  );
};

export default AddTemplate;
