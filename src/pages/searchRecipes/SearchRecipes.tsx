import { Recipe } from "../../types/types";
import useSearchRecipes from "../../hooks/useSearchRecipes";

const SearchRecipes = () => {
  const { listStyle, recipieData } = useSearchRecipes();
  return (
    <div>
      <div
        className="main relative bg-cover bg-center h-[362px] w-full bg-no-repeat"
        style={{
          lineHeight: "48px",
          backgroundImage: `url(${recipieData?.strMealThumb})`,
          filter: "grayscale(50%)",
        }}
      >
        <h4
          className="absolute text-white inset-0 flex items-center justify-center text-center text-yellow font-bold md:text-3xl line-height-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          {recipieData?.strMeal}
        </h4>
      </div>

      <div className="container mx-auto mt-8 ps-10">
        <div key={recipieData?.idMeal}>
          <div className="ingredients">
            <p className="flex flex-start text-2xl pb-2 font-medium">
              Ingredients
            </p>
            <ul className="my-5">
              <ul style={listStyle}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = recipieData?.[
                    `strIngredient${index}` as keyof Recipe
                  ] as string;
                  if (ingredient) {
                    return (
                      <div key={index} className="py-1">
                        <li className="ms-10"> {ingredient}</li>
                      </div>
                    );
                  }
                  return null;
                })}
              </ul>
            </ul>
          </div>
          <div className="procedure pb-8 mt-7">
            <h3 className="flex flex-start pb-2 text-2xl font-medium">
              Informações Adicionais
            </h3>
            <p className="py-1 ms-4">{recipieData?.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRecipes;
