import React from "react";

import Presentation from "../components/sections/Presentation";
import Information from "../components/sections/Information";
import Catalogo from "../components/sections/Catalogo";

function Home() {
  return (
    <main>
      <Presentation />
      <Information />
      <Catalogo />
    </main>
  );
}

export default Home;
