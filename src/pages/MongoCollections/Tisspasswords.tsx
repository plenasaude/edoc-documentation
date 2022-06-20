import { PageContent } from "../../components/PageContent";

export default function Tisspasswords() {
  return (
    <PageContent>
      <h1>tisspasswords</h1>

      <p>
        Coleção onde são guardadas informações das senhas de autorização emitidas para as guias TISS
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
                <td className="tg-0pky">patient</td>
                <td className="tg-0pky">
                  _id do usuário tem a senha autorizada- ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">operator</td>
                <td className="tg-0lax">
                  _id da operadora de saúde que emitiu a senha - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>operators</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">issueDate</td>
                <td className="tg-0lax">
                  Data e hora de emissão da senha - em Unix Timestamp
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">expireDate</td>
                <td className="tg-0lax">
                  Data e hora de expiração da senha - em Unix Timestamp
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">tussCode</td>
                <td className="tg-0lax">
                  Código TUSS para o procedimento autorizado na senha emitida
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">updates</td>
                <td className="tg-0lax">
                  Array com alterações feitas na senha, por usuário
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">authorizesProcedures</td>
                <td className="tg-0lax">
                  Array com informações dos procedimentos autorizados - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>tusses</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0pky">authorizedSessions</td>
                <td className="tg-0pky">Número de sessões autorizadas</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">isAtive</td>
                <td className="tg-0pky">
                  Booleano que mostra se senha está ativa ou não
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">createdAt</td>
                <td className="tg-0pky">
                  Data e hora de criação da senha no sistema - em Unix Timestamp
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