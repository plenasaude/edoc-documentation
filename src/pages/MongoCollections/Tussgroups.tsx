import { PageContent } from "../../components/PageContent";

export default function Tussgroups() {
  return (
    <PageContent>
      <h1>tussgroups</h1>

      <p>Coleção onde são guardados os groupos de procedimento para agendamento</p>
      <p>A função primária de um grupo de procedimentos é facilitar o agendamento de frentes mais difíceis. Por exemplo, ao agendar fisioterapias, há mais de 40 TUSS diferentes que podem ser realizados. Todos eles têm a mesma duração e a mesma remuneração para o profissional. Assim, faz sentido ter um grupo de procedimentos chamado "fisioterapias", que guarde estes 40 procedimentos base e limite a recepção e emissão de guias as esses procedimentos</p>
      <p>Na Plena Saúde foi feita uma excessão para que se pudesse agendar procedimentos no eDoc, sem que se faça recepção e faturamento dos mesmos. Dessa forma, os tussgroups são usados para se criar os procedimentos que serão agendados mas que não serão recepcionados e faturados</p>
      
      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-j1i3{border-color:inherit;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;vertical-align:top;\n  will-change:transform}\n.tg .tg-dncm{border-color:inherit;font-weight:bold;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;\n  vertical-align:top;will-change:transform}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
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
                <td className="tg-0pky">name</td>
                <td className="tg-0pky">Nome do grupo de procedimentos</td>
                <td className="tg-0pky">Nome criado pelo usuário</td>
              </tr>
              <tr>
                <td className="tg-0lax">nameLatinise</td>
                <td className="tg-0lax">
                  Nome latinisado (sem acentos e cedilha) do grupo de procedimentos,
                  para buscas na plataforma
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">group</td>
                <td className="tg-0lax">
                  _id do grupo de unidades em que o grupo de procedimentos faz parte -
                  ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tussUsageRule</td>
                <td className="tg-0lax">Regra de uso do grupo de tuss</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tussUsageLimits</td>
                <td className="tg-0lax">
                  Limites máximos e mínimos para uso dos procedimentos no grupo e TUSS
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">aliases</td>
                <td className="tg-0lax">
                  Array com diferentes nomes buscáveis para os procedimentos do grupo
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tusses</td>
                <td className="tg-0lax">
                  Array com informações da TUSS de cada um dos procedimentos do grupo
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