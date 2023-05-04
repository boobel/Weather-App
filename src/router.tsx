import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Weather } from "./pages/weather";
import GlobalStyle from "./globalStyles";
import { SearchProvider } from "./context/LocationContext";
import { Settings } from "./pages/settings";

const Router: React.FC = () => {
  return (
    <SearchProvider>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </HashRouter>
    </SearchProvider>
  );
};

export { Router };
