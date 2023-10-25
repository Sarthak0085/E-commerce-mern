import React, { useState } from "react";
import NavTitle from "../NavTitle/NavTitle";

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const brands = [
    {
      _id: 9006,
      title: "Apple",
    },
    {
      _id: 9007,
      title: "Ultron",
    },
    {
      _id: 9008,
      title: "Unknown",
    },
    {
      _id: 9009,
      title: "Shoppers Home",
    },
    {
      _id: 9010,
      title: "Hoichoi",
    },
  ];

  return (
    <div>
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Brand" icons={true} />
      </div>
      {showBrands && (
        <div>
                  {brands?.map((item) => (
                      <div className="flex gap-2 my-4">
                        <input
                          type="radio"
                          value={item.title}
                          name="brand"
                          className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-5 hover:border-gray-400 duration-300" />
                      <label >{item.title}</label>
                     </div>
                  ))}
        </div>
      )}
    </div>
  );
};

export default Brand;
