import { PageContent } from "../../components/PageContent";

import { Diagram } from "../../components/Diagram";

import architecture from "./architecture.mmd?raw";

export default function Architecture() {
  return (
    <PageContent>
      <h1>Arquitetura da infraestrutura</h1>

      <p>
        É importante diferenciar que esta seção não trata da arquitetura de
        software da eDoc, e sim da infraestrutura na nuvem do sistema.
      </p>

      <Diagram>{architecture}</Diagram>
    </PageContent>
  );
}
