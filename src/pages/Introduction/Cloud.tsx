import { PageContent } from "../../components/PageContent";

export default function Cloud() {
  return (
    <PageContent>
      <h1>Hospedagem</h1>

      <p>
        Todos os servidores da eDoc estão hospedados na nuvem da AWS, assim como
        a maior parte dos outros serviços, como o registro de domínio, gestão de
        certificados, armazenamento de documentos, Redis, elasticSearch e etc.
      </p>

      <p>Além da AWS usamos poucos serviços:</p>

      <ul>
        <li>
          MongoAtlas para hospedagem gerenciada da base de dados principal
        </li>
        <li>Auth0 para autenticações</li>
        <li>Servidores de SMS</li>
        <li>GitHub para hospedagem do código</li>
      </ul>
    </PageContent>
  );
}
