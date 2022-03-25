import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";

import dotEnvFile from "../../dotFiles/linesServer?url";

export default function LinesServer() {
  return (
    <PageContent>
      <h1>Servidor de filas</h1>

      <a href="https://github.com/plenasaude/lines_server">Github</a>

      <h2>Deploy</h2>
      <p>Deployado usando eb deploy.</p>

      <h2>.env</h2>
      <p>Baixe o arquivo dentro do diretório do projeto e renomeio como .env</p>
      <DownloadFile src={dotEnvFile}>.env</DownloadFile>

      <h2>Variáveis de ambiente</h2>

      <ul>
        <li>
          MONGO_URL: Url de conexão com o mongo. Ex:
          mongodb://localhost:27017/edoc
        </li>
        <li>HTTP_PORT: Porta para rodar o servidor. Por default 3007</li>
      </ul>
    </PageContent>
  );
}
