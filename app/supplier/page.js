"use client";

import React from "react";
import SupplierForm from "@components/SupplierForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";


const Supplier = () => {

  const handleSubmit = async (data) => {
    console.log(data);
    // try {
    //   const response = await fetch("/api/user", {
    //     method: "POST",
    //     body: JSON.stringify({ email: data.email, password: data.password }),
    //   });
    //   if (response.status === 201) {
    //     toast.success("Successfully registered!")
    //   } else if (response.status === 409) {
    //     throw new Error("Email already registered!");
    //   } else if(response.status === 500) {
    //     throw new Error("Internal server error!");
    //   }
    // } catch (err) {
    //   console.log(err);
    //   toast.success(err.message)
    // }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <h1 className="text-center font-bold mb-8">Create an account</h1>
          <SupplierForm onSubmitted={(data) => handleSubmit(data)} />
        </div>
      </div>
    </>
  );
};

export default Supplier;
