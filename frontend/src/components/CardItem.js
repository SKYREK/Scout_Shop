import { useState } from "react";

const CartItemCard = ({ product }) => {
//   const [quantity, setQuantity] = useState(product.quantity);

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex p-4 m-4">
      <div className="w-1/3 flex-shrink-0">
        <img src="https://images.unsplash.com/photo-1573146500785-c84e60e35184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80s" alt="jhjh" className=" w-40 h-40" />
      </div>
      <div className="w-2/3 pl-4">
        <h2 className="text-lg font-medium mb-2">khgk</h2>
        <p className="text-gray-600 text-sm mb-2">fffff</p>
        <div className="flex items-center mb-4">
          <p className="text-gray-700 font-medium mr-4">22222</p>
          <div className="flex border rounded-full overflow-hidden">
            <button
              className="py-1 px-2 bg-primary text-white hover:bg-purple-600 transition-colors duration-300"
              // onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="py-1 px-4 border-l border-r">
              656565
            </span>
            <button
              className="py-1 px-2 bg-primary text-white hover:bg-purple-600 transition-colors duration-300"
              // onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
        
        <button className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm3.293 12.707a1 1 0 11-1.414 1.414L10 11.414l-2.879 2.879a1 1 0 01-1.414-1.414L8.586 10l-2.879-2.879a1 1 0 011.414-1.414L10 8.586l2.879-2.879a1 1 0 111.414 1.414L11.414 10l2.879 2.879z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>      
    </div>
  );
};

export default CartItemCard;
