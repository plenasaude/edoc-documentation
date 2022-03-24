import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";

import apiDotEnv from "./dotFiles/api?url";

export default function API() {
  return (
    <PageContent>
      <h1>API</h1>

      <p>Link: ...</p>

      <h2>Variáveis de ambiente</h2>

      <h2>Deploy</h2>

      <h2>.env</h2>
      <p>
        Baixe o arquivo dentro do diretório da edoc_api e renomeio como .env
      </p>
      <DownloadFile src={apiDotEnv}>.env</DownloadFile>
    </PageContent>
  );
}
