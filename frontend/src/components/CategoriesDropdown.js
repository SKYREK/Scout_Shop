import React from "react";

function CategoriesDropdown() {
  return (
    <div className="">
      <select className="select select-primary w-full max-w-xs">
        <option disabled selected>
          Pick your Categories
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </div>
  );
}

export default CategoriesDropdown;
