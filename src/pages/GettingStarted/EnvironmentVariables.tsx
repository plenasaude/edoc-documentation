import { PageContent } from "../../components/PageContent";

export default function EnvironmentVariables() {
  return (
    <PageContent>
      <h1>Variáveis de ambiente</h1>

      <p>
        A maior parte dos projetos da eDoc usa variáveis de ambiente para
        controle de alguns comportamentos. Em geral esses usos são feitos para o
        controle de senhas ou informações sensíveis e/ou para informações que
        talvez mudem independentemente de deploys do app, como URLs de serviços
        externos ou ligar/desligar algum tipo de logs por exemplo.
      </p>

      <p>
        Nos serviços deployados o setup destas variáveis vai depender da
        hospedagem, por exemplo serviços deployados no ElasticBeanstalk tem as
        variáveis de ambiente setadas via seção de configurações da plataforma.
      </p>

      <p>
        Já para o desenvolvimento local o mais comum é usarmos o pacote
        <a href="https://www.npmjs.com/package/dotenv">dotenv</a> que nos
        permite setar todas as variáveis de ambiente de cada projeto em um
        arquivo `.env` dentro do projeto. Essa abordagem facilita muito a
        alteração de comportamentos ao se rodar os serviços localmente. É
        importante compreender essa abordagem para conseguir descobrir problemas
        de variáveis não definidas nos .envs.
      </p>

      <p>
        Finalmente essa abordagem será particularmente importante no edocker
        onde as variáveis de ambiente controlam de fato o comportamento de todo
        o sistema rodando no local de uma vez só. Entraremos em mais detalhes
        sobre isso na seção relevante.
      </p>
    </PageContent>
  );
}
