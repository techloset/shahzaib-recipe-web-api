import React from "react";
import Cards from "../../components/popularRecipeCards/PopularRecipeCards";
import search from "../../assets/vectors/Icon (1).svg";
import useRecipes from "../../hooks/useRecipes";

const Recipes: React.FC = () => {
  const { searchResults, handleSearch } = useRecipes();
  return (
    <div className="container mx-auto flex flex-col justify-center  py-16 text-center px-8">
      <div className="grid grid-cols-1">
        <h1 className="text-center ps-0 text-2xl mt-10 mb-8 font-bold h-[47] w-[194] ">
          Search Recipes
        </h1>
        <div className="items-center mx-auto bg-[#F5F2F2] rounded-full justify-center flex lg:w-[768px] sm:w-[334px] h-[54px]">
          <img src={search} className="mx-4" alt="search" />
          <input
            className="bg-transparent w-full  focus:outline-none"
            type="text"
            placeholder="Search Recipe"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <h1 className=" text-left justify-start ps-0 text-2xl mt-[180px] mb-8 font-bold font-inter text-[38px]">
        Search Results
      </h1>

      <div className="grid grid-cols-1 text-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.length > 0 ? (
          searchResults.map((item) => (
            <Cards
              key={item.idMeal}
              image={item.strMealThumb}
              titile={item.strMeal.slice(0, 25)}
              instriuctions={item.strInstructions.slice(0, 100)}
              recpieId={item.idMeal}
            />
          ))
        ) : (
          <div className="text-xl">No Item Found</div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
