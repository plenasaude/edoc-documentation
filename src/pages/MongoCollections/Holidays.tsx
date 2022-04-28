import { PageContent } from "../../components/PageContent";

export default function Holidays() {
  return (
    <PageContent>
      <h1>holidays</h1>

      <p>
        Coleção com os feriados por unidade.
      </p>
      <p>Caso uma data esteja inserida como feriado para uma unidade, não será possível abrir agendas neste dia.</p>

      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-qsma{background-color:#efefef;border-color:inherit;font-weight:bold;position:-webkit-sticky;position:sticky;text-align:left;\n  top:-1px;vertical-align:top;will-change:transform}\n.tg .tg-j1i3{border-color:inherit;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;vertical-align:top;\n  will-change:transform}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
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
                  Identificador único da data de feriado por unidade
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">organization</td>
                <td className="tg-0pky">
                  _id da unidade para o qual este feriado é válido. Ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">name</td>
                <td className="tg-0pky">Nome do feriado - ex: Natal</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">date</td>
                <td className="tg-0pky">Data do feriado, em Unix Timestamp</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">isActive</td>
                <td className="tg-0pky">Booleana que mostra se feriado está ativo</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">createdAt</td>
                <td className="tg-0pky">
                  Data em que o registro do feriado foi criado, em Unix Timestamp
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
