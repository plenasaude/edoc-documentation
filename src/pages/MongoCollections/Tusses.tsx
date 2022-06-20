import { PageContent } from "../../components/PageContent";

export default function Tusses() {
  return (
    <PageContent>
      <h1>tusses</h1>

      <p>
        Coleção onde são guardados os procedimentos que podem ser realizados no sistema, de acordo com a TUSS
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
                  <td className="tg-0pky">termCode</td>
                  <td className="tg-0pky">Código do TUSS</td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0lax">termName</td>
                  <td className="tg-0lax">Nome do procedimento na TUSS</td>
                  <td className="tg-0lax" />
                </tr>
                <tr>
                  <td className="tg-0lax">termNameLatinise</td>
                  <td className="tg-0lax">Nome do procedimento latinisado</td>
                  <td className="tg-0lax" />
                </tr>
                <tr>
                  <td className="tg-0lax">tradingName</td>
                  <td className="tg-0lax">
                    Nome alternativo do procedimento, se necessário subespecialização
                  </td>
                  <td className="tg-0lax" />
                </tr>
                <tr>
                  <td className="tg-0lax">tradingNameLatinise</td>
                  <td className="tg-0lax">Nome alternativo latinisado</td>
                  <td className="tg-0lax" />
                </tr>
                <tr>
                  <td className="tg-0lax">startDate</td>
                  <td className="tg-0lax">
                    Data de início do procedimento, de acordo com a TUSS
                  </td>
                  <td className="tg-0lax" />
                </tr>
                <tr>
                  <td className="tg-0lax">endDate</td>
                  <td className="tg-0lax">
                    Data de fim do procedimento, de acordo com a TUSS
                  </td>
                  <td className="tg-0lax" />
                </tr>
                <tr>
                  <td className="tg-0pky">endImplementationDate</td>
                  <td className="tg-0pky">
                    Data fim da implementação do procedimento na TUSS
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">isActive</td>
                  <td className="tg-0pky">
                    Booleana que mostra se procedimento está ativo, permitindo sua
                    seleção para faturamento nos contratos com operadora
                  </td>
                  <td className="tg-0pky" />
                </tr>
                <tr>
                  <td className="tg-0pky">isVisible</td>
                  <td className="tg-0pky">
                    Booleana que permite a visualização e inserção do procedimento em
                    grupos de procedimentos, permitindo o agendamento sem recepção de
                    exames
                  </td>
                  <td className="tg-0pky" />
                </tr>
              </tbody>
            </table>
          </div>
        </>

    </PageContent>
  );
}