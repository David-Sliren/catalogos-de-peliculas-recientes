import React from "react";

function Card({ imgUrl, imgAlt, textTitle = "movie the lay" }) {
  return (
    <article className="bg-blue-400 flex flex-col items-center w-52 h-80 pb-2 rounded-2xl overflow-hidden">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="w-full h-4/5 shrink object-cover object-center"
      />
      <p
        className={`${
          textTitle.length > 25 ? "text-start" : "text-center"
        } h-1/5 shrink-0 text-lg w-full px-2 font-inter text-white font-bold`}
      >
        {textTitle}
      </p>
    </article>
  );
}

export default Card;
