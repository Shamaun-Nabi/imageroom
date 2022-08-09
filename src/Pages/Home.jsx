import React, { useEffect, useState } from "react";
import ImageCard from "../Components/ImageCard";
// import ImageCard from "../Components/ImageCard";
import SearchField from "../Components/SearchField";
// import useImage from "../Hooks/useImage";
// import {Images} from "../Hooks/useImage";

export default function Home() {
  const [allImages, setAllImages] = useState([]);
  const [OneImages, setOneImages] = useState([]);
  const myAPI = process.env.REACT_APP_IMAGE_ROOM_API;
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${myAPI}&q=man&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => setAllImages(data.hits));
  }, []);

  const OnImage = (imageId) => {
    if (imageId) {
      fetch(
        `https://pixabay.com/api/?key=${myAPI}&q=man&image_type=photo&pretty=true&id=${imageId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setOneImages(data?.hits);
        });
    }
  };
  const searchImage = (event) => {
    event.preventDefault();
    let queryText = event.target.query.value;
    console.log(queryText);
    if (queryText) {
      fetch(
        `https://pixabay.com/api/?key=${myAPI}&q=${queryText}&image_type=photo&pretty=true`
      )
        .then((res) => res.json())
        .then((data) => setAllImages(data?.hits));
    }
  };

  return (
    <>
      <div className="mainArea bg-hero-pattern bg-cover  bg-center bg-blend-darken backdrop-brightness-50 bg-no-repeat  w-full h-52 place-content-center grid">
        <SearchField searchImage={searchImage} />
      </div>
      <div className="py-4">
        <h3 className="text-2xl font-bold text-center">Explore All Images</h3>
      </div>
      <div className="p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 place-content-center  ">
          {allImages.map((oneCard, index) => (
            <ImageCard
              key={index}
              rcvImage={oneCard}
              getImage={OnImage}
              oneimage={OneImages}
            />
          ))}
        </div>
      </div>
    </>
  );
}
