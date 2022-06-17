import { PageContent } from "../../components/PageContent";

export default function Tissdatas() {
  return (
    <PageContent>
      <h1>tissdatas</h1>

      <p>
        Coleção onde são guardadas informações das guias tiss criadas no sistema
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
                <td className="tg-0pky">tissId</td>
                <td className="tg-0pky">
                  Identificador único da guia no padrão da ANS
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">accidentIndication</td>
                <td className="tg-0lax">Indicação de acidente para a guia SP/SADT</td>
                <td className="tg-0lax">
                  Sempre recebe o valor 9, pois eDoc não atua em emergências
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">appointment</td>
                <td className="tg-0lax">
                  Array com informações dos agendamentos que estão sendo faturados
                  nesta guia - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>appointments</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">authorizations</td>
                <td className="tg-0lax">
                  Array com informações das senhas de autorização que estão associadas
                  à esta guia - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>tisspasswords</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">billingStatus</td>
                <td className="tg-0lax">
                  Status de cobrança em que esta guia se encontra
                </td>
                <td className="tg-0lax">
                  São eles:
                  <br /> - billing (em cobrança)
                  <br /> - canceled (guia cancelada)
                  <br /> - charged (cobrada)
                  <br /> - noshow (guia emitida, mas paciente não foi)
                  <br /> - payed (guia paga)
                  <br /> - pending (guia pendente de envio pela recepção)
                  <br /> - received (guia recebida pelo faturamento)
                  <br /> - returned (guia retornada pelo faturamento)
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">billingType</td>
                <td className="tg-0lax">Tipo de cobrança - tiss ou particular</td>
                <td className="tg-0lax">
                  - private
                  <br />- tiss
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">createdAt</td>
                <td className="tg-0lax">
                  Data e hora de criação da guia - em Unix Timestamp
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0pky">creator</td>
                <td className="tg-0pky">
                  _id do usuário que criou a guia - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">executingOrganization</td>
                <td className="tg-0pky">
                  Dados da unidade que executou o procedimento da guia - ver
                  collection <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">group</td>
                <td className="tg-0pky">
                  Grupo de unidades do qual o atendimento faz parte - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">isActive</td>
                <td className="tg-0lax">
                  Booleana que mostra se a guia está ativa ou não
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isNewBorn</td>
                <td className="tg-0lax">
                  Booleana que mostra se atendimento foi para recém-nascido ou não
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isPaperless</td>
                <td className="tg-0lax">
                  Booleana que mostra se a guia foi emitida sem papel, tendo passado
                  por reconhecimento facial
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isReturn</td>
                <td className="tg-0lax">
                  Booleana que mostra se é uma guia de retorno, sem valor de
                  faturamento, ou não
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">operator</td>
                <td className="tg-0lax">
                  Objeto com informações da operadora de saúde para o qual a guia será
                  faturada - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>operators</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">patient</td>
                <td className="tg-0lax">
                  _id do paciente atendido nesta guia - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">price</td>
                <td className="tg-0lax">
                  Objeto com informações dos preços cobrados na guia
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">request</td>
                <td className="tg-0lax">Objeto com informações do pedido médico.</td>
                <td className="tg-0lax">
                  Informação de data do pedido está em Unix Timestamp
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">requestingOrganization</td>
                <td className="tg-0lax">
                  Informações sobre organização que fez o pedido médico para esta guia
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">requestingProfessional</td>
                <td className="tg-0lax">
                  Informações sobre o profissional que fez o pedido médico para esta
                  guia
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tissAppointmentTipe</td>
                <td className="tg-0lax">
                  Código do tipo de agendamento, de acordo com o padrão da TISS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tissDate</td>
                <td className="tg-0lax">
                  Objeto com informações de data e hora de começo e fim do
                  atendimento, em Unix Timestamp
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tissQuantity</td>
                <td className="tg-0lax">
                  Quantidade de procedimentos realizados, de acordo com o padrão TISS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tissType</td>
                <td className="tg-0lax">
                  Nome do tipo de atendimento, de acordo com o padrão TISS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tissVersion</td>
                <td className="tg-0lax">
                  Versão da TISS, que modelará como o XML será montado para envio para
                  a operadora
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tuss</td>
                <td className="tg-0lax">
                  Código TUSS do procedimento, de acordo com o padrão TISS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tussId</td>
                <td className="tg-0lax">
                  _id do TUSS - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>tusses</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tussName</td>
                <td className="tg-0lax">
                  Replica do nome do procedimento TUSS, de acordo com a collection{" "}
                  <span style={{ fontWeight: "bold" }}>tusses</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tussTable</td>
                <td className="tg-0lax">
                  Código da tabela TUSS utilizada, de acordo com o padrão TISS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">updates</td>
                <td className="tg-0lax">
                  Array com cada modificação feita na guia, por usuário.
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