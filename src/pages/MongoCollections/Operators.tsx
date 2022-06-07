import { PageContent } from "../../components/PageContent";

export default function Operators() {
  return (
    <PageContent>
      <h1>operators</h1>

      <p>
        Coleção com as operadoras de saúde cadastradas para atendimento.
      </p>
      <p>Edições nesta coleção são feitas diretamente através das telas de edição de contratos.</p>
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
                    _id do grupo de unidades onde a operadora pode ser utilizada (ex:
                    Hospital Previna) - ver collection{" "}
                    <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">code</td>
                  <td className="tg-0pky">
                    Código ANS da operadora que será inserido em guias de faturamento
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">isActive</td>
                  <td className="tg-0pky">
                    Booleano que identifica se a operadora está ativa ou não
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">createdAt</td>
                  <td className="tg-0pky">
                    Data e hora da criação do registro, em unix timestamp
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">name</td>
                  <td className="tg-0pky">Nome da operadora</td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">nameLatinise</td>
                  <td className="tg-0pky">
                    Nome da operadora sem caracteres latinos (para buscas sem acentos)
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0lax">tradingName</td>
                  <td className="tg-0lax">
                    Nome fictício da operadora, apenas para uso interno da operação
                  </td>
                  <td className="tg-0lax" />
                </tr>
                <tr>
                  <td className="tg-0lax">tradingNameLatinise</td>
                  <td className="tg-0lax">
                    Nome fictício da operadora sem caracteres latinos (para buscas sem
                    acentos)
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
