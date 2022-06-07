import { PageContent } from "../../components/PageContent";

export default function Procedures() {
  return (
    <PageContent>
      <h1>procedures</h1>

      <p>
        Coleção onde são guardadas as configurações de agenda de cada profissional (criadas na tela de abertura de agendas).
      </p>
      <p>Uma das principais coleções da eDoc - nela são registrados todos os atendimentos passiveis de ocorrer por profisisonal, unidade, convênio, especialidade e procedimento, além de registrar dados de duração.</p>
      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-j1i3{border-color:inherit;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;vertical-align:top;\n  will-change:transform}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
          }}
        />
        <div className="tg-wrap">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-j1i3">Campo</th>
                <th className="tg-j1i3">Descrição</th>
                <th className="tg-j1i3">
                  <span style={{ fontWeight: "bold" }}>Comentários</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0pky">_id</td>
                <td className="tg-0pky">Identificador único do objeto</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">group</td>
                <td className="tg-0pky">
                  _id do grupo ao qual a unidade faz parte - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">organization</td>
                <td className="tg-0pky">
                  _id da unidade para a qual o procedimento é válido - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">professional</td>
                <td className="tg-0pky">
                  _id do profissional de saúde que executa aquele procedimento - ver
                  collection <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">operator</td>
                <td className="tg-0pky">
                  _id da operadora de saúde para a qual o procedimento é válido - ver
                  collection <span style={{ fontWeight: "bold" }}>operators</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">instructions</td>
                <td className="tg-0pky">
                  Texto com instruções a serem mostradas para o paciente no momento do
                  agendamento deste procedimento - aparece tanto no agendamento web
                  quanto para o call center
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">duration</td>
                <td className="tg-0pky">Duração do atendimento em minutos</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">cbo</td>
                <td className="tg-0pky">
                  Código Brasileiro de Ocupações, para a especialidade do profissional
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">speciality</td>
                <td className="tg-0pky">
                  _id da especialidade do profissional - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>specialitiesstatics</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">tuss</td>
                <td className="tg-0pky">Código TUSS do procedimento</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">tussId</td>
                <td className="tg-0pky">
                  _id do tuss - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>tusses</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">tussName</td>
                <td className="tg-0pky">
                  Nome do procedimento, de acordo com a tabela TUSS
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">maxTissQuantity</td>
                <td className="tg-0pky">
                  Configuração avançada do procedimento - limita a quantidade máxima
                  de procedimentos registrados na TISS. Por exemplo, um erro comum na
                  recepção é digitar "100" aplicações ao invés de "10". <br />
                  Se o maxTissQuantity for 10, ao digitar "100" na recepção, o eDoc
                  apresentará erro para a recepcionista.
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">maxAppointmentsPerTiss</td>
                <td className="tg-0pky">
                  Configuração avançada do procedimento - limita o número máximo de
                  agendamentos permitidos por guia. Configuração especialmente útil
                  para guias de fisioterapia, onde até 10 agendamentos são permitidos.
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">maxParallelPatients</td>
                <td className="tg-0pky">
                  Configuração avançada do procedimento - permite mudar o número de
                  pacientes em paralelo atendidos por um profissional. Útil em sessões
                  de fisioterapia, onde um profissional pode atender até 4 pacientes
                  em paralelo por horário.
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">maxParallelPatientsPerTuss</td>
                <td className="tg-0pky">
                  Configuração avançada do procedimento - permite colocar um máximo de
                  pacientes em paralelo por diferentes TUSS. Fisioterapia também é um
                  caso de uso, onde o profissional pode atender até 4 pacientes em
                  paralelo para determinado tratamento por ter 4 macas, mas apenas 2
                  pacientes em paralelo para outro procedimento que necessite de
                  manipulação direta.
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">appointmentForAllMedicalTeam</td>
                <td className="tg-0pky">
                  Configuração avançada de agenda - permite que qualquer pessoa no
                  time médico receba um paciente, tendo sua alocação feita apenas na
                  hora da recepção.
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">requireAuthorization</td>
                <td className="tg-0lax">Obriga código de autorização na recepção</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tussTable</td>
                <td className="tg-0lax">
                  Tabela do procedimento TUSS, de acordo com o padrão TISS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tissAppointmentType</td>
                <td className="tg-0lax">
                  TIpo de atendimento de acordo com o padrão TISS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">priceFromProcedure</td>
                <td className="tg-0lax">
                  Funcionalidade para abrir exceções de preço - ao invés de calcular o
                  preço a partir do contrato, calcula a partir do registrado no
                  procedimento.
                </td>
                <td className="tg-0lax">
                  Funcionalidade legada que não deve ser utilizada
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>




    
    </PageContent>
  );
}
