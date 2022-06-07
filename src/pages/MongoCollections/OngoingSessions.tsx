import { PageContent } from "../../components/PageContent";

export default function OngoingSessions() {
  return (
    <PageContent>
      <h1>ongoingsessions</h1>

      <p>
        Coleção com as sessões de atendimento médico que estão em aberto neste momento.
      </p>
      <p>Caso haja alguma falha de rede impedindo que um atendimento seja fechado por um médico, basta deletar o documento da sessão específica para que o profissional possa ir para o próximo atendimento.</p>

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
                <td className="tg-0pky">documents</td>
                <td className="tg-0pky">
                  Prévia dos documentos salvos na sessão de atendimento médico,
                  garantido que mesmo sem finalizar um atendimento um profissional não
                  perca do andamento de sua sessão
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">appointment</td>
                <td className="tg-0pky">
                  _id do agendamento correspondente a essa sessão - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>appointments</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">profissional</td>
                <td className="tg-0pky">
                  _id do profissional que está realizando o atendimento - ver
                  collection <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">patient</td>
                <td className="tg-0lax">
                  _id do paciente sendo atendido nesta sessão - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">previousStatus</td>
                <td className="tg-0lax">status anterior do agendamento</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">createdAt</td>
                <td className="tg-0lax">
                  Data e hora que o documento foi criado em Unix Timestamp
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
