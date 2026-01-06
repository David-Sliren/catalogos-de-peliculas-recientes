import React from "react";

function ShadowGradient({ clases = "" }) {
  return (
    <div
      className={`${clases} absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/20 to-black  md:to-100% -z-1`}
    ></div>
  );
}

export default ShadowGradient;
