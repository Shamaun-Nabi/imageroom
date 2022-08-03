import React from "react";
import ImageCard from "../Components/ImageCard";
import SearchField from "../Components/SearchField";
import useImage from "../Hooks/useImage";
// import {Images} from "../Hooks/useImage";

export default function Home() {

  const [imageGallery] = useImage();
  return (
    <>
      <div className="mainArea bg-hero-pattern bg-cover  bg-center bg-blend-darken backdrop-brightness-50 bg-no-repeat  w-full h-52 place-content-center grid">
        <SearchField />
      </div>
      <div className="py-4">
        <h3 className="text-2xl font-bold text-center">Explore All Images</h3>
      </div>
      <div className="p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 place-content-center  ">
          {imageGallery.map((oneCard, index) => (
            <ImageCard key={index} rcvImage={oneCard} />
          ))}
        </div>
      </div>
    </>
  );
}
