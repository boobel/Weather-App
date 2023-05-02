import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Weather } from "./pages/weather";
import GlobalStyle from "./globalStyles";
import { SearchProvider } from "./context/LocationContext";
import { Settings } from "./pages/settings";

const Router: React.FC = () => {
  return (
    <SearchProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
};

export { Router };
