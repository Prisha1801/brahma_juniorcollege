import React from "react";

const images = [
  "/banners/b1.jpg",
];

function Banner() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={images[0]}
        alt="Banner"
        className="w-full"
      />
    </div>
  );
}

export default Banner;