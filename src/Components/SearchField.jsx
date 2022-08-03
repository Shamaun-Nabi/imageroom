import React from "react";

export default function SearchField() {
  return (
    <>
      <div>
        <form action="" className="flex gap-3">
          <input
            type="text"
            className="form-control block md:w-[600px] w-full px-3 py-1.5 text-base font-normal text-gray-700bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
            placeholder="Search Images"
          />

          <button
            type="submit"
            className="bg-slate-200 p-2 rounded-lg text-center font-bold text-slate-600 hover:bg-slate-700 transition delay-150 ease-in hover:text-white tracking-wider"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
