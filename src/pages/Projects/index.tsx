import { PageContent } from "../../components/PageContent";
import { Diagram } from "../../components/Diagram";

import projectsDiagram from "./projectsDiagram.mmd?raw";

export default function Projects() {
  return (
    <PageContent>
      <h1>Projetos</h1>

      <Diagram>{projectsDiagram}</Diagram>
    </PageContent>
  );
}
