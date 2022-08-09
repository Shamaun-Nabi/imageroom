// import { useEffect, useState } from "react";

// export default function useImage(imageId) {
//   const [imageGallery, setimageGallery] = useState([]);
//   const searchImage = (queryText) => {
//     console.log(queryText);
//   };
//   useEffect(() => {
//     fetch(
//       `https://pixabay.com/api/?key=29031262-a447cf73bce3b451272d25245&q=man&image_type=photo&pretty=true&id=${""}`
//     )
//       .then((result) => result.json())
//       .then((data) => setimageGallery(data.hits));
//   }, []);
//   // console.log("hello", imageGallery);

//   return [imageGallery, searchImage];
// }
