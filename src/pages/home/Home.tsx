import React from "react";
import heroimage from "../../assets/images/Hero-image.png";
import LargeCards from "../../components/recientCards/RecientCards";
import Cards from "../../components/popularRecipeCards/PopularRecipeCards";
import useHome from "../../hooks/useHome";
import Loader from "../../components/loader/Loader";

const Home: React.FC = () => {
  const { mealArray, windowWidth, sliceInstructions, isLargeScreen, loading } =
    useHome();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className="main relative bg-cover bg-center h-[362px]"
            style={{
              lineHeight: "48px",
              backgroundImage: `url(${heroimage})`,
            }}
          >
            <h2
              className="absolute inset-0 text-white flex items-center justify-center text-center text-yellow font-bold md:text-3xl  "
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              Get Inspired, Cook with passion and enjoy
              <br />
              unforgettable moments at the table
            </h2>
          </div>

          <div className="container mx-auto flex flex-col justify-center  py-16 text-center">
            <h1 className="col-span-12 text-2xl mb-14 font-bold">
              Popular Recipes
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 ">
              {mealArray.slice(10, 13).map((item) => (
                <Cards
                  key={item.idMeal}
                  image={item.strMealThumb}
                  titile={item.strMeal.slice(0, 20)}
                  instriuctions={item.strInstructions.slice(0, 80)}
                  recpieId={item.idMeal}
                />
              ))}
            </div>
          </div>
          <div
            className="container mx-auto flex flex-col text-center justify-center px-3 gap-1"
            style={{ maxWidth: windowWidth < 785 ? "380px" : "100%" }}
          >
            <h1 className="col-span-12 text-2xl font-bold pb-16">
              Recent Recipes
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 sm:mx-2 rounded-s-2xl">
              {mealArray.slice(5, 8).map((item) => (
                <LargeCards
                  key={item.idMeal}
                  recpieId={item.idMeal}
                  image={item.strMealThumb}
                  titile={
                    isLargeScreen ? item.strMeal.slice(0, 20) : item.strMeal
                  }
                  instriuctions={sliceInstructions(item.strInstructions)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
