import { PageContent } from "../../components/PageContent";

export default function ElasticBeanstalk() {
  return (
    <PageContent>
      <h1>Elastic Beanstalk</h1>

      <h2>Applications</h2>

      <h3>schedullerAPI e secondary_apis</h3>
      <p>
        Application contendo servidores rodando o código do projeto da
        <a href="https://github.com/plenasaude/edoc_api">API</a>
      </p>
      <p>
        Essa aplicação tem diversos ambientes dentro dela para compartilhar a
        carga de diferentes operações
      </p>

      <h4>schedullerapi-prod</h4>
      <p>
        Esse projeto é efetivamente o back usado como caso geral pelo front.
      </p>

      <h4>reports</h4>
      <p>
        Reports é um conjunto de servidores dedicado a criação de reports. Como
        os reports são muitas vezes operações pesadas essa foi uma solução
        encontrada para evitar sobre carga no env schedullerapi-prod quando
        conciliado com o uso intensivo de relatórios pelos usuários.
      </p>

      <h4>slots</h4>
      <p>
        Servidor dedicado ao cálculos dos slots para agendamento. Esse serviço
        tem a mesma motivação do de relatórios, como é uma operação pesada nos o
        separamos da API principal para evitar lentidão em outras áreas do site
        devido aos requisitos de cálculos de agendas.
      </p>

      <h3>groups_spa</h3>
      <p>
        Servidor da plataforma de grupos, contém o código do projeto do
        <a href="https://github.com/plenasaude/erp">ERP</a>
      </p>
      <p>
        Além de ter o código do front esse servidor serve como um proxy para os
        pedidos do front, evitando assim a latência associada com pedidos CORS.
      </p>

      <h3>scheduller_spa</h3>
      <p>
        Servidor da plataforma de organizações, contém o código do projeto do
        <a href="https://github.com/plenasaude/erp">ERP</a>
      </p>
      <p>
        Além de ter o código do front esse servidor serve como um proxy para os
        pedidos do front, evitando assim a latência associada com pedidos CORS.
      </p>

      <h3>lines</h3>
      <p>
        Servidor com a lógica das filas de atendimento, usado pelos totens e TVs
        para chamar os pacientes. Contém o código do projeto
        <a href="https://github.com/plenasaude/lines_server">lines_server</a>
      </p>

      <h3>certificate_validator</h3>
      <p>
        Servidor da plataforma de validação de atestados. Contém o código do
        projeto
        <a href="https://github.com/plenasaude/certificate_validator">
          certificate_validator
        </a>
      </p>

      <h3>jobs</h3>
      <p>
        Serviço que rodam scripts dependentes do tempo, ou seja se precisamos
        fazer alguma verificação de hora em hora essa lógica fica neste serviço.
        É esse projeto por exemplo que é o responsável por marcar agendamentos
        em que o cliente não compareceu como cancelados todos os dias a noite.
        Contem o código do projeto
        <a href="https://github.com/plenasaude/jobs">jobs</a>.
      </p>

      <h3>mongo-oplog</h3>
      <p>
        Projeto que contem um ETL para observar mudanças na base de dados e
        alterar, como por exemplo sincronização dos nomes do pacientes do Mongo
        com o cadastrado no OpenSearch.
      </p>
      <p>
        Roda o código do projeto
        <a href="https://github.com/plenasaude/mongo_oplog">mongo_oplog</a>.
      </p>

      <h3>slots</h3>
      <p>Serviço de gestão dos slots das agendas.</p>
      <p>
        Contém o código do projeto
        <a href="https://github.com/plenasaude/slots">slots</a>.
      </p>

      <h3>tissRouter</h3>
      <p>
        Servidor com serviços disponíveis via TISS, como verificação de
        elegibilidade.
      </p>
      <p>
        Contém o código do projeto
        <a href="https://github.com/plenasaude/tiss_router">tiss_router</a>.
      </p>

      <h3>tissXML</h3>
      <p>Serviço que gera os arquivos XML no formato da TISS.</p>
      <p>
        Contém o código do projeto
        <a href="https://github.com/plenasaude/tiss_xml">tiss_xml</a>.
      </p>

      <h3>web_scheduler</h3>
      <p>Plataforma de agendamento web.</p>
      <p>
        Contém o código do projeto
        <a href="https://github.com/plenasaude/web_scheduler">web_scheduler</a>.
      </p>
    </PageContent>
  );
}
