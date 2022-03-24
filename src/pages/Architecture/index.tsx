import { PageContent } from "../../components/PageContent";

import { Diagram } from "../../components/Diagram";

import architecture from "./architecture.mmd?raw";

export default function Architecture() {
  return (
    <PageContent>
      <h1>Arquitetura da infra</h1>

      <Diagram>{architecture}</Diagram>
    </PageContent>
  );
}
