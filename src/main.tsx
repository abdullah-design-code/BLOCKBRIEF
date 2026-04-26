import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import Root from "./Root";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Root />
  </HelmetProvider>
);
