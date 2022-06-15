import { PageContent } from "../../components/PageContent";

export default function Overview() {
  return (
    <PageContent>
      <h1>Visão geral da infra estrutura</h1>
      <p>
        Nesta seção vamos abordar de forma superficial os grandes grupos da
        arquitetura usada na eDoc.
      </p>
      <p>
        Nós usamos basicamente 3 provedores de serviços de infra estrutura em
        nosso sistema:
      </p>
      <ul>
        <li>AWS: Uso geral de tecnologias de cloud </li>
        <li>MongoAtlas: base de dados geral</li>
        <li>Auth0: autenticação</li>
      </ul>
      <p>
        O foco principal de toda essa seção será nos serviços utilizados dentro
        da AWS, uma vez que os outros 2 serviços tem usos bem básicos.
      </p>
      <h2>MongoAtlas</h2>
      <a href="https://www.mongodb.com/">MongoAtlas</a> simplesmente hosteia a
      base de dados principal da eDoc. Todo serviço que usar a nossa base de
      dados se conectará nesta plataforma.
      <h2>Auth0</h2>
      <a href="https://auth0.com/">Auth0</a> é o serviço de autenticação usado
      pela eDoc. Todos os fronts que pedem autenticação enviarão este um pedido
      para o auth0 que retornará um JWT. Esse JWT por sua vez pode ser usado
      para ganhar acesso a outros serviços da eDoc, como a API por exemplo.
      <h2>AWS</h2>A <a href="https://auth0.com/">AWS</a> é onde investiremos o
      maior tempo de toda essa seção, toda a lógica real da eDoc fica nesta
      plataforma. Nós usamos os seguintes serviços dentro da AWS para viabilizar
      a operação da eDoc:
      <ul>
        <li>Elastic Beanstalk</li>
        <li>S3</li>
        <li>SQS</li>
        <li>OpenSearch</li>
        <li>KMS</li>
        <li>ElastiCache</li>
        <li>SES</li>
        <li>Route53</li>
        <li>Certificate Manager</li>
        <li>Rekognition</li>
      </ul>
      <h3>Elastic Beanstalk</h3>
      <p>
        Esse é o serviço que usamos para hostear todos os nossos servidores.
      </p>
      <p>
        O EB facilita o gerenciamento e a escalabilidade de serviços. Por baixo
        dos panos ele usa o EC2 para deploy dos servidores e load balancers.
      </p>
      <h3>S3</h3>
      <p>
        Nós usamos o S3 tanto para armazenamento de arquivos, como imagens e
        documentos anexados aos prontuários, como para hosteamento de sites
        estáticos e redirecionamentos.
      </p>
      <h3>SQS</h3>
      <p>
        Temos algumas filas que podem ser usadas pela API para processamento de
        informações.
      </p>
      <h3>OpenSearch</h3>
      <p>
        O OpenSearch é usado para permitir buscas fuzzy dentro da plataforma,
        principalmente para busca de pacientes.
      </p>
      <h3>KMS</h3>
      <p>
        As chaves de acesso para serviços de produção em geral são armazenadas
        aqui.
      </p>
      <h3>ElastiCache</h3>
      <p>
        Base de dados de chave:valor usada para cachear dados na API e aumentar
        a performance de leitura de dados muito usados.
      </p>
      <h3>SES</h3>
      <p>
        Todos os emails enviados pela plataforma ou pelos jobs da eDoc usam o
        SES.
      </p>
      <h3>Route53</h3>
      <p>Serviços de DNS</p>
      <h3>Certificate Manager</h3>
      <p>Serviço que usamos para emitir/gerenciar os certificados HTTPS</p>
      <h3>Rekognition</h3>
      <p>
        Serviço de reconhecimento facial, usado para reconhecimento facial na
        recepção.
      </p>
    </PageContent>
  );
}
