"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>

          <p className="text-sm text-gray-500 mt-2">
            Welcome back! Please login to continue
          </p>
        </div>
        <form className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            icon="ri-mail-line"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon="ri-lock-password-line"
          />
          <Button type="submit" variant="gradient" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
