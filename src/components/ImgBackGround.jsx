import React from "react";

function ImgBackGround({ image, moveImg }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-1">
      <img
        src={image}
        alt="Imagen de los vengadores"
        className={`${moveImg} w-full h-full object-cover md:object-top`}
      />
    </div>
  );
}

export default ImgBackGround;
