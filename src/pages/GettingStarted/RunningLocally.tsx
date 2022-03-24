import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";
import { TODO } from "../../components/TODO";

import api from "../../dotFiles/apiLocal?url";
import edockerBase from "../../dotFiles/edockerBase?url";
import mongoBackup from "../../files/dbRestorePlaceholder?url";

export default function RunningLocally() {
  return (
    <PageContent>
      <h1>Rodando no local</h1>

      <p>
        Rodar a infraestrutura no local é o primeiro passo para alterar o
        sistema. Vamos começar com o básico, rodando a API e os nossos fronts.
      </p>

      <h2>Rodando API + plataformas:</h2>
      <p>
        O primeiro problema que enfrentamos para rodar o projeto no local é a
        dependência de uma série de tecnologias e de outros projetos. Claro que
        poderíamos instalar todas as dependências na nossa máquina, rodar todos
        os projetos da eDoc e finalmente usar os .env para apontar cada projeto
        para o local adequado. Apesar de termos feito isso por muito tempo temos
        uma solução melhor para esse problema, o genialmente nomeado projeto
        <a href="https://github.com/plenasaude/edocker">edocker</a>.
      </p>

      <p>
        Na seção de projetos nós entraremos em mais detalhes sobre as diversas
        configurações possíveis do edocker, nessa seção vamos demostrar uma
        configuração que permite rodarmos os projetos que nós alteramos mais
        comumente, a API e as plataformas web.
      </p>

      <h3>Preparações</h3>

      <ol>
        <li>
          Clone o projeto{" "}
          <a href="https://github.com/plenasaude/edocker">edocker</a>.
        </li>
        <li>npm install</li>
        <li>
          Adicione <DownloadFile src={edockerBase}>este arquivo</DownloadFile>{" "}
          como .env no diretório raiz do projeto
        </li>
        <li>npm run dev</li>
      </ol>

      <p>
        A primeira vez que você rodar o projeto ele vai demorar um tempo
        considerável porque ele vai criar todos os containers, as próximas esse
        processo deve ser bem mais rápido.
      </p>

      <p>
        Demais operações com o projeto edocker são descritas no seu README.md
      </p>

      <p>
        Se essa for a primeira vez que você roda o projeto você precisará de uma
        base de dados com alguns documentos que permita você mexer na aplicação.
        Para i
      </p>

      <ol>
        <li>
          <DownloadFile src={mongoBackup}>
            Baixe o backup básico do mongo
          </DownloadFile>{" "}
          para qualquer lugar de seu computador
        </li>
        <li>
          Em um terminal entre o comando:{" "}
          <code>mongorestore --drop -d edoc [PATH_TO_BACKUP]/edoc</code>
        </li>
      </ol>

      <p>
        Se você quiser usar a busca de pacientes será necessário popular a base
        do elasticSearch com <code>npm run populate:patients</code> de dentro da
        pasta do edocker.
      </p>

      <p>Com o edocker de pé vamos rodar a API.</p>

      <ol>
        <li>
          Clone o projeto{" "}
          <a href="https://github.com/plenasaude/edoc_api">edoc_api</a>.
        </li>
        <li>npm install</li>
        <li>
          Adicione <DownloadFile src={api}>este arquivo</DownloadFile> como .env
          no diretório raiz do projeto.
        </li>
        <li>npm run dev</li>
      </ol>

      <p>
        Finalmente vamos rodar os projetos das plataformas de orgs e grupos.
        Esses dois projetos vivem no mesmo repositório, o que facilita um pouco
        a nossa vida.
      </p>

      <ol>
        <li>
          Clone o projeto <a href="https://github.com/plenasaude/erp">erp</a>.
        </li>
        <li>npm install</li>
        <li>
          Adicione <DownloadFile src={api}>este arquivo</DownloadFile> como .env
          no diretório raiz do projeto.
        </li>
        <li>npm run dev</li>
        <li>
          acesse{" "}
          <a href="http://localhost:3000/" target="_blank">
            http://localhost:3000/
          </a>{" "}
          para o console de orgs
        </li>
        <li>
          acesse{" "}
          <a href="http://localhost:3005/" target="_blank">
            http://localhost:3005/
          </a>{" "}
          para o console de groups
        </li>
      </ol>

      <p>Agora você deve conseguir fazer o login e usar as plataformas</p>

      <p>
        Para parar de rodar os projetos basta dar um <code>CTRL + C</code> em
        todos os terminais. É importante notar que o edocker vai fazer algumas
        limpezas depois de ser terminado, não feche o terminal até que ele
        acabe.
      </p>

      <h1>Rodando o sistema de filas</h1>
      <TODO></TODO>

      <h1>Rodando validador de certificados</h1>
      <TODO></TODO>
    </PageContent>
  );
}
