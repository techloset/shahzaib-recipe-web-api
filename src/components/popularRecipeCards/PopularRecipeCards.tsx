import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipieCardProps } from "../../types/types";

const PopularRecipeCards: React.FC<RecipieCardProps> = ({
  instriuctions,
  titile,
  image,
  recpieId,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipes/${recpieId}`);
  };
  return (
    <div className=" rounded-lg shadow-md justify-center  flex flex-col bg-gray-100">
      <div className="border-none hover:scale-105 duration-300">
        <img
          src={image}
          className="w-[403px] h-[212px] object-cover  rounded-lg"
          alt="Card"
        />
      </div>
      <div className="flex flex-col justify-start mt-10 ">
        <h2 className="text-xl font-bold mb-2 flex justify-start ps-7 pt-6 font-inter">
          {titile}
        </h2>
        <p className="text-gray-600 text-start ps-7 font-inter">
          {instriuctions} ...
        </p>
        <button
          className="ms-7 mt-7 mb-4 bg-yellow-300 px-4 py-2 rounded-3xl  focus:outline-none focus:ring focus:border-yellow-300 w-[191px] font-inter"
          onClick={handleClick}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default PopularRecipeCards;
