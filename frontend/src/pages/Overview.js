import React from "react";

function Overview() {
  return (
    <div className=" flex justify-center mt-4">
      <div className="card card-side bg-base-100 shadow-xl w-[50%] max-w-[50%] max-h-64">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1573146500785-c84e60e35184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Movie"
            className="p-4 py-4 max-w-[75%] max-h-96"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Knotting rope cotton</h2>
          <p className=" font-bold">500 LKR</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Overview;
