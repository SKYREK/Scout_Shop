import React from 'react'

function AdminCard() {
  return (
    <div className=" flex justify-center mt-4">
      <div className="card card-side bg-base-100 shadow-xl w-[50%] max-w-[50%] max-h-64">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1573146500785-c84e60e35184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCard
