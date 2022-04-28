import { PageContent } from "../../components/PageContent";

export default function ContractLines() {
  return (
    <PageContent>
      <h1>contractlines</h1>

      <p>
        Coleção com cada um dos procedimentos contratados por contrato, suas condições, preços e configurações tiss.
      </p>
      <p>Também usada pelo validador de certificados.</p>

      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-qsma{background-color:#efefef;border-color:inherit;font-weight:bold;position:-webkit-sticky;position:sticky;text-align:left;\n  top:-1px;vertical-align:top;will-change:transform}\n.tg .tg-j1i3{border-color:inherit;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;vertical-align:top;\n  will-change:transform}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
          }}
        />
        <div className="tg-wrap">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-qsma">Campo</th>
                <th className="tg-qsma">Descrição</th>
                <th className="tg-j1i3">
                  <span style={{ fontWeight: "bold" }}>Comentários</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0pky">_id</td>
                <td className="tg-0pky">
                  Identificador único de cada linha de contrato
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">contract</td>
                <td className="tg-0pky">
                  _id do contrato ao qual este procedimento faz parte. Ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>contracts</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">operator</td>
                <td className="tg-0pky">
                  _id da operadora sabre a qual faz parte esta linha de contrato - Ver
                  collection <span style={{ fontWeight: "bold" }}>operators</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">tussId</td>
                <td className="tg-0pky">
                  _id do código TUSS deste procedimento. Ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>tusses</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">return</td>
                <td className="tg-0pky">
                  Configuração de dias de retorno para zerar valor de cobrança para
                  este procedimento
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">maxTissQuantity</td>
                <td className="tg-0pky">
                  Maior quantidade deste procedimento que pode ser adicionado em uma
                  guia TISS.
                  <br />
                  Campo utilizado para evitar erros de digitação quando a recepção
                  precisa adicionar essa informação. Por exemplo, ao invés de digitar
                  10 sessões de fisioterapia
                  <br />a recepcionista digitar 100, este campo limita o número máximo
                  de sessões permitidas.
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">maxSessionsPerTiss</td>
                <td className="tg-0pky">
                  Máximo do total de sessões que pode ser adicionado por tiss
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">totalPrice</td>
                <td className="tg-0pky">
                  Preço total calculado para este procedimento
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">isActive</td>
                <td className="tg-0pky">Mostra se procedimento está ativo ou não</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">proceduresPrice</td>
                <td className="tg-0pky">
                  Objeto com cada uma das configurações individuais da TISS para este
                  procedimento
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">tiss</td>
                <td className="tg-0lax">
                  Objeto com os dados da TUSS do procedimento
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">specialitiesList</td>
                <td className="tg-0lax">
                  Lista de especialidades permitidas (ou não permitidas) para este
                  procedimento específico
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
