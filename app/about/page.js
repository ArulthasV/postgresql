import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 p-2">
        <h1 className="mb-4 text-center">Welcome to the about us page...</h1>
        <div className="flex justify-center items-center">
          <Link
            href="/about/contact-us"
            className="border-2 mx-2 hover:bg-blue-700 font-bold py-1 px-2 focus:outline-none focus:shadow-outline"
          >
            Contact Us
          </Link>
          <Link
            href="/about/subscribe"
            className="border-2 hover:bg-blue-700 font-bold py-1 px-2 focus:outline-none focus:shadow-outline"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
