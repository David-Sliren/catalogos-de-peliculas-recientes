import "@fontsource-variable/inter";
import "@fontsource/bebas-neue";
import "@fontsource-variable/montserrat";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:title" element={<Catalogo />} />
      </Routes>
    </>
  );
}

export default App;
