import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./components/contexts";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render( 
  <BrowserRouter>
  <StoreProvider>
    <App />
  </StoreProvider>
  </BrowserRouter> 
);
