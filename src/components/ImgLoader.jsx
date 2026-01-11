import { ImageOff } from "lucide-react";
import { LoaderPinwheel } from "lucide-react";
import React from "react";
import { useState } from "react";

function ImgLoader({ src, alt }) {
  const [status, setStatus] = useState("loading");

  return (
    <>
      {status === "loading" && (
        <span className="absolute inset-0 bg-zinc-800 flex m-auto">
          <LoaderPinwheel
            size={32}
            color="white"
            className="animate-spin m-auto"
          />
        </span>
      )}

      {status === "error" && (
        <span className="absolute inset-0 bg-zinc-800 flex m-auto">
          <ImageOff
            color="white"
            className="size-9 lg:size-12 animate-pulse m-auto"
          />
        </span>
      )}

      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-top transition-opacity transition-transform ease-in-out ${
          status === "loaded"
            ? "opacity-100 translate-x-0"
            : "opacity-0 tranlate-x-80"
        } `}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </>
  );
}

export default ImgLoader;
