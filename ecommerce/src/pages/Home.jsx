import React, { useState } from "react";
import SliderComps from "../home/SliderComps";
import Sorting from "../home/Sorting";
import Category from "../home/Category";
import Product from "../home/Product";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComps />
      <Sorting setSort={setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Product category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
