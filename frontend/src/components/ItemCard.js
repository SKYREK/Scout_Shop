import React from "react";

const ItemCard = ({ image, name, price }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white">
      <img
        className="w-full hover:opacity-75"
        src="https://images.unsplash.com/photo-1629117083886-509c79515b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">lkhjgkkhg</div>
        <p className="text-gray-700 text-base">55522525</p>
      </div>

      <div className="border-b-2 py-3" />
      <div className="flex justify-between px-6 py-4">
        <button className="text-sm text-blue-400 cursor-pointer hover:text-primary">
          View more
        </button>
        <button className="bg-primary hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
