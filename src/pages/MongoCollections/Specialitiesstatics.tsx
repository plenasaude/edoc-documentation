import { PageContent } from "../../components/PageContent";

export default function Specialitiesstatics() {
  return (
    <PageContent>
      <h1>specialitiesstatics</h1>

      <p>
        Coleção onde são guardados todos as especialidades médicas possíveis de registrar um profissional no sistema
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
                <td className="tg-0pky">name</td>
                <td className="tg-0pky">Nome da especialidade</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">nameLatinise</td>
                <td className="tg-0pky">
                  Nome latinisado da especialidade (sem acentos e cedilhas) para
                  buscas no site
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">tradingName</td>
                <td className="tg-0pky">
                  Segundo nome possível para uma mesma especialidade, quando a mesma
                  não existe na Classificação Brasileira de Ocupações.
                </td>
                <td className="tg-0pky">
                  Por exemplo, no CBO existe apenas a especialidade "Psicólogo". Se
                  quisermos diferenciar agendamento para "Psícologo Infantil" o ideal
                  é colocar essa distinção apenas neste campo, mantendo os campo
                  "name" como "psicólogo", já que este é o campo que vai ser inserido
                  nas guias TISS de faturamento.
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">tradingNameLatinise</td>
                <td className="tg-0pky">
                  Nome alternativo latinisado (sem acentos e cedilhas) para buscas no
                  site
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">cbo</td>
                <td className="tg-0lax">
                  Número de SMS enviados para envio completo da mensagem
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">createdAt</td>
                <td className="tg-0lax">
                  Data e hora de criação do registro - em Unix Timestamp
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