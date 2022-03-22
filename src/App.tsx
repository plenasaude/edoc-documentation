import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Page } from "./components/Page";
import { LateralMenu, TOCLink, TOCTitle } from "./components/TOC";

import Home from "./pages/Introduction";
import Basics from "./pages/Introduction/Basics";
import Requirements from "./pages/Introduction/Requirements";

import Appendix from "./pages/Appendix";
import Tools from "./pages/Appendix/tools";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TOC />}>
            <Route index element={<Home />} />
            <Route path="basics" element={<Basics />} />
            <Route path="requirements" element={<Requirements />} />
          </Route>

          <Route path="/appendix" element={<TOC />}>
            <Route index element={<Appendix />} />
            <Route path="tools" element={<Tools />} />
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
        <TOCLink to="/requirements">Requisitos</TOCLink>
        <TOCLink to="/localDev">Rodando no local</TOCLink>
        <TOCLink to="/runMixed">Rodando eDoc de forma mista</TOCLink>

        <TOCTitle to="/appendix">Apêndices</TOCTitle>
        <TOCLink to="/appendix/tools">Ferramentas</TOCLink>
      </LateralMenu>
    </Page>
  );
}

export default App;
