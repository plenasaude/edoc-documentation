import { PageContent } from "../../components/PageContent";
import { Diagram } from "../../components/Diagram";
import { Videos } from "../../components/Videos";
import { DownloadFile } from "../../components/DownloadFile";

import testDiagram from "./testDiagram.mmd?raw";
import fileForDownload from "./fileForDownload.md?url";

export default function DocumentationExemples() {
  return (
    <PageContent>
      <h1>Exemplos de uso da documentação</h1>

      <p>
        Essa seção traz alguns exemplos de componentes/funcionalidades da
        documentação. A ideia aqui é simplesmente renderizar alguns componentes
        para que desenvolvedores possar ver o arquivo
        <b>src/pages/Appendix/DocumentationExemples.tsx</b> e copiar esses
        exemplos.
      </p>

      <h2>Diagramas:</h2>

      <p>
        Diagramas usam o projeto
        <a href="https://mermaid-js.github.io/mermaid/#/">Mermaid</a>, a syntax
        pode ser aprendida no site.
      </p>

      <p>
        Se você estiver usando VSCode a extensão
        <a href="https://marketplace.visualstudio.com/items?itemName=tomoyukim.vscode-mermaid-editor">
          .mmd
        </a>
        pode ser bem útil para editar os diagramas.
      </p>
      <Diagram>
        {`
        graph TD 
        A[Client] --> B[Load Balancer] 
        B --> C[Server01] 
        B --> D[Server02]
        B --> E[Server03]
        `}
      </Diagram>

      <p>Using a mmd file</p>
      <Diagram>{testDiagram}</Diagram>

      <h2>Vídeos:</h2>
      <Videos src="exemple.mp4" />

      <h2>Download de arquivos estáticos:</h2>
      <DownloadFile src={fileForDownload} />
    </PageContent>
  );
}
