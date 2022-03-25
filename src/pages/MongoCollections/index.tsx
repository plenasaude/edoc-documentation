import { PageContent } from "../../components/PageContent";
import { Diagram } from "../../components/Diagram";

import dbDiagram from "./relations.mmd?raw";

export default function MongoCollections() {
  return (
    <PageContent>
      <h1>Descrição das coleções</h1>

      <p>
        Nessa seção descreveremos o uso das coleções da base de dados e como
        elas se relacionam
      </p>

      <Diagram>{dbDiagram}</Diagram>
    </PageContent>
  );
}
