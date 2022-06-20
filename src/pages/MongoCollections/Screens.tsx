import { PageContent } from "../../components/PageContent";

export default function Rooms() {
  return (
    <PageContent>
      <h1>rooms</h1>

      <p>
        Coleção onde são regsitradas todas as telas de tv e totens utilizados pelo chamador de filas
      </p>
      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-j1i3{border-color:inherit;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;vertical-align:top;\n  will-change:transform}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
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
                <td className="tg-0pky">type</td>
                <td className="tg-0pky">Tipo da tela - pode ser tv ou totem</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">name</td>
                <td className="tg-0pky">
                  Nome, por extenso, da tela - serve para identificação interna. Por
                  exemplo: tv recepcao ferraz
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">code</td>
                <td className="tg-0pky">
                  Código que identifica essa tela para login - uma boa convenção é
                  usar o nome da tela sem nenum espaço. Por exemplo: tvrecepcaoferraz{" "}
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">queues</td>
                <td className="tg-0pky">
                  _id do grupo de unidades que essa unidade faz parte - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>lines</span>
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