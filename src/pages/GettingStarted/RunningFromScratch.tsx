import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";

import linesServerDotEnv from "../../dotFiles/linesServer?url";
import newUserJson from "./newUser.json?url";
import apiDotEnv from "./apiEnv.txt?url";

export default function RunningFromScratch() {
  return (
    <PageContent>
      <h1>Rodando do zero</h1>

      <p>
        Para todos os repositórios que listarmos aqui, nós sempre recomendamos
        que se comece o desenvolvimento pela branch master, uma vez que essa é a
        branch estável de cada projeto. Outras branches existentes podem não
        estar estáveis.
      </p>

      <p>
        Nós vamos focar aqui nos requisitos para rodarmos a API e as
        plataformas. Nenhum outro serviço deve ser difícil de rodar depois
        disso.
      </p>

      <h2>Instalando node</h2>
      <ol>
        <li>
          Instale a versão LTS do Node.js, disponíveis{" "}
          <a href="https://nodejs.org/en/">aqui</a>
        </li>

        <li>
          Instale o pacote <a href="https://www.npmjs.com/package/n">n</a> para
          gestão de versões do Node.js. Recomento a instalação global do pacote.
        </li>

        <li>Usando o n instale a versão 8.9.3 do Node.js</li>
      </ol>

      <h2>Instalando Docker e docker-compose</h2>
      <ol>
        <li>
          Instale o Docker Desktop seguindo as{" "}
          <a href="https://docs.docker.com/desktop/">instruções oficiais</a>
        </li>
        <li>
          O docker-compose deve vir instalado junto com o Docker Desktop. Em
          caso de problemas verifique a{" "}
          <a href="https://docs.docker.com/compose/install/">
            documentação oficial
          </a>
        </li>
      </ol>

      <h2>Git</h2>

      <p>
        Siga as instruções para instalação do Git no seu sistema operacional.
      </p>

      <h2>Acesso ao GitHub</h2>

      <ol>
        <li>
          Com uma conta do GitHub, peça para ser convidado para a organização
        </li>
        <li>
          Crie uma chave ssh seguindo as{" "}
          <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account">
            instruções oficiais
          </a>
        </li>
        <li>
          Agora você será capaz de clonar projetos e interagir com os
          repositórios remotos sem precisar imputar a sua senha todas as vezes.
        </li>
      </ol>

      <h2>MongoDb</h2>
      <ol>
        <li>
          Instale o MongoDB{" "}
          <a href="https://www.mongodb.com/docs/manual/installation/">
            seguindo as instruções oficiais
          </a>
          . Garanta que você tenha a versão 4.2 do MongoDB.
        </li>
        <li>Inicie o serviço do mongo.</li>
        <li>
          Instale uma interface para o mongo, seja a CLI ou uma interface
          gráfica. Eu recomendo o uso do{" "}
          <a href="https://www.mongodb.com/products/compass">Mongo Compass</a> a
          UI oficial do Mongo.
        </li>
      </ol>

      <h2>Redis</h2>
      <ol>
        <li>
          Baixe a versão 4.0.5 do redis.{" "}
          <a href="https://download.redis.io/releases/">
            Lista de versões do Redis para download
          </a>
        </li>
        <li>
          <p>Descompacte o arquivo e siga as instruções do README.md</p>
          <ol>
            <li>Entre na pasta dos arquivos descompactados via terminal</li>
            <li>Rode o comando: make install</li>
            <li>Aceite as configurações default</li>
            <li>
              Ainda no terminal, vá para o diretório que os binários foram
              estalados. No caso de um Mac foi /usr/local/bin
            </li>
            <li>Execute o binário redis-server via terminal</li>
            <li>O Redis deve estar rodando na porta 6379</li>
          </ol>
          <p>
            É possível deixar o processo de rodar o Redis mais amigável, mas não
            entraremos nesse tópico neste tutorial.
          </p>
        </li>
      </ol>

      <h2>Servidor de filas</h2>
      <ol>
        <li>
          Clone o projeto do{" "}
          <a href="https://github.com/plenasaude/lines_server">lines_server</a>
        </li>
        <li>Entre no diretório do projeto</li>
        <li>npm install</li>
        <li>
          {" "}
          Baixe o arquivo .env na root do projeto
          <DownloadFile src={linesServerDotEnv}>.env</DownloadFile>
        </li>
        <li>
          Garanta que a URL do mongo está apontando para o endereço do seu mongo
          local
        </li>
        <li>rode: npm start OU npm run dev</li>
      </ol>

      <h2>TISS router</h2>
      <ol>
        <li>
          Clone o projeto do{" "}
          <a href="https://github.com/plenasaude/tiss_router">tiss_router</a>
        </li>
        <li>Entre no diretório do projeto</li>
        <li>npm install</li>
        <li>npm run dev</li>
      </ol>

      <h2>TISS XML</h2>
      <ol>
        <li>
          Clone o projeto do{" "}
          <a href="https://github.com/plenasaude/tiss_xml">tiss_xml</a>
        </li>
        <li>Entre no diretório do projeto</li>
        <li>npm install</li>
        <li>npm start</li>
      </ol>

      <h2>Auth0</h2>
      <ol>
        <li>
          Acesse o{" "}
          <a href="https://manage.auth0.com/dashboard/us/edocauth-dev/">
            auth0 de desenvolvimento
          </a>
        </li>
        <li>
          Use a{" "}
          <a href="https://manage.auth0.com/dashboard/us/edocauth-dev/applications/wpUv3rzx6RBiVzyeyVoIG6EaQbbBu7jh/settings">
            aplicação default
          </a>{" "}
          para login com o ERP
        </li>
      </ol>

      <h2>Rodando a API</h2>
      <ol>
        <li>
          Clone o projeto da{" "}
          <a href="https://github.com/plenasaude/edoc_api">API</a>
        </li>
        <li>Entre no projeto da API</li>
        <li>
          Garanta que você está na branch master atualizada:
          <ol>
            <li>git checkout master</li>
            <li>git pull origin master</li>
          </ol>
        </li>
        <li>Rode: npm install</li>
        <li>
          Baixe o arquivo .env na root do projeto da API.
          <DownloadFile src={apiDotEnv}>.env</DownloadFile>
          <p>
            Se você seguiu as instruções até aqui usando as portas default de
            todos os projetos esse .env acima ja deve estar completamente
            configurado para você rodar a API.
          </p>
        </li>
        <li>Você deve estar com a API rodando na porta 3001</li>
      </ol>

      <h2>ERP</h2>
      <ol>
        <li>
          Clone o projeto do <a href="https://github.com/plenasaude/erp">ERP</a>
        </li>
        <li>Entre no diretório do projeto</li>
        <li>npm install</li>
        <li>
          npm run build:dev. Comando necessário para buildar o código do front.
        </li>
        <li>
          npm run dev. Este comando vai rodar ao mesmo tempo as plataformas de
          orgs e groups. Se quiser rodar apenas uma delas veja os comandos
          disponíveis no package.json.
        </li>
      </ol>

      <h2>Primeiro login</h2>
      <p>
        Para fazer seu primeiro login você precisa minimamente de duas coisas:
      </p>
      <ol>
        <li>Um usuário no auth0 (do ambiente setado no seu projeto)</li>
        <li>
          Um usuário criado na base de dados que você está conectando linkado ao
          seu usuário do auth0
        </li>
      </ol>

      <p>Para criar um usuário no auth0 siga os passos a baixo:</p>
      <ol>
        <li>
          Acesse o console do{" "}
          <a href="https://manage.auth0.com/dashboard/us/edocauth-dev/">
            auth0
          </a>
        </li>
        <li>
          Escolha o tenant apropriado (dev, staging ou prod) no botão do header
        </li>
        <li>No manu lateral, clique em 'User Management'</li>
        <li>No sub menu que abriu, clique em 'Users'</li>
        <li>
          Clique no botão 'create user' no canto superior direito e insira as
          informações do novo usuário. Alternativamente, se o seu email já
          estiver cadastrado, você pode buscar por um usuário.
        </li>
      </ol>

      <p>Depois de criado o usuário vamos precisar copiar o seu ID no auth0:</p>
      <ol>
        <li>Selecione o usuário da lista do auth0 e clique nele</li>
        <li>
          Na página com os detalhes deste usuário copie o campo 'user_id'
          localizado logo a baixo do nome/email do usuário. Esse identificador
          será algo como <pre>Auth0|589859cf6e602023d8ee1709</pre>
        </li>
      </ol>

      <p>Criando um usuário na base de dados local:</p>
      <ol>
        <li>
          Conectado ao mongo, vá para a database que você está usando (edoc) por
          default
        </li>
        <li>Abra a collection users</li>
        <li>
          Baixe o JSON de um usuário básico
          <DownloadFile src={newUserJson}>userJson</DownloadFile>
        </li>
        <li>Adicione esse json como um usuário à coleção de usuários</li>
        <li>
          Modifique a chave 'authId' do usuário para conter o valor copiado no
          auth0. Perceba que authId é um array que contem os IDs de um usuário,
          permitindo um único user ter múltiplos logins distintos.
        </li>
        <li>Modifique quaisquer outras chaves de interesse</li>
      </ol>

      <p>Pronto, agora você deve conseguir fazer login no seu sistema local!</p>

      <h2>Base de dados</h2>
      <p>
        Para continuar o seu desenvolvimento você precisará de uma base de dados
        mais completa, com grupos, organizações e relações já formadas.
      </p>

      <p>
        Uma sugestão para facilitar o processo de criar uma base de dados do
        zero é fazer o clone da base de dados e restará-la no seu local.
      </p>

      <h2>Rodando com o eDocker</h2>
      <p>
        Também é possível rodar todo esse processo de forma mais rápida usando o
        edocker, um projeto que roda todos os projetos auxiliares para você de
        forma simples dentro de containers.
      </p>
      <ol>
        <li>
          Clone o projeto do{" "}
          <a href="https://github.com/plenasaude/edocker">edocker</a>
        </li>
        <li>Entre no diretório que o projeto foi clonado</li>
        <li>
          Garanta que você está na branch master atualizada:
          <ol>
            <li>git checkout master</li>
            <li>git pull origin master</li>
          </ol>
        </li>
        <li>Rode: npm install</li>
        <li>Garanta que o Docker Desktop foi inicializado</li>
        <li>
          Clone o projeto{" "}
          <a href="https://github.com/plenasaude/tiss_router">tissRouter</a>{" "}
          para o mesmo diretório do edocker.
        </li>
        <li>
          Clone o projeto{" "}
          <a href="https://github.com/plenasaude/serverless_functions">
            serverless_functions
          </a>{" "}
          para o mesmo diretório do edocker.
        </li>
        <li>
          Clone o projeto{" "}
          <a href="https://github.com/plenasaude/lines_server">lines_server</a>{" "}
          para o mesmo diretório do edocker.
        </li>
        <li>
          Clone o projeto{" "}
          <a href="https://github.com/plenasaude/tiss_xml">tiss_xml</a> para o
          mesmo diretório do edocker.
        </li>
        <li>
          Clone o projeto{" "}
          <a href="https://github.com/plenasaude/mongo_oplog">mongo_oplog</a>{" "}
          para o mesmo diretório do edocker.
        </li>
        <li>
          De dentro do diretório do edocker, rode: npm start. Esse comando pode
          demorar quando rodado pela primeira vez pois todas as imagens dos
          containers necessários serão baixadas. Execuções subsequentes serão
          significativamente mais rápidas.
        </li>
      </ol>
    </PageContent>
  );
}
