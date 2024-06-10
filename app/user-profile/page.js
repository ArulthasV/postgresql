import React from "react";
import Link from "next/link";

const Profile = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <div  className="border-2 p-2">
        <h1 className="text-center mb-4">Welcome to user profile page....</h1>
        <div className="flex justify-center items-center">
        <Link
            href="/user-profile/edit-profile"
            className="mx-2 border-2 hover:bg-blue-700 font-bold py-1 px-2 focus:outline-none focus:shadow-outline"
          >
            Edit Profile
          </Link>
          <Link
            href="/user-profile/switch-account"
            className="border-2 hover:bg-blue-700  font-bold py-1 px-2 focus:outline-none focus:shadow-outline"
          >
            Switch Account
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
