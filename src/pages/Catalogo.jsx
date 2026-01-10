import React from "react";
import Card from "../components/Card";

function Catalogo() {
  return (
    <main>
      <section className="bg-zinc-800 grid grid-cols-6 w-full h-dvh justify-center">
        <Card imgUrl="https://i.pinimg.com/1200x/34/e8/60/34e860a7739fb5753373332b32e305b4.jpg" />
        <Card imgUrl="https://i.pinimg.com/1200x/c8/92/54/c892548a494411f9244e4b23e7077621.jpg" />
        <Card imgUrl="https://i.pinimg.com/736x/aa/4d/c3/aa4dc3b5798be190da994f3c56b5edb0.jpg" />
        <Card imgUrl="https://i.pinimg.com/736x/27/eb/93/27eb931942f848521ea1f67c8d1dd7cf.jpg" />
      </section>
    </main>
  );
}

export default Catalogo;
