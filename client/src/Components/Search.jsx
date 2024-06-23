import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <>
      <div className="w-screen min-h-[100px] flex justify-center items-center">
        <div className="flex justify-center items-center h-full ">
          <div className="h-ful border border-black">
            <SearchIcon />
          </div>
          <input
            type="text"
            className=" p-2 outline-none px-4 text-xl bg-gray-200"
            placeholder="Search Itmes"
          />
        </div>
      </div>
    </>
  );
}
