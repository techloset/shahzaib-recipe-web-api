import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-yellow-200 h-24 w-24"></div>
      </div>

      {/* <div className="loader-container">
        <div className="animate-spin h-32 w-32  bg-gradient-to-r from-indigo-900 via-yellow-500 to-yellow-50 rounded-full border-4"></div>
      </div> */}
    </div>
  );
}
