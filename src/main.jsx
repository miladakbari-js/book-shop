import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout/Layout.jsx"
import "./styles/index.css";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Layout>
      <App />
    </Layout>
    </BrowserRouter>
  </StrictMode>
);
