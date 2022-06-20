import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";

import qaSpreadSheet from "./edocQA.xlsx?url";

export default function Tests() {
  return (
    <PageContent>
      <h1>Testes padronizados</h1>

      <p>
        Aqui você pode baixar a planilha usada como testes de QA pela equipe de
        desenvolvimento da eDoc.
      </p>

      <h2>Download da planilha de testes de QA:</h2>
      <DownloadFile src={qaSpreadSheet} />
    </PageContent>
  );
}
