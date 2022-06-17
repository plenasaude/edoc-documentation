import { PageContent } from "../../components/PageContent";

export default function Smsreceiveds() {
  return (
    <PageContent>
      <h1>smsreceiveds</h1>

      <p>
        Coleção onde são guardados todos os sms recebidos pelos serviços de SMS utilizados no sistema
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
                <td className="tg-0pky">messageId</td>
                <td className="tg-0pky">
                  Identificador único da mensagem no serviço terceiro de envio de
                  mensagens
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">sender</td>
                <td className="tg-0pky">
                  Número de telefone de quem enviou a mensagem
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">text</td>
                <td className="tg-0pky">Texto enviado na mensagem</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">appointment</td>
                <td className="tg-0pky">
                  _id do Agendamento em relação ao qual a mensagem enviada tem relação
                  - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>appointments</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">organization</td>
                <td className="tg-0lax">
                  _id da unidade do qual o agendamento faz parte - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">group</td>
                <td className="tg-0lax">
                  _id do grupo de unidades do qual o agendamento faz parte - ver
                  collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">receivedAt</td>
                <td className="tg-0lax">
                  Data e hora que a mensagem foi recebida - em Unix Timestamp
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