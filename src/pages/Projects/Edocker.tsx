import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";

import dotEnvFile from "../../dotFiles/edockerBase?url";

export default function Edocker() {
  return (
    <PageContent>
      <h1>edocker</h1>

      <a href="https://github.com/plenasaude/edocker">Github</a>

      <h2>Deploy</h2>
      <p>Esse projeto não é deployado</p>

      <h2>.env</h2>
      <p>Baixe o arquivo dentro do diretório do projeto e renomeio como .env</p>
      <DownloadFile src={dotEnvFile}>.env</DownloadFile>

      <p>
        Esse projeto é usado exclusivamente para facilitar o desenvolvimento
        local.
      </p>

      <p>
        edocker é um projeto que sobe toda a infra e os projetos necessários
        para se rodar todo o sistema da eDoc no local.
      </p>
    </PageContent>
  );
}
