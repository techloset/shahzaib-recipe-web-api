import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../../redux/slices/searchRecipeSlice";
import { AppDispatch } from "../../redux/store";
import icone from "../../assets/vectors/Icon.svg";
import toggler from "../../assets/vectors/Vector.svg";
import search from "../../assets/vectors/Icon (1).svg";

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [sideNav, setSideNav] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSearch = (searchQuery: string) => {
    navigate("/recipes");
    dispatch(searchRecipes(searchQuery));
  };

  return (
    <div className="max-w-[1286px] lg:mx-auto flex justify-between items-center p-4">
      <div className="flex items-center justify-start px-[77px]">
        <div className="cursor-pointer ">
          <img src={icone} alt="icone" />
        </div>
        <h1 className="hidden sm:block sm:text-xl px-2 ">Delícias à Mesa</h1>
      </div>

      <div className="hidden sm:flex items-center px-2 Hug-[406px] sm:w-[400px] lg:w-[500px] md:w-[170px] justify-center">
        <ul className="flex items-center justify-center">
          <li className="lg:w-[110px] h-[31px] sm:w-[60px] font-bold  ">
            Home
          </li>
          <li className="lg:w-[111px] h-[31px] sm:w-[60px]  font-bold">
            Receitas
          </li>
          <li className="lg:w-[110px] h-[31px] sm:w-[60px] font-bold ">
            Sobrenós
          </li>
        </ul>
      </div>

      <div className="hidden sm:flex items-center bg-gray-300 rounded-full ]">
        <img src={search} className="ms-2 w-4" alt="search" />
        <input
          className="bg-transparent p-1 w-full focus:outline-none"
          type="text"
          placeholder="Search Recipes"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="lg:hidden md:hidden ml-2 transition-transform transform duration-600">
        {sideNav ? (
          <img
            src={toggler}
            onClick={() => {
              setSideNav(!sideNav);
            }}
            className={`transition-transform transform-3 duration-3000 w-7 ${
              sideNav ? "translate-x-0" : "translate-x-full"
            }`}
            alt="toggler"
          />
        ) : (
          <img className="w-[32px] h-[27px]" src={toggler} alt="toggle" />
        )}
      </div>

      {sideNav && (
        <div
          className={`fixed top-0 right-0 w-[300px] h-screen bg-white z-10 transform transition-transform duration-500 ${
            sideNav ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
