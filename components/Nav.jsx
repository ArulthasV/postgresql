"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-black border-2">
      <div className="flex justify-between items-center mt-2 mb-4 bg-gray-400">
        <div>
          <Link className="text-white font-bold" href="/">
            <Image
              src="/images/DP.jpeg"
              width={37}
              height={37}
              className="inline m-1 rounded-full"
              alt="DP"
            />
            DP Infotech
          </Link>
        </div>
        <div>
        <Link
          href="/about"
          className="hover:bg-blue-700 rounded  text-white font-bold py-1 px-2 m-2 focus:outline-none focus:shadow-outline"
        >
          About us
        </Link>

        {session?.user ? (
          <>
            <Link
              href="/home"
              className="hover:bg-blue-700 rounded text-white font-bold py-1 px-2 m-2 focus:outline-none focus:shadow-outline"
            >
              Home
            </Link>
            <Link
              href="/api/auth/signout?callbackUrl=/"
              className="hover:bg-blue-700 rounded text-white font-bold py-1 px-2 m-2 focus:outline-none focus:shadow-outline"
            >
              Sign Out
            </Link>
            <Link 
            className="text-white font-bold"
            href="/user-profile">
              <Image
                src={
                  session?.user.image ? session.user.image : "/images/userProfile.png"
                }
                width={37}
                height={37}
                className="inline m-2 rounded-full"
                alt="profile"
              />
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/api/auth/signin?callbackUrl=/home"
              className="hover:bg-blue-700 rounded text-white font-bold py-1 px-2 m-2 focus:outline-none focus:shadow-outline"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="hover:bg-blue-700 rounded text-white font-bold py-1 px-2 m-2 focus:outline-none focus:shadow-outline"
            >
              Register
            </Link>
          </>
        )}
        </div>

      </div>
    </div>
  );
};

export default Nav;
