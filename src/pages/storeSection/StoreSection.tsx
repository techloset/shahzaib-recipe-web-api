import React from "react";
import RecientCard from "../../components/recientCards/RecientCards";
import useStore from "../../hooks/useStore";

const Store: React.FC = () => {
  const { sliceInstructions, mealArray, searchResults, windowWidth } =
    useStore();
  return (
    <div
      className="container mx-auto flex flex-col text-center justify-center px-3"
      style={{ maxWidth: windowWidth < 768 ? "380px" : "100%" }}
    >
      <h1 className="col-span-12 text-2xl my-10 font-bold">
        {searchResults.length > 0
          ? "Search Results"
          : "Receitas mais procuradas"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 sm:mx-5 md:rounded-none lg:rounded-3xl">
        {searchResults.length > 0
          ? searchResults.map((item) => (
              <RecientCard
                key={item.idMeal}
                image={item.strMealThumb}
                titile={item.strMeal}
                instriuctions={sliceInstructions(item.strInstructions)}
                recpieId={item.idMeal}
              />
            ))
          : mealArray.map((item) => (
              <RecientCard
                key={item.idMeal}
                image={item.strMealThumb}
                titile={item.strMeal}
                instriuctions={sliceInstructions(item.strInstructions)}
                recpieId={item.idMeal}
              />
            ))}
      </div>
    </div>
  );
};

export default Store;
