import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";

export default function LinesClient() {
  return (
    <PageContent>
      <h1>Tela de filas</h1>

      <a href="https://github.com/plenasaude/lines_client">Github</a>

      <h2>Deploy</h2>
      <p>
        Processo de deploy descrito no{" "}
        <a href="https://github.com/plenasaude/lines_client/blob/master/README.md">
          README
        </a>{" "}
        do projeto
      </p>

      <h2>.env</h2>
      <p>
        Este projeto não possui .env, mas precisa de um arquivo de configuração
        <code>edoc_config.json</code>, ver
        <a href="https://github.com/plenasaude/lines_client/blob/master/README.md">
          README
        </a>{" "}
        para mais informações.
      </p>

      <p>
        O deploy deste projeto deveria trigar o update de todas as telas dos
        totens automaticamente, mas se isso não acontecer é sempre possível
        enviar o executável para ser instalado diretamente nos totens.
      </p>

      <p>
        O cliente de filas é feito usando{" "}
        <a href="https://www.electronjs.org/">Electron</a>.
      </p>

      <p>
        Esse projeto depende que o servidor de filas esteja rodando na porta
        3006 para funcionar,{" "}
        <a href="https://github.com/plenasaude/lines_client/blob/master/settings.js">
          veja aqui
        </a>
        .
      </p>
    </PageContent>
  );
}
