import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Weather } from "./pages/weather";
import GlobalStyle from "./globalStyles";

const Router: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
