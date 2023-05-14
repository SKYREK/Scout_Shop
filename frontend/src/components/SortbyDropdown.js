import React from 'react'

function SortbyDropdown() {
  return (
    <div className="">
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Sort by
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </div>
  )
}

export default SortbyDropdown
