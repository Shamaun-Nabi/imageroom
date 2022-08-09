import { BsZoomIn } from "react-icons/bs";

export default function ImageCard({ rcvImage, getImage,oneimage}) {
  return (
    <>
      <div className="flex justify-center md:justify-end md:flex-none">
        <div className="card w-[360px] mt-2 image-full  place-content-center">
          <figure>
            <img src={rcvImage?.webformatURL} alt="Shoes" className="z-0" />
          </figure>
          <div className="card-body relative">
            <div className="card-actions  justify-end  absolute bottom-0 right-0 p-2">
              <label
                className="btn btn-primary modal-button text-white shadow-lg"
                htmlFor="my-modal-4"
                onClick={() => getImage(rcvImage?.id)}
              >
                <BsZoomIn />
              </label>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative max-w-4xl" htmlFor="">
          <img src={oneimage[0]?.largeImageURL} alt="" className="w-full" />
        </label>
      </label>
    </>
  );
}
