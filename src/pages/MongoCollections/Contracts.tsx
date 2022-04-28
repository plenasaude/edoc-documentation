import { PageContent } from "../../components/PageContent";

export default function Contracts() {
  return (
    <PageContent>
      <h1>contracts</h1>

      <p>
        Coleção com contratos entre operadora e prestador.
      </p>
      <p>Podemos pensar em cada elemento dessa coleção como um contrato físico, em papel, assinado entre prestador e operadora.
        Cada contrato identifica a operadora, quais unidades fazem parte do contrato, as datas de início e fim do contrato, assim como seu método de pagamento.
        A lista de procedimentos e preços que fazem parte desse contrato são tratados como um anexo e ficam na coleção contractlines
      </p>

      <>
      <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-ul38{position:-webkit-sticky;position:sticky;text-align:left;top:-1px;vertical-align:top;will-change:transform}\n.tg .tg-aaoz{background-color:#efefef;font-weight:bold;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;\n  vertical-align:top;will-change:transform}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
          }}
        />
        <div className="tg-wrap">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-aaoz">Campo</th>
                <th className="tg-aaoz">Descrição</th>
                <th className="tg-ul38">
                  <span style={{ fontWeight: "bold" }}>Comentários</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax">_id</td>
                <td className="tg-0lax">Identificador único do contrato</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">operator</td>
                <td className="tg-0lax">
                  Identificador da operadora de saúde deste contrato - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>operators</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">organization</td>
                <td className="tg-0lax">
                  Array com todas as unidades que fazem parte deste contrato. Cada
                  item contem o identificador da unidade - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">validity</td>
                <td className="tg-0lax">
                  Objeto que identifica a validade do contrato. Contém dois campos:
                  <br />
                  start = data e hora de início do contrato em Unix Timestamp
                  <br />
                  end =&nbsp;&nbsp;data e hora de fim do contrato em Unix Timestamp
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">name</td>
                <td className="tg-0lax">Nome dado ao contrato</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">nameLatinise</td>
                <td className="tg-0lax">
                  Nome latinisado do contrato, para facilitar buscas
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isActive</td>
                <td className="tg-0lax">
                  Identifica se contrato está ativo ou não - identificador booleando
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">planGroups</td>
                <td className="tg-0lax">
                  Array com _ids de grupos de planos que fazem parte do contrato. O
                  nome do plano estará na propriedade "plans". Caso essa propriedade
                  esteja vazia, quer dizer <br />
                  que o contrato não possui nenhuma limitação de planos.
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">allowedPaymentMethods</td>
                <td className="tg-0lax">
                  Array com métodos de pagamento aceitos pelo contrato. Pode conter os
                  valores: money, check, credit, debit (para contratos particulares) e
                  tiss (para contratos de convênios)
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
