import { CircleArrowRight } from "lucide-react";

function CardCatalogo({ text = "catalogo" }) {
  return (
    <article className="relative bg-[#ADD8E6] w-90 h-28 flex justify-center items-center rounded-2xl transition duration-500 overflow-hidden z-0 after:absolute after:-top-9 after:-right-9 after:bg-black after:size-20 after:rounded-full after:-z-1 group hover:after:scale-[10] after:transition-transform after:duration-500 cursor-pointer">
      <CircleArrowRight
        size={22}
        color="white"
        className="absolute top-2 right-2 z-2  group-hover:rotate-180 group-hover:translate-y-10 group-hover:-translate-x-12 transition duration-500"
      />
      <p className="text-4xl font-inter font-bold group-hover:text-white duration-500">
        {text}
      </p>
    </article>
  );
}

export default CardCatalogo;
