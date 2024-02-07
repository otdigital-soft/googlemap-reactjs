import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Fragment>
    <BrowserRouter>
      <HelmetProvider>
        <Routing />
      </HelmetProvider>
    </BrowserRouter>
  </React.Fragment>
);
