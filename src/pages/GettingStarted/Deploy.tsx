import { PageContent } from "../../components/PageContent";

export default function Deploy() {
  return (
    <PageContent>
      <h1>Deploy</h1>

      <p>
        A maior parte dos nossos projetos é deployada em um ElasticBeanstalk,
        logo em geral é possível deployar os projetos usando o comando{" "}
        <code>eb deploy</code>. Para tanto você precisará ter instalado o eb
        CLI, você deve ter as permissões adequadas na conta da AWS e ter as suas
        credenciais da AWS no seu computador local.
      </p>

      <p>
        Se o projeto não tiver sido inicializado com a eb CLI você precisará
        chamar o comando <code>eb init</code> de dentro do projeto. Isso abrirá
        um assistente via linha de comando que vai te instruir nas
        configurações. Se houver dúvidas nessa parte entre em contato com quem
        for o responsável pela gestão da AWS.
      </p>

      <p>
        Quase todo projeto deve ter um script que abstrai isso pra você,
        permitindo que você rode sempre <code>npm run deploy</code>.
      </p>

      <p>
        Para mais detalhes de como deployar cada projeto especificamente
        consulte o README do projeto ou a sua seção nesta documentação.
      </p>
    </PageContent>
  );
}
