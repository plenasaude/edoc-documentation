import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Page } from "./components/Page";
import { LateralMenu, TOCLink, TOCTitle } from "./components/TOC";

import Home from "./pages/Introduction";
import Product from "./pages/Introduction/Product";
import MainTechnologies from "./pages/Introduction/MainTechnologies";
import Cloud from "./pages/Introduction/Cloud";

import Appendix from "./pages/Appendix";
import Tools from "./pages/Appendix/tools";
import Tests from "./pages/Appendix/Tests";

import GettingStarted from "./pages/GettingStarted";
import Requirements from "./pages/GettingStarted/Requirements";
import EnvironmentVariables from "./pages/GettingStarted/EnvironmentVariables";
import RunningLocally from "./pages/GettingStarted/RunningLocally";
import RunningMixed from "./pages/GettingStarted/RunningMixed";
import Deploy from "./pages/GettingStarted/Deploy";
import ProjectsDependencies from "./pages/GettingStarted/ProjectsDependencies";

import Projects from "./pages/Projects";
import API from "./pages/Projects/API";

import Architecture from "./pages/Architecture";

import MongoCollections from "./pages/MongoCollections";

import ComplexFlows from "./pages/ComplexFlows";
import Procedures from "./pages/ComplexFlows/Procedures";
import Slots from "./pages/ComplexFlows/Slots";
import Billing from "./pages/ComplexFlows/Billing";
import Queues from "./pages/ComplexFlows/Queues";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TOC />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="technologies" element={<MainTechnologies />} />
            <Route path="cloud" element={<Cloud />} />
          </Route>

          <Route path="/getting-started" element={<TOC />}>
            <Route index element={<GettingStarted />} />
            <Route path="requirements" element={<Requirements />} />
            <Route
              path="environment-variables"
              element={<EnvironmentVariables />}
            />
            <Route
              path="projects-dependencies"
              element={<ProjectsDependencies />}
            />
            <Route path="running-locally" element={<RunningLocally />} />
            <Route path="running-mixed" element={<RunningMixed />} />
            <Route path="deploy" element={<Deploy />} />
          </Route>

          <Route path="/complex-flows" element={<TOC />}>
            <Route index element={<ComplexFlows />} />
            <Route path="procedures" element={<Procedures />} />
            <Route path="slots" element={<Slots />} />
            <Route path="billing" element={<Billing />} />
            <Route path="queues" element={<Queues />} />
          </Route>

          <Route path="/architecture" element={<TOC />}>
            <Route index element={<Architecture />} />
          </Route>

          <Route path="/mongo-collections" element={<TOC />}>
            <Route index element={<MongoCollections />} />
          </Route>

          <Route path="/projects" element={<TOC />}>
            <Route index element={<Projects />} />
            <Route path="api" element={<API />} />
          </Route>

          <Route path="/appendix" element={<TOC />}>
            <Route index element={<Appendix />} />
            <Route path="tools" element={<Tools />} />
            <Route path="qa-tests" element={<Tests />} />
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
        <TOCLink to="/product">Produto</TOCLink>
        <TOCLink to="/technologies">Principais tecnologias</TOCLink>
        <TOCLink to="/cloud">Hospedagem</TOCLink>

        <TOCTitle to="/getting-started">Começando</TOCTitle>
        <TOCLink to="/getting-started/requirements">Requisitos</TOCLink>
        <TOCLink to="/getting-started/environment-variables">
          Variáveis de ambiente
        </TOCLink>
        <TOCLink to="/getting-started/projects-dependencies">
          Dependência entre projetos
        </TOCLink>
        <TOCLink to="/getting-started/running-locally">
          Rodando no local
        </TOCLink>
        <TOCLink to="/getting-started/running-mixed">
          Rodando de forma mista
        </TOCLink>
        <TOCLink to="/getting-started/deploy">Deployando</TOCLink>

        <TOCTitle to="/complex-flows">Fluxos complexos</TOCTitle>
        <TOCLink to="/complex-flows/procedures">Procedimentos</TOCLink>
        <TOCLink to="/complex-flows/slots">Slots</TOCLink>
        <TOCLink to="/complex-flows/billing">Faturamento</TOCLink>
        <TOCLink to="/complex-flows/queues">Filas de espera</TOCLink>

        <TOCTitle to="/architecture">Arquitetura</TOCTitle>

        <TOCTitle to="/mongo-collections">Base de dados</TOCTitle>

        <TOCTitle to="/projects">Projetos</TOCTitle>
        <TOCLink to="/projects/api">API</TOCLink>

        <TOCTitle to="/appendix">Apêndices</TOCTitle>
        <TOCLink to="/appendix/tools">Ferramentas</TOCLink>
        <TOCLink to="/appendix/qa-tests">Testes de QA</TOCLink>
      </LateralMenu>
    </Page>
  );
}

export default App;
