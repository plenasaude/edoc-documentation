import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";

import dotEnvFile from "../../dotFiles/certificateValidatorEnv?url";

export default function CertificateValidator() {
  return (
    <PageContent>
      <h1>Validador de atestados</h1>

      <a href="https://github.com/plenasaude/certificate_validator">Github</a>
      <a href="https://github.com/plenasaude/certificate_validator/blob/master/PROJECT.md">
        Descrição do projeto neste link
      </a>

      <p>
        Esse é um projeto bastante simples e era o case que usávamos nas
        entrevistas para vagas de desenvolvedores na eDoc, o link com a
        descrição acima é o enunciado que nós enviávamos para os nossos
        candidatos.
      </p>

      <h2>Deploy</h2>
      <p>Deployado usando eb deploy.</p>

      <h2>.env</h2>
      <p>Baixe o arquivo dentro do diretório do projeto e renomeio como .env</p>
      <DownloadFile src={dotEnvFile}>.env</DownloadFile>

      <h2>Variáveis de ambiente</h2>
      <p>
        Todas as variáveis de ambiente deste projeto são opcionais, tendo
        defaults setados dependendo do NODE_ENV.
      </p>

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
