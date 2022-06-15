import { PageContent } from "../../components/PageContent";

export default function S3() {
  return (
    <PageContent>
      <h1>S3</h1>

      <p>
        Buckets com prefixo ou sufixo stag são usados no ambiente de staging da
        eDoc.
      </p>

      <h2>Buckets de sites/redirects</h2>
      <ul>
        <li>admin.edocsaude.com</li>
        <li>agendamento.edocsaude.com</li>
        <li>api-stag.consultasplena.com</li>
        <li>api-stag.edocsaude.com</li>
        <li>api.edocsaude.com</li>
        <li>atestados.edocsaude.com</li>
        <li>companies.edocsaude.com</li>
        <li>credenciamento.edocsaude.com</li>
        <li>edocsaude.com</li>
        <li>groups.edocsaude.com</li>
        <li>indicacao.edocsaude.com</li>
        <li>lines.edocsaude.com</li>
        <li>organizations.edocsaude.com</li>
        <li>previna.edocsaude.com</li>
        <li>prime.edocsaude.com</li>
        <li>referral.edocsaude.com</li>
        <li>sessaomobile.consultasplena.com</li>
        <li>sessaomobile.edocsaude.com</li>
        <li>staging-certificate.consultasplena.com</li>
        <li>staging-certificate.edocsaude.com</li>
        <li>staging-groups.consultasplena.com</li>
        <li>staging-groups.edocsaude.com</li>
        <li>staging-lines.consultasplena.com</li>
        <li>staging-lines.edocsaude.com</li>
        <li>staging-orgs.consultasplena.com</li>
        <li>staging-orgs.edocsaude.com</li>
        <li>staging-web.consultasplena.com</li>
        <li>staging-web.edocsaude.com</li>
        <li>www.atestados.edocsaude.com</li>
        <li>www.consultasplena.com</li>
        <li>www.edocsaude.com</li>
      </ul>

      <h2>Buckets com conteúdo</h2>
      <h3>edoc-logs-exports</h3>
      <p>
        Bucket usado eventualmente para se exportar logs do cloudwatch para
        serem tratados por algum script posteriormente.
      </p>

      <h3>edoc-manual-es-snapshots</h3>
      <p>Elastic Search snapshots</p>

      <h3>edoc-mlab-backups</h3>
      <p>
        Bucket com backups da base de dados no mongo. Esse bucket era usado com
        o antigo provedor da base de dados, o MongoAtlas guarda os backups
        dentro da sua própria cloud.
      </p>

      <h3>edoc.access.logs</h3>
      <p>Bucket com logs de acesso de todos os serviços do EB.</p>

      <h3>edocimages e edocimages-stag</h3>
      <p>
        Bucket usado pela API para armazenar imagens uploadadas durante uma
        consulta via plataforma. Em produção e staging, respectivamente.
      </p>

      <h3>edocofflineprofiles</h3>
      <p>
        Bucket usado para armazenar informações dos profiles offline do app
        mobile da eDoc. Não deve ter uso uma vez que o app foi descontinuado.
      </p>

      <h3>edocprofiles e edocprofiles-stag</h3>
      <p>Imagens de profiles da edoc, sejam usuários, orgs ou groups.</p>

      <h3>edocsaude-faces</h3>
      <p>Bucket com foto dos usuários usadas no reconhecimento facial.</p>

      <h3>edocsaude-files</h3>
      <p>Bucket com os lots de guias TISS no formato XML.</p>

      <h3>edocsaude-keys</h3>
      <p>
        Chaves de acesso entre serviços da eDoc. Poderia ser substituído pelo
        uso do KMS.
      </p>

      <h3>edocsaude-ongoing-wizards</h3>
      <p>
        Grava informações parciais dos wizards em andamento na plataforma,
        permitindo que um usuário pare um wizard no meio e o retome depois.
      </p>

      <h3>edocsaude-payment-records e edocsaude-payment-records-stag</h3>
      <p>
        Buckets de pagamentos do eDoc prime. Hoje em dia não devem mais ser
        utilizados.
      </p>

      <h3>edocsaude-session</h3>
      <p>
        Arquivos submetidos durante um atendimento médico usando a plataforma.
      </p>

      <h2>Buckets de logs internos da AWS</h2>
      <ul>
        <li>aws-athena-query-results-496631902290-us-west-2</li>
        <li>elasticbeanstalk-sa-east-1-496631902290</li>
        <li>elasticbeanstalk-us-east-1-496631902290</li>
        <li>elasticbeanstalk-us-east-2-496631902290</li>
        <li>elasticbeanstalk-us-west-2-496631902290</li>
        <li>harpia-telegram-bot-prod-serverlessdeploymentbuck-69rhl550js8n</li>
        <li>myservice-dev-serverlessdeploymentbucket-of3wbra86beu</li>
        <li>patients-dev-serverlessdeploymentbucket-27jw8rwyzgdr</li>
        <li>slots-dev-serverlessdeploymentbucket-pb14mdoipxrr</li>
        <li>codepipeline-us-west-2-717980424774</li>
        <li>codepipeline-us-west-2-608018587829</li>
        <li>codepipeline-us-west-2-587663969930</li>
      </ul>

      <h2>Deprecados</h2>
      <ul>
        <li>edoc-billing-reports</li>
        <li>edoc-kinesis</li>
        <li>edoc-encrypted-keys</li>
        <li>reglog</li>
      </ul>
    </PageContent>
  );
}
