import React from "react";
import Search from "./Search";
import Links from "./Links";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 flex flex-wrap border-b border-gray-500 dark:text-gray-50">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="w-32 flex items-center justify-between text-2xl">
            Google 
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="w-24 flex  bg-gray-800 text-gray-200 rounded-md dark:bg-gray-200 dark:text-gray-800"
        >
          {darkTheme ? (
            <p className="flex p-2 items-center">
              Light <MdOutlineLightMode className="ml-6" />
            </p>
          ) : (
            <p className="flex p-2 items-center">
              Dark <MdDarkMode className="ml-6"/>
            </p>
          )}
        </button>
      </div>
      <Search/>
      
    </div>
  );
};

export default Navbar;
