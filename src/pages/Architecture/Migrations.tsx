import { PageContent } from "../../components/PageContent";

export default function Migrations() {
  return (
    <PageContent>
      <h1>Lista com artefatos criados para migração de domínio para o plena</h1>

      <p>
        Todos os elementos de infra listados aqui devem poder ser deprecados
        depois da estabilidade da migração para o domínio consultasplena.com
      </p>

      <h3>S3:</h3>
      <ul>
        <li>atestados.edocsaude.com</li>
        <li>www.atestados.edocsaude.com</li>
        <li>groups.edocsaude.com</li>
        <li>admin.edocsaude.com</li>
        <li>previna.edocsaude.com</li>
        <li>organizations.edocsaude.com</li>
        <li>edocsaude.com</li>
        <li>companies.edocsaude.com</li>
        <li>lines.edocsaude.com</li>
        <li>agendamento.edocsaude.com</li>
      </ul>

      <h3>CloudFront</h3>
      <ul>
        <li>E2IJI5YZBHDT1Q</li>
      </ul>
    </PageContent>
  );
}
