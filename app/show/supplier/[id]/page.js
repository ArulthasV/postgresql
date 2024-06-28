"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ShowDetails = () => {
  const { id } = useParams();
  const [supplier, setSupplier] = useState({});

  useEffect(() => {
    const getSupplierDetails = async () => {
      const response = await fetch(`/api/supplier/${id}`);
      const result = await response.json();
      setSupplier(result.rows[0].data[0]);
    };
    getSupplierDetails();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="font-bold mb-4">Supplier Details</h1>
      <div className=" border-2 border-black pt-4 pb-4 px-8 py-8 bg-blue-200">
        <div>
          <span>Supplier Name : </span>
          {supplier.STR_SUPPLIER_NAME}
        </div>
        <div>
          <span>Supplier Address : </span>
          {supplier.STR_ADDRESS}
        </div>
        <div>
          <span>Organization ID : </span>
          {supplier.STR_ORGANIZATION_ID}
        </div>
        <div>
          <span>Product Type : </span>
          {supplier.STR_PRODUCT_TYPE}
        </div>
        <div>
          <span>Contact Person : </span>
          {supplier.STR_CONTACT_PERSON}
        </div>
        <div>
          <span>Telephone : </span>
          {supplier.STR_TELEPHONE_NO}
        </div>
        <div>
          <span>Mobile : </span>
          {supplier.STR_MOBILE_NO}
        </div>
        <div>
          <span>Email : </span>
          {supplier.STR_EMAIL}
        </div>
        <div>
          <span>Website : </span>
          {supplier.STR_WEBSITE}
        </div>
        <div>
          <span>Pay Type : </span>
          {supplier.STR_PAY_TYPE}
        </div>
        <div>
          <span>Employee For Contact : </span>
          {supplier.STR_EMPLOYEE_FOR_CONTACT}
        </div>
        <div>
          <span>Employee Relation Type : </span>
          {supplier.STR_EMPLOYEE_RELATION_TYPE}
        </div>
        <div>
          <span>Employee Email : </span>
          {supplier.STR_EMPLOYEE_EMAIL}
        </div>
        <div>
          <span>Status : </span>
          {supplier.STR_STATUS}
        </div>
        <div>
          <span>Account Name : </span>
          {supplier.STR_ACC_NAME}
        </div>
        <div>
          <span>Account Number : </span>
          {supplier.STR_ACC_NUMBER}
        </div>
        <div>
          <span>Bank : </span>
          {supplier.STR_BANK}
        </div>
        <div>
          <span>Branch : </span>
          {supplier.STR_BRANCH}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
