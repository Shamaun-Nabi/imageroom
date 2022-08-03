import React, { useEffect } from "react";
import { useState } from "react";
import { BsZoomIn } from "react-icons/bs";
import useImage from "../Hooks/useImage";

export default function ImageCard(rcvImage) {
  const [loading, setLoading] = useState(false);
//   const [getImage]= useImage();
//   console.log(getImage())

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="flex justify-center md:justify-end md:flex-none">
          <div className="card w-[360px] mt-2 image-full  place-content-center">
            <figure>
              <img
                src={rcvImage?.rcvImage?.webformatURL}
                alt="Shoes"
                className="z-0"
              />
            </figure>
            <div className="card-body relative">
              <div className="card-actions  justify-end  absolute bottom-0 right-0 p-2">
                <label
                  className="btn btn-primary modal-button text-white shadow-lg"
                  htmlFor="my-modal-4"
                >
                  <BsZoomIn  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      {loading ? (
        "Loading"
      ) : (
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative max-w-4xl" htmlFor="">
            <img
              src={rcvImage?.rcvImage?.webformatURL}
              alt=""
              className="w-full"
            />
          </label>
        </label>
      )}
    </>
  );
}
