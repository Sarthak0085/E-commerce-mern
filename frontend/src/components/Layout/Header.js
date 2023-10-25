import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Favorite from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";

// const Header = () => {
//   return (
//       <>
//           <nav className='bg-black text-white w-full h-20 flex items-center justify-between'>
//               <div>Hello</div>
//               <div>Search</div>
//               <div className='flex items-center justify-around gap-x-10'>
//                   <NavLink>About</NavLink>
//                   <NavLink>Contact</NavLink>
//                   <NavLink>Register</NavLink>
//                   <NavLink className="border border-solid border-white p-1 bg-gray-500 mr-5 rounded-md">Login</NavLink>
//                   <NavLink><Favorite/></NavLink>
//                   <NavLink className="mr-5 block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-200"><ShoppingCartIcon/><span className='absolute rounded-full bg-blue-700 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs text-center'>3</span></NavLink>
//               </div>
//           </nav>
//       </>
//   )
// }

const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog's", link: "/" },
    { name: "Register", link: "/register" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-box-shadow w-full static top-0 left-0">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] 
      text-gray-100"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 text-white cursor-pointer md:hidden"
        >
          <MenuIcon
            classNam
            name={open ? "close" : "menu"}
          ></MenuIcon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className="text-gray-100 hover:text-gray-300 hover:scale-105 duration-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <button
            className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
          >
            Login
          </button>
          <li className="md:ml-10 text-xl md:my-0 my-7">
            <NavLink className="text-white">
              <Favorite />
            </NavLink>
          </li>
          <li className="md:ml-4 text-xl md:my-0 my-7">
            <NavLink className="mr-5 block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-200">
              <ShoppingCartIcon />
              <span className="absolute rounded-full bg-blue-700 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs text-center">
                3
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

// export default Nav

export default Header;
