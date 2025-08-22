import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" sm:p-4 md:p-5 bg-[#131e2b] text-white sm:text-xl md:text-xl font-semibold">
        <div className="flex justify-center items-center border-black p-3">
          <h1>TechStart</h1>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className=" sm:text-xl md:text-2xl">Join our Community</h1>
          <h1 className="text-center md-text-xl">Follow us on Instagram and Snapchat for more!</h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-2 py-1 mb-2 text-xl bg-white text-[#131e2b] rounded-lg hover:bg-[#555e69] hover:text-white transition"
          >
            Go to Top
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center p-2 text-[#131e2b] bg-gray-100">
        <h1>© 2024-2025, TechStart.com, Inc. or its affiliate.</h1>
      </div>
    </div>
  );
};

export default Footer;
