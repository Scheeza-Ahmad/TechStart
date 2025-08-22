import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  return (
    <>
      <div className="mb-4">
        <button
          onClick={() => navigate("/")}
          className="flex border items-center gap-2 px-4 py-2 rounded-lg bg-[#1f2d3d] text-white hover:bg-gray-700 transition duration-300 shadow-md"
        >
          ← Back to Home
        </button>
      </div>

      <div className="w-full min-h-screen bg-gray-100 p-6 text-black">
        <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

        {cartItems.length > 0 ? (
          <>
            <div className="grid gap-4 mb-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded bg-white shadow flex items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-lg">Price: {item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Checkout Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => {
                  alert(
                    `✅ Your total bill is: $${total}\n\n🎉 Thanks for shopping with us!`
                  );
                  clearCart();
                  navigate("/");
                }}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                💳 Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </>
  );
};

export default Cart;
