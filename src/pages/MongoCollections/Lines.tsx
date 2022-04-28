import { PageContent } from "../../components/PageContent";

export default function Lines() {
  return (
    <PageContent>
      <h1>lines</h1>

      <p>
        Coleção com as filas que serão utilizadas por um chamador de senhas.
      </p>
      <p>Cada fila deve ser pensada como uma recepção ou como um andar, onde um médico chama pacientes apenas de uma fila e onde televisões mostram chamadas apenas de uma fila. Cada undiade pode ter quantas filas quiser.</p>
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
                <td className="tg-0pky">_id</td>
                <td className="tg-0pky">Identificador único da fila</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">name</td>
                <td className="tg-0pky">
                  Nome unico da fila, sem espaços e sem acentos
                </td>
                <td className="tg-0pky">
                  Será usado como chave em outra configuração
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">placeholderName</td>
                <td className="tg-0pky">Nome formatado da fila</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">organization</td>
                <td className="tg-0pky">
                  _id da unidade para a qual a fila pertence - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
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
