import { PageContent } from "../../components/PageContent";

export default function Smssents() {
  return (
    <PageContent>
      <h1>smssents</h1>

      <p>
        Coleção onde são guardados todos os sms enviados pelos serviços de SMS utilizados no sistema
      </p>
      
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
                <td className="tg-0pky">source</td>
                <td className="tg-0pky">
                  Fluxo fonte de onde o sms foi enviado. Por exemplo, um sms que envia
                  o pin de confirmação de agendamento web terá esse campo como
                  "pinConfirmation"
                </td>
                <td className="tg-0pky">
                  Os campos são:
                  <br />- appointmentCancellationAction
                  <br />- appointmentConfirmationAction
                  <br />- cancellationNotification
                  <br />- confirmWebSchedule
                  <br />- pinConfirmation
                  <br />- smsJob
                  <br />- unexpectedAction
                  <br />- unknownAction
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">organization</td>
                <td className="tg-0pky">
                  _id da unidade sobre o qual o agendamento foi feito - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organization</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">group</td>
                <td className="tg-0pky">
                  _id do grupo de unidades da qual essa unidade faz parte - ver
                  collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">messageId</td>
                <td className="tg-0pky">
                  Identificador único da mensagem no serviço terceiro de envio de sms
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">smsCount</td>
                <td className="tg-0lax">
                  Número de SMS enviados para envio completo da mensagem
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">text</td>
                <td className="tg-0lax">Texto enviado na mensagem</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">receiver</td>
                <td className="tg-0lax">Número de telefone que recebeu a mensagem</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">provider</td>
                <td className="tg-0lax">
                  Nome da empresa fornecedora daquele SMS enviado
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">sentAt</td>
                <td className="tg-0lax">
                  Data e hora de envio da mensagem - em Unix Timestamp
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