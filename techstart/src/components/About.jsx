import React from "react";
import Aboutimg from "../assets/images/3.png";

const About = () => {
  return (
    <div
      className="w-full min-h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${Aboutimg})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-full h-full flex justify-center items-center p-4">
        <div className="bg-[rgba(0,0,0,0.8)] text-white p-8 rounded-lg max-w-2xl md:max-w-4xl text-center">
          <h1 className=" text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Us</h1>
          <p className="mb-4 text-lg ">
            At <strong>Tech Start</strong>, we are passionate about technology
            and driven by innovation. Founded with a vision to make cutting-edge
            technology accessible to everyone, we specialize in offering a wide
            range of tech products — from the latest smartphones and laptops to
            essential accessories and smart home devices.
          </p>
          <p className="mb-3 text-lg">
            Our commitment goes beyond just selling gadgets. We aim to provide a
            seamless shopping experience backed by reliable support, fast
            delivery, and quality assurance. Whether you're a tech enthusiast, a
            professional, or a casual user, Tech Start is your one-stop
            destination for all things tech.
          </p>

          <h2 className=" font-semibold mt-6 md:mt-8 mb-3 md:mb-4 text-3xl md:text-4xl ">Why Choose Us?</h2>

          <h4 className="text-xl font-semibold mt-6">Top-Quality Products</h4>
          <p className="mb-4">
            We only source products from trusted manufacturers and leading
            brands to ensure quality, durability, and performance.
          </p>

          <h4 className="text-xl font-semibold mt-6">Affordable Prices</h4>
          <p className="mb-4">
            Enjoy competitive pricing and regular discounts, so you never have
            to overpay for the tech you love.
          </p>

          <h4 className="text-xl font-semibold mt-6">Expert Guidance</h4>
          <p className="mb-4">
            Not sure what to buy? Our knowledgeable support team is always ready
            to help you choose the right product for your needs.
          </p>

          <h4 className="text-xl font-semibold mt-6">Fast & Secure Delivery</h4>
          <p className="mb-4">
            Get your orders delivered quickly and safely, right to your
            doorstep.
          </p>

          <h4 className="text-xl font-semibold mt-6">
            Customer-Centric Approach
          </h4>
          <p>
            Your satisfaction is our priority. We offer easy returns, responsive
            support, and a smooth shopping experience from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
