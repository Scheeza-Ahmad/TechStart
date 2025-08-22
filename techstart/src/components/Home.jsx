import React from "react";
import Back from "../assets/images/1.png";
import Card from "./Card";
import Macbook from "../assets/images/macbook.png";
import Keyboard from "../assets/images/keyboard.png";
import Moniter from "../assets/images/moniter.png";
import Mouse from "../assets/images/mouse.png";
import Laptop from "../assets/images/laptop.png";
import Tablet from "../assets/images/tablet.png";
import HeadPhones from "../assets/images/headphone.png";
import Speakers from "../assets/images/speaker.png";
import aux from "../assets/images/aox.png";
import PowerBank from "../assets/images/powerbank.png";
import Stand from "../assets/images/stand.png";
import Cooler from "../assets/images/cooler.png";

const Home = () => {
  return (
    <>
      <div className="text-white pb-4 bg-[#1f2d3d]">
        <marquee>
          ⚡ TechStart: Bringing You the Best in Innovation — From Powerful PCs
          to Cutting-Edge Gadgets, All in One Place! 🖥️📱🎧
        </marquee>
      </div>
      <div
        className="w-full h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Back})` }}
      >
        <div className="absolute inset-0  flex items-baseline-last justify-center">
          <h1 className="text-[#1f2d3d] text-4xl font-bold">
            Welcome to TechStart
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center text-white m-8">
        <h1 className="font-bold text-4xl underline text-center">Shop our best Product</h1>
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap m-4">
        <Card image={Macbook} title="Macbook Air" price={200} />
        <Card image={Tablet} title="Tablet" price={20} />
        <Card image={Mouse} title="Mouse" price={2} />
        <Card image={Keyboard} title="Keyboard" price={50} />
        <Card image={Speakers} title="Speaker" price={150} />
        <Card image={Moniter} title="Moniter" price={100} />
        <Card image={Laptop} title="Laptop" price={190} />
        <Card image={aux} title="Aux" price={70} />
        <Card image={HeadPhones} title="HeadPhones" price={100} />
        <Card image={PowerBank} title="PowerBank" price={67} />
        <Card image={Stand} title="Stand" price={24} />
        <Card image={Cooler} title="Laptop Cooler Pad" price={27} />

      </div>
    </>
  );
};

export default Home;
