import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

//importação da API
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 30 } },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <MainRoutes />
      </StrictMode>
    </QueryClientProvider>
  </BrowserRouter>
);
