import { PageContent } from "../../components/PageContent";

export default function SessionRecordRegisters() {
  return (
    <PageContent>
      <h1>sessionrecordregisters</h1>

      <p>
       Coleção com os documentos criados dentro de um porntuário eletrônico. Também usada pelo validador de certificados, no caso do documento ser um atestado.
      </p>
      <p>Cada objeto é um documento de um prontuário - por exemplo, para o mesmo atendimento, poderá haver um documento de evolução, um de prescrição e um de CID.</p>
      <p>Para ver todos os documentos gerados para um atendimento, basta buscar pela chave única do atendimento na key ,<b>appointment</b></p>
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
                  <td className="tg-0pky">professional</td>
                  <td className="tg-0pky">
                    _id do profissional que realizou o atendimento - ver collection{" "}
                    <span style={{ fontWeight: "bold" }}>users</span>
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">patient</td>
                  <td className="tg-0pky">
                    _id do paciente que foi atendido - ver collection{" "}
                    <span style={{ fontWeight: "bold" }}>users</span>
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">appointment</td>
                  <td className="tg-0pky">
                    _id do agendamento - ver collectiono{" "}
                    <span style={{ fontWeight: "bold" }}>appointments</span>
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">professionalInstance</td>
                  <td className="tg-0pky">
                    _id da instância do profissional que emitiu este documento na
                    unidade atendida - ver collection{" "}
                    <span style={{ fontWeight: "bold" }}>professionalinstances</span>
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0lax">name</td>
                  <td className="tg-0lax">Nome / Título do documento do prontuário</td>
                  <td className="tg-0lax" />
                </tr>
                <tr>
                  <td className="tg-0lax">documentId</td>
                  <td className="tg-0lax">Identificador curto do documento</td>
                  <td className="tg-0lax">
                    Gerado para validação externa via serviço e validador de atestados.
                    Esse identificador tem como único objetivo ser curto para facilitar
                    a entrada de dados por quem for validar um documento.
                  </td>
                </tr>
                <tr>
                  <td className="tg-0lax">type</td>
                  <td className="tg-0lax">Tipo de documento do prontuário</td>
                  <td className="tg-0lax">
                    * fit_note
                    <br />* progress
                    <br />* prescription
                    <br />* note
                    <br />* upload
                    <br />* medical_report
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>

    </PageContent>
  );
}