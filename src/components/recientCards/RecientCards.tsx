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
      <div className="lg:h-[322px] shadow my-3 bg-white-300 lg:max-w-[1187px] border-2 rounded-[33px] lg:flex justify-center  md:mx-auto  ">
        <div
          className=" lg:h-auto p-[48px] sm:w-full md:w-[full] md:h-[250px] sm:h-[370px]  lg:w-[403px] h-[322px] bg-cover flex-none bg-center rounded-tl-[33px] rounded-bl-[33px]"
          style={{ backgroundImage: `url(${image})` }}
          title="image"
        ></div>
        <div className="lg:px-6 sm:w-full  rounded-tr-[33px] rounded-br-[33px] bg-gray-100 lg:py-4 gap-[16px] flex flex-col leading-normal">
          <div className="text-gray-900 font-bold text-[40px] text-start font-inter">
            {titile}
          </div>
          <p className="lg:mb-6 text-gray-700  text-[20px] text-start font-inter">
            {" "}
            {instriuctions}....
          </p>

          <button
            className="bg-[#FFDB63] px-[33px] py-[9px] rounded-[32px] hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-200 w-[191px] gap-[10px] font-inter"
            onClick={handleClick}
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default RecientCard;
