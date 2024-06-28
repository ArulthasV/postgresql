"use client";

import React, { useEffect, useState } from "react";
import SupplierForm from "@components/SupplierForm";
import SupplierTable from "@components/SupplierTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Supplier = () => {
  const [showTable,setShowTable] = useState(false)
  const [suppliers,setSuppliers] = useState([])
  const router = useRouter()

  useEffect(()=>{
    const getAllTheSuppliers = async () => {
      const response = await fetch("/api/supplier",{
        method:"GET"
      })
      const result = await response.json()
      setSuppliers(result.rows[0].data)
    }
    getAllTheSuppliers()
  },[])

  const handleViewClick = (code) => {
    router.push(`/show/supplier/${code}`)
  }

  const handleSubmit = async (data) => {

    try {
      const response = await fetch("/api/supplier", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.status === 201) {
        toast.success("Successfully registered!")
      } else if (response.status === 409) {
        throw new Error("Supplier already exists!");
      } else if(response.status === 500) {
        throw new Error("Internal server error!");
      }
    } catch (err) {
      console.log(err);
      toast.success(err.message)
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        {showTable ? (
         <>
            <SupplierTable data={suppliers} onClose={(prev)=>setShowTable(!prev)} handleView={(id)=>handleViewClick(id)}/>
         </> 
        ) : (
                  <div>
                  <h1 className="text-center font-bold mb-8">Create New Supplier</h1>
                  <SupplierForm onSubmitted={(data) => handleSubmit(data)} handleShow={(prev)=>setShowTable(!prev)} />
                </div>
        )}

      </div>
    </>
  );
};

export default Supplier;
