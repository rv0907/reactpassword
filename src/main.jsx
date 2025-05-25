import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      name={{
        n1: "rv",
        n2: "pk",
        n3: "rk",
      }}
    ></App>
  </StrictMode>
);
