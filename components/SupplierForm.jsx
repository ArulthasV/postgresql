"use client";

import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function SupplierForm({ onSubmitted }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    onSubmitted(data);
    reset();
  };

  const [payType, setPayType] = useState("");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="mb-4">
        <label
          className=" text-gray-700 text-sm font-bold mb-2"
          htmlFor="supplierName"
        >
          Supplier Name
        </label>
        <input
          {...register("supplierName", {
            required: "Supplier name is required.",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Use only English alphabetic letters.",
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="supplierName"
          type="text"
          placeholder="Supplier Name"
        />
        {errors.supplierName && errors.supplierName.message}
      </div>
      <div className="mb-4">
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="address"
        >
          Address
        </label>
        <input
          {...register("address", {
            required: "Address is required.",
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          placeholder="Address"
        />
        {errors.address && errors.address.message}
      </div>
      <div className="mb-4">
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="organizationId"
        >
          Organization ID
        </label>
        <input
          {...register("organizationId", {
            required: "Organization id is required.",
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="organizationId"
          type="text"
          placeholder="Organization ID"
        />
        {errors.organizationId && errors.organizationId.message}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="productType"
        >
          Product Type
        </label>
        <select
          id="productType"
          {...register("productType", {
            required: "Product type is required.",
          })}
        >
          <option value="">Select...</option>
          <option value="type 1">type 1</option>
          <option value="type 2">type 2</option>
          <option value="type 3">type 3</option>
        </select>
        {errors.productType && errors.productType.message}
      </div>
      <div className="mb-4">
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="contactPerson"
        >
          Contact Person
        </label>
        <input
          {...register("contactPerson", {
            required: "Contact Person is required.",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Use only English alphabetic letters.",
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="contactPerson"
          type="text"
          placeholder="Contact Person"
        />
        {errors.contactPerson && errors.contactPerson.message}
      </div>
      <div className="mb-4">
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="telephone"
        >
          Telephone No
        </label>
        <input
          {...register("telephone", {
            required: "Telephone no is required.",
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="telephone"
          type="tel"
          pattern="^21\d{7}$"
          placeholder="21-3456789"
        />
        {errors.telephone && errors.telephone.message}
      </div>
      <div className="mb-4">
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="mobile"
        >
          Mobile No
        </label>
        <input
          {...register("mobile", {
            required: "Mobile no is required.",
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mobile"
          type="tel"
          pattern="[1-9]{1}[0-9]{8}"
          placeholder="123456789"
        />
        {errors.mobile && errors.mobile.message}
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid mail id.",
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
        />
        {errors.email && errors.email.message}
      </div>
      <div className="mb-4">
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="website"
        >
          Website
        </label>
        <input
          {...register("website", {
            required: "Website is required.",
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="website"
          type="text"
          placeholder="Website"
        />
        {errors.website && errors.website.message}
      </div>
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-bold">Pay Type</p>
        <input
          {...register("payType", {
            required: "required.",
          })}
          type="radio"
          id="cash"
          value="cash"
          className="mx-1"
          onChange={(e) => setPayType(e.target.value)}
        />
        <label htmlFor="cash" className="mx-1">
          Cash
        </label>
        <input
          {...register("payType", {
            required: "required.",
          })}
          type="radio"
          id="card"
          value="card"
          className="mx-1"
          onChange={(e) => setPayType(e.target.value)}
        />
        <label htmlFor="card">Card</label>
      </div>
      {payType === "cash" && (
        <>
          <div className="mb-4">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              htmlFor="accountName"
            >
              Account Name
            </label>
            <input
              {...register("accountName", {
                required: "Account Name is required.",
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="accountName"
              type="text"
              placeholder="Account Name"
            />
            {errors.accountName && errors.accountName.message}
          </div>
          <div className="mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="accountNumber"
            >
              Account Number
            </label>
            <input
              {...register("accountNumber", {
                required: "Account Number is required.",
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="accountNumber"
              type="text"
              placeholder="Account Number"
            />
            {errors.accountNumber && errors.accountNumber.message}
          </div>
          <div className="mb-4">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              htmlFor="bank"
            >
              Bank
            </label>
            <input
              {...register("bank", {
                required: "Bank name is required.",
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bank"
              type="text"
              placeholder="Bank"
            />
            {errors.bank && errors.bank.message}
          </div>
          <div className="mb-4">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              htmlFor="branch"
            >
              Branch
            </label>
            <input
              {...register("branch", {
                required: "Branch Name is required.",
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="branch"
              type="text"
              placeholder="Branch Name"
            />
            {errors.branch && errors.branch.message}
          </div>
        </>
      )}
      <div className="mb-4">
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="employeeForContact"
        >
          Employee For Contact
        </label>
        <input
          {...register("employeeForContact", {
            required: "Employee For Contact is required.",
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="employeeForContact"
          type="text"
          placeholder="Employee For Contact"
        />
        {errors.employeeForContact && errors.employeeForContact.message}
      </div>
      <div className="mb-4">
        <label
          className="text-gray-700 text-sm font-bold mb-2"
          htmlFor="employeeRelationType"
        >
          Employee Relation Type
        </label>
        <input
          {...register("employeeRelationType", {
            required: "Employee Relation Type is required.",
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="employeeRelationType"
          type="text"
          placeholder="Employee Relation Type"
        />
        {errors.employeeRelationType && errors.employeeRelationType.message}
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Employee email
        </label>
        <input
          {...register("employeeEmail", {
            required: "Employee email is required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid mail id.",
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="employeeEmail"
          type="text"
          placeholder="Employee Email"
        />
        {errors.employeeEmail && errors.employeeEmail.message}
      </div>
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-bold">Status</p>
        <input
          {...register("status", {
            required: "required.",
          })}
          type="radio"
          id="active"
          value="active"
          className="mx-1"
        />
        <label htmlFor="active" className="mx-1">
          Active
        </label>
        <input
          {...register("status", {
            required: "required.",
          })}
          type="radio"
          id="notActive"
          value="not active"
          className="mx-1"
        />
        <label htmlFor="notActive">Not active</label>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="luUser"
        >
          LU User
        </label>
        <select
          id="luUser"
          {...register("luUser", {
            required: "LU User is required.",
          })}
        >
          <option value="">Select...</option>
          <option value="arulthas">arulthas</option>
          <option value="suganjan">suganjan</option>
          <option value="saanusan">saanusan</option>
          <option value="paranika">paranika</option>
          <option value="jenifer">jenifer</option>
        </select>
        {errors.luUser && errors.luUser.message}
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="luDate">
          LU Date
        </label>
        <input
          {...register("luDate", {
            required: "LU Date is required.",
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="luDate"
          type="date"
        />
        {errors.luDate && errors.luDate.message}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="luPremises"
        >
          LU Premises
        </label>
        <select
          id="luPremises"
          {...register("luPremises", {
            required: "LU Premis is required.",
          })}
        >
          <option value="">Select...</option>
          <option value="JAF">JAF</option>
          <option value="COL">COL</option>
          <option value="BAT">BAT</option>
          <option value="BAD">BAD</option>
          <option value="KAN">KAN</option>
          <option value="MAT">MAT</option>
        </select>
        {errors.luPremises && errors.luPremises.message}
      </div>
      <div className="flex items-center justify-center mb-4">
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SupplierForm;
