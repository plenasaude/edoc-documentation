import { PageContent } from "../../components/PageContent";

export default function Tisslots() {
  return (
    <PageContent>
      <h1>tisslots</h1>

      <p>
        Coleção onde são guardadas informações dos lotes TISS enviados para as operadoras
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
                <td className="tg-0pky">creator</td>
                <td className="tg-0pky">
                  _id do usuário que criou a guia - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">organization</td>
                <td className="tg-0lax">
                  _id da unidade para o qual o lote está sendo criado - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">group</td>
                <td className="tg-0lax">
                  _id do grupo de organizações para o qual esta unidade faz parte -
                  ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tissVersion</td>
                <td className="tg-0lax">
                  Versão da TISS para o qual este lote será criado
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">totalValue</td>
                <td className="tg-0lax">Valor total que será cobrado no lote</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">code</td>
                <td className="tg-0lax">
                  Identificador único do lote, de acordo com o padrão TISS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">needToBeSaved</td>
                <td className="tg-0lax">
                  Booleano que indica se há alterações não salvas no lote
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0pky">updates</td>
                <td className="tg-0pky">
                  Array com cada alteração feita em um lote, por usuário
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">url</td>
                <td className="tg-0pky">
                  Informações de onde será salvo o XML do lote, quando emitido
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">period</td>
                <td className="tg-0pky">
                  Data de início e data de fim dos eventos que estão incluídos no lote
                  - em Unix Timestamp
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">operator</td>
                <td className="tg-0lax">
                  Informações da operadora de saúde para o qual este lote está sendo
                  emitido - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>operators</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">createdAt</td>
                <td className="tg-0lax">
                  Data e hora de criação do lote, em Unix Timestamp
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isActive</td>
                <td className="tg-0lax">
                  Booleana que mostra se o lote está ativo ou não
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">name</td>
                <td className="tg-0lax">
                  Nome dado ao lote pelo usuário que o criou
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">nameLatinise</td>
                <td className="tg-0lax">Nome latinizado do lote</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">comments</td>
                <td className="tg-0lax">Comentários inseridos no lote</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">invoice</td>
                <td className="tg-0lax">Número da nota fiscal do lote</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">billingStatus</td>
                <td className="tg-0lax">Status de cobrança do lote</td>
                <td className="tg-0lax">
                  São eles: <br /> - charged (cobrado)
                  <br /> - payed (pago)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>







    
    </PageContent>
  );
}