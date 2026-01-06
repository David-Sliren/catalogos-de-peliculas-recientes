import React from "react";

function AlternateText({ clasesP, clasesH1, clasesH2 }) {
  return (
    <section
      className={`${clasesP} relative  col-span-full w-fit h-fit  md:col-span-8 md:-translate-x-6 lg:translate-0`}
    >
      <h1 className={`${clasesH1} text-white text-4xl text-shadow-lg`}>
        CONTENIDO DE CALIDAD
      </h1>
      <h2
        className={`${clasesH2} text-white mt-5 -tracking-tight  text-shadow-md md:w-115 lg:w-140 xl:w-166 2xl:w-210`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        ex ullam iste animi facilis sit minus temporibus repellat, cum nobis
        veniam! Esse labore, provident rerum quisquam quo nulla possimus ipsum?
      </h2>
    </section>
  );
}

export default AlternateText;
