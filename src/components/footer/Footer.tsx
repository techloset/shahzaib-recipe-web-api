import React from "react";
import Icone from "../../assets/vectors/Icon.svg";
import youtube from "../../assets/vectors/Youtube.svg";
import twitter from "../../assets/vectors/Twitter.svg";
import browser from "../../assets/vectors/Browser.svg";
import pinterest from "../../assets/vectors/Pinterest.svg";

const Footer: React.FC = () => {
  return (
    <section className="py-12 bg-yellow-300 text-gray-900 mt-12 h-[273px]">
      <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
        <div className="flex lg:flex my-auto justify-center  lg:text-left">
          <p className="">
            <img src={Icone} className="mt-2" alt="coffee Icon" />
          </p>
          <h1 className="my-1 sm:block hidden ps-3 text-3xl font-medium leading-tight title-font mt-4">
            Delícias à Mesa
          </h1>
        </div>
        <div className="flex flex-col md:flex-col my-auto items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
          <p className=" sm:py-2 font-medium text-xl h-[31] w-[181]">
            Redes Socials:
          </p>
          <div className="w-[200px] h-[44px] gap-[8px] flex">
            <div className="bg-[#ffe9a1] h-[44px] w-[44px] rounded-[7px] flex justify-center items-center">
              <img src={youtube} alt="youtube" className="h-[32px] w-[32px]" />
            </div>
            <div className="bg-[#ffe9a1] h-[44px] w-[44px] rounded-[7px] flex justify-center items-center">
              <img src={twitter} alt="twitter" className="h-[32px] w-[32px]" />
            </div>
            <div className="bg-[#ffe9a1] h-[44px] w-[44px] rounded-[7px] flex justify-center items-center">
              <img src={browser} alt="browser" className="h-[32px] w-[32px]" />
            </div>
            <div className="bg-[#ffe9a1] h-[44px] w-[44px] rounded-[7px] flex justify-center items-center">
              <img
                src={pinterest}
                alt="pinterest"
                className="h-[32px] w-[32px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
