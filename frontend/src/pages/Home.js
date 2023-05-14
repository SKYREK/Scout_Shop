import React from "react";
import Navbar from "../components/Navbar";
import CategoriesDropdown from "../components/CategoriesDropdown";
import SortbyDropdown from "../components/SortbyDropdown";
import Searchbar from "../components/Searchbar";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="h-full flex-col justify-between">
   
      <div className="mx-auto py-10 max-w-7xl ">

      <div className=" flex flex-raw">
          <CategoriesDropdown />
          <SortbyDropdown />
          <Searchbar />
        </div>

        <div className="grid gap-y-4 grid-cols-3 gap-x-3">

          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    
    </div>
  );
}

export default Home;
