import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/web-portfolio/" element={<Home />} />
          <Route path="/web-portfolio/skills" element={<Skills />} />
          <Route path="/web-portfolio/contact" element={<Contact />} />
          <Route path="/web-portfolio/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
