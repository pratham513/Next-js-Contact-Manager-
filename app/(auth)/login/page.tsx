// this is a server component by default
import LoginForm from "@/app/_components/LoginForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-md bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">
        Login <br />
        <LoginForm />
        <p className="mt-4 text-center">
          Don`t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register{" "}
          </Link>
        </p>
      </h1>
    </div>
  );
};

export default page;
