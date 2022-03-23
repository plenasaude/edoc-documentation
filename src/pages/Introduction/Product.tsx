import { PageContent } from "../../components/PageContent";

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

      <h2>Solução eDoc</h2>

      <h3>Plataforma de grupos</h3>

      <video style={{ width: "100%" }} controls>
        <source src="/src/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>Plataforma de unidades</h3>

      <video style={{ width: "100%" }} controls>
        <source src="/src/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>Agendamento online</h3>

      <video style={{ width: "100%" }} controls>
        <source src="/src/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>Validação de certificados</h3>

      <video style={{ width: "100%" }} controls>
        <source src="/src/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>Plataforma de filas</h3>

      <h3>App</h3>

      <video style={{ width: "100%" }} controls>
        <source src="/src/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </PageContent>
  );
}
