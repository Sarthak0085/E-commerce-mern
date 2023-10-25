import React from "react";
import Category from "./Category/Category";
import Color from "./Color/Color";
import Brand from "./Brand/Brand";
import Price from "./Price/Price";


const Sidebar = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Color />
      <Brand />
      <Price />
    </div>
  );
};

export default Sidebar;