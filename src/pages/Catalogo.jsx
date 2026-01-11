import React from "react";
import Card from "../components/Card";
import { useMovie } from "../hooks/useTankStack";
import { useState } from "react";
import { useParams } from "react-router";

function Catalogo() {
  const [newpage, setNewPage] = useState(1);
  const { title } = useParams();
  const { catalogo } = useMovie(title, newpage);
  function nextPage() {
    setNewPage((prev) => prev + 1);
  }

  console.log(catalogo.data);

  if (catalogo.isLoading) {
    return <div>Cargando</div>;
  }
  return (
    <main className="min-h-dvh">
      {/* <header>Hola</header> */}
      <section className="bg-zinc-800 grid grid-cols-2 w-full h-full justify-center gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6">
        {catalogo.data.results?.map((item) => {
          return (
            <Card
              key={item.id}
              imgUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              textTitle={item.title}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Catalogo;
