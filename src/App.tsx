import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Page } from "./components/Page";
import { LateralMenu, TOCLink, TOCTitle } from "./components/TOC";

import Home from "./pages/00_home";
import Requirements from "./pages/01_requirements";
import LocalDev from "./pages/02_localDev";
import RunMixed from "./pages/03_runMixed";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TOC />}>
            <Route index element={<Home />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/localDev" element={<LocalDev />} />
            <Route path="/runMixed" element={<RunMixed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function TOC() {
  return (
    <Page>
      <LateralMenu>
        <TOCTitle to="/">Introdução</TOCTitle>
        <TOCLink to="/requirements">requisitos</TOCLink>
        <TOCLink to="/localDev">Rodando no local</TOCLink>
        <TOCLink to="/runMixed">Rodando eDoc de forma mista</TOCLink>
      </LateralMenu>
    </Page>
  );
}

export default App;
