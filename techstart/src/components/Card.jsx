import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

import Cart from "./Cart";
const Card = (props) => {
  const { addToCart } = useCart();

  const navigate = useNavigate();
  const handleAddToCart = () => {
    addToCart({
      title: props.title,
      price: props.price,
      image: props.image,
    });
    navigate("/Cart");
  };
  return (
    <div className="flex flex-col justify-between items-center rounded-xl border transition bounce-hover w-64 h-80 bg-white text-black p-4">
      <div className="flex justify-center items-center h-40">
        <img
          src={props.image}
          className="max-h-full object-contain"
          alt={props.title}
        />
      </div>

      <div>
        <h1 className="text-lg font-semibold text-center">{props.title}</h1>
      </div>

      <div>
        <h1 className="font-medium">${props.price}</h1>
      </div>
      <div>
        <button
          className="bg-[#131e2b] text-white p-2 rounded-xl hover:bg-[#555e69] transition"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
