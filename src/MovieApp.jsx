import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";

const queryclient = new QueryClient();
function MovieApp() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <QueryClientProvider client={queryclient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default MovieApp;
