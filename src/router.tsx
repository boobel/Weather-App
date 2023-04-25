import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Weather } from "./pages/weather";
import GlobalStyle from "./globalStyles";
import { SearchProvider } from "./context/LocationContext";

const Router: React.FC = () => {
  return (
    <SearchProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
};

export { Router };
