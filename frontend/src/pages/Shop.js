import React from 'react'
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import ProductCard from '../components/Product/ProductCard';

const Shop = () => {
    const names = [
    "Humaira Sims",
    "Santiago Solis",
    "Dawid Floyd",
    "Mateo Barlow",
    "Samia Navarro",
    "Kaden Fields",
    "Genevieve Watkins",
    "Mariah Hickman",
    "Rocco Richardson",
    "Harris Glenn"
];
  return (
      <Layout>
        <div className="flex md:flex-row items-center my-5">
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10 mx-2">
        <div className="w-[15%] lg:w-[20%] hidden md:inline-flex h-full">
          <Sidebar />
        </div>
        <div className="w-full md:w-[85%] lg:w-[80%] h-full items-center lg:justify-around flex flex-wrap lg:flex-row flex-col gap-4">
                {names.map((item) => <ProductCard product={item} />)}

          {/* <Pagination itemsPerPage={itemsPerPage} /> */}
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>

    </Layout>
  )
}

export default Shop;