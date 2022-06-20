import { PageContent } from "../../components/PageContent";

export default function Webschedullerconfigs() {
  return (
    <PageContent>
      <h1>webschedullerconfigs</h1>

      <p>Coleção onde são configuradas as opções para agendamento web</p>
      
      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-j1i3{border-color:inherit;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;vertical-align:top;\n  will-change:transform}\n.tg .tg-dncm{border-color:inherit;font-weight:bold;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;\n  vertical-align:top;will-change:transform}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
          }}
        />
        <div className="tg-wrap">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-dncm">Campo</th>
                <th className="tg-dncm">Descrição</th>
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
                <td className="tg-0pky">createdAt</td>
                <td className="tg-0pky">
                  Data e hora de criação - em Unix Timestamp
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">isActive</td>
                <td className="tg-0pky">
                  Booleana que mostra se configuração está ativa ou não
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">name</td>
                <td className="tg-0pky">Nome do objeto de configuração</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">logo</td>
                <td className="tg-0pky">
                  Endereço da logo que aparece na configuração
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">group</td>
                <td className="tg-0pky">
                  _id do grupo ao qual a unidade pertence - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">text</td>
                <td className="tg-0pky">
                  Texto mostrado no topo da página de agendamento web
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">opertators</td>
                <td className="tg-0pky">
                  Array com as operadoras de saúde permitidas para o agendamento web
                </td>
                <td className="tg-0pky">
                  Cada elemento do array contém um objeto com:
                  <br /> - name: nome da operadora que aparecerá no site
                  <br /> - _id da operadora - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>operators</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>


      

    </PageContent>
  );
}