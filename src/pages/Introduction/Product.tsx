import { PageContent } from "../../components/PageContent";
import { Videos } from "../../components/Videos";
import { TODO } from "../../components/TODO";

export default function Product() {
  return (
    <PageContent>
      <h1>Produto</h1>

      <h2>Proposta do produto</h2>

      <p>
        A eDoc é um produto de gerenciamento de atendimento primário para
        ambulatórios. O nosso produto é focado principalmente em redes de
        hospitais/clinicas sobre a mesma gestão.
      </p>

      <p>
        Nós tentamos ser uma solução verticalizada para englobar todo o processo
        de um ambulatório, passando pelas seguintes etapas de um atendimento:
      </p>

      <ol>
        <li>Agendamento (via call center, plataforma online ou app mobile)</li>
        <li>Confirmação de agendamentos</li>
        <li>Filas (de recepção e chamada)</li>
        <li>Recepção</li>
        <li>Atendimento (com prontuário eletrônico)</li>
        <li>Faturamento (com e sem guias impressas)</li>
      </ol>

      <p>
        Além do atendimento em si a eDoc ainda permite uma série de operações
        administrativas, tais como:
      </p>

      <ol>
        <li>Gestão de grupos de saúde</li>
        <li>Gestão de unidades de atendimento dentro destes grupos</li>
        <li>Gestão de pessoal (administrativo e corpo médico)</li>
        <li>Gestão de contratos com plano de saúde</li>
        <li>Gestão de pagamentos particulares</li>
        <li>
          Gestão de agendas de profissionais de saúde (granular ao nível de
          unidade, procedimento e plano de saúde)
        </li>
        <li>Relatórios de atendimento</li>
        <li>Relatórios de repasse</li>
      </ol>

      <h2>Manuais de uso</h2>
      <p>
        O sistema possui manuais de uso entregues no repositório do github.
        Ambos são um <a href="https://www.gitbook.com/" target="_blank">gitbook</a>.
        Para rodar o projeto da documentação, basta cloná-lo para uma pasta, entrar na
        pasta e instalar todos os componentes com <code>npm install</code>.
        Depois disso, basta rodar o gitbook com <code>gitbook serve</code>.
        Ao abrir o servidor, abra o gitbook no seu browser em <code>http://localhost:4000</code>.
      </p>
      <p>
        As documentações estão nos seguintes repositórios:
        <ol>
          <li> <a href="https://github.com/plenasaude/external_documentation" target="_blank">Documentação de Grupos</a> </li>
          <li> <a href="https://github.com/plenasaude/external_documentation_orgs" target="_blank">Documentação de Unidades</a> </li>
        </ol>
      </p>
    </PageContent>
  );
}
