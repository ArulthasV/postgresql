"use client";

import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "react-toastify/dist/ReactToastify.css";

function SupplierTable({ data, onClose, handleView }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "STR_CODE",
        header: "Supplier CODE",
      },
      {
        accessorKey: "STR_SUPPLIER_NAME",
        header: "Supplier Name",
      },
      {
        accessorKey: "STR_ORGANIZATION_ID",
        header: "Organization ID",
      },
      {
        accessorKey: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <div className="flex justify-between items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {handleView(row.original.STR_CODE)}}
            >
              View
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div>
            <MaterialReactTable table={table} />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default SupplierTable;
