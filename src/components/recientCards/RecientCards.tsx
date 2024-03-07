import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipieCardProps } from "../../types/types";

const RecientCard: React.FC<RecipieCardProps> = ({
  image,
  titile,
  instriuctions,
  recpieId,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipes/${recpieId}`);
  };
  return (
    <>
      <div className="lg:h-[322px] shadow my-3 bg-white-300 lg:max-w-[1187px] border-2 rounded-xl lg:flex justify-center  md:mx-auto  ">
        <div
          className=" lg:h-auto  sm:w-full md:w-[full] md:h-[250px] sm:h-[370px]  lg:w-[403px] h-[322px] bg-cover flex-none bg-center rounded-t lg:rounded-l"
          style={{ backgroundImage: `url(${image})` }}
          title="image"
        ></div>
        <div className="lg:px-6 sm:w-full   bg-gray-100 rounded lg:py-4 flex flex-col leading-normal">
          <h4
            className="text-gray-900 font-bold text-xl pt-10 text-start"
            style={{ margin: "10px" }}
          >
            {titile}
          </h4>
          <p
            className="text-gray-700  text-base text-start"
            style={{ margin: "10px" }}
          >
            {" "}
            {instriuctions} ....
          </p>

          <button
            className="md:mt-3  mb-4 bg-yellow-300 px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300 ms-0 max-w-[150px]"
            onClick={handleClick}
            style={{ margin: "10px" }}
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default RecientCard;
