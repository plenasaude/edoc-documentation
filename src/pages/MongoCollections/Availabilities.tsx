import { PageContent } from "../../components/PageContent";

export default function Availabilities() {
  return (
    <PageContent>
      <h1>availabilities</h1>

      <p>
        Coleção com as agendas dos profissionais que atendem na eDoc.
        
        A agenda é a entidade que permite a criação de agendamentos. Não é possível abrir uma agenda para um procedimento que não exita (ver collection procedures).
        Como um procedure é a intessecção do que cada operadora permite realizar com o que cada contrato de repasse permite realizar, isso torna
        impossível abrir uma agenda para um atendimento que não possa ser realizado (que não é permitido pela operadora ou que não esteja acordado com o time médico)
      </p>
      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-aaoz{background-color:#efefef;font-weight:bold;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;\n  vertical-align:top;will-change:transform}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
          }}
        />
        <div className="tg-wrap">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-aaoz">Campo</th>
                <th className="tg-aaoz">Descrição</th>
                <th className="tg-aaoz">Comentários</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax">_id</td>
                <td className="tg-0lax">Identificador único do agendamento</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">procedure</td>
                <td className="tg-0lax">
                  Identificador do procedimento agendado - ver collection de{" "}
                  <span style={{ fontWeight: "bold" }}>procedures</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">organization</td>
                <td className="tg-0lax">
                  Unidade em que o agendamento foi feito - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">professional</td>
                <td className="tg-0lax">
                  Profissional que fará o atendimento - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">patient</td>
                <td className="tg-0lax">
                  Paciente do agendamento - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">creator</td>
                <td className="tg-0lax">
                  Identificador de quem criou o agendamento - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">startTime</td>
                <td className="tg-0lax">Data e hora de início em Unix Timestamp</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">endTime</td>
                <td className="tg-0lax">Data e hora de fim em Unix Timestamp</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">status</td>
                <td className="tg-0lax">
                  Status do agendamento - pode ser{" "}
                  <span style={{ fontStyle: "italic" }}>
                    booked, confirmed, waiting, screening, ongoing, fulfilled,
                    canceled e noshow
                  </span>
                </td>
                <td className="tg-0lax">
                  Ordem dos status evoluí conforme os agendamentos. <br />
                  booked = Agendado
                  <br />
                  confirmed = Paciente respondeu SMS confirmando presença
                  <br />
                  waiting = Paciente passou pela recepção e está aguardando
                  <br />
                  screening = Atendimento está na triagem
                  <br />
                  ongoing = Atendimento está acontecendo
                  <br />
                  canceled = Atendimento foi cancelado
                  <br />
                  noshow = Paciente não compareceu - marcado para todos os
                  agendamentos não completos até meia noite
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">source</td>
                <td className="tg-0lax">
                  Onde o agendamento foi criado na eDoc - pode ser{" "}
                  <span style={{ fontStyle: "italic" }}>
                    web-scheduler, scheduler e calendar
                  </span>
                </td>
                <td className="tg-0lax">
                  web-scheduler = agendamento online
                  <br />
                  scheduler = página de agendamento do call center
                  <br />
                  calendar = página de calendário usada pela recepção
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">updates</td>
                <td className="tg-0lax">
                  Array com detalhes de todas as modificações feitas em um
                  agendamento. Contém os campos:
                  <br />
                  action = descreve o tipo de ação feita
                  <br />
                  date = Data e hora que a ação foi feita em Unix timestamp
                  <br />
                  payload = dados alterados na modificação
                  <br />
                  agent = usuário que realizou a alteração
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">operator</td>
                <td className="tg-0lax">
                  Operadora de saúde do agendamento - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>operators</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">price</td>
                <td className="tg-0lax">Valor do atendimento</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tussDoc</td>
                <td className="tg-0lax">
                  Objeto com detalhes do procedimento a ser realizado baseado na
                  tabela tuss - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>tusses</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">speciality</td>
                <td className="tg-0lax">
                  Especialidade do agendamento - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>specilitiesstatics</span>
                </td>
                <td className="tg-0lax" />
              </tr>
            </tbody>
          </table>
        </div>
      </>

    </PageContent>
  );
}
