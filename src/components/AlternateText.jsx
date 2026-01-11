import React from "react";

function AlternateText({ clasesP, clasesH1, clasesH2, textH1, textH2 }) {
  return (
    <section
      className={`${clasesP} relative  col-span-full w-fit h-fit  md:col-span-8 md:-translate-x-6 lg:translate-0`}
    >
      <h1 className={`${clasesH1} text-white text-4xl text-shadow-lg`}>
        {textH1}
      </h1>
      <h2
        className={`${clasesH2} text-white mt-5 -tracking-tight  text-shadow-md `}
      >
        {textH2}
      </h2>
    </section>
  );
}

export default AlternateText;
