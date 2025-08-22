import React, { useState } from "react";
import BackGround from "../assets/images/2.png";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The form data is : ", formData);
    alert("The form is submitted successfully");
    setformData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      className="w-full min-h-screen bg-cover text-white"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex justify-center items-center flex-col p-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <h1 className="text-lg md:text-xl max-w-2xl">
          Become a part of our family and find your favourite tech items at
          affordable prices on just one click..
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-8 px-4 md:px-12 ">
        <div className="flex flex-col justify-center items-center md:items-start font-semibold text-lg md:text-2xl gap-4 text-center md:text-left">
          <h1>📸 Instagram: Techspace Official</h1>
          <h1>📧 Email: techspace123@gmail.com</h1>
          <h1>📞 Contact No: 03408700002</h1>
        </div>

        <div className="border rounded-xl p-6 md:p-8 bg-[#1f2d3d] bg-opacity-90 w-full max-w-md text-white">
          <h2 className="font-bold text-lg md:text-xl text-center mb-4">
            Contact Us Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <p className="pb-2">Enter your name:</p>
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded-md p-2 w-full text-white "
              />
            </div>
            <div>
              <p className="pb-2">Enter your email:</p>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded-md p-2 w-full "
              />
            </div>
            <div>
              <p className="pb-2">Enter your phone no:</p>
              <input
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <p className="pb-2">Enter your feedback:</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your feedback"
                className="border rounded-md p-2 w-full  min-h-[100px]"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 border-2 border-white rounded-2xl text-white hover:bg-white hover:text-[#1f2d3d] transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
