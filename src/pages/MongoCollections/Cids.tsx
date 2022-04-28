import { PageContent } from "../../components/PageContent";

export default function Cids() {
  return (
    <PageContent>
      <h1>cids</h1>

      <p>
        Coleção com os dados da CID-10, obrigatórios para finalização de um protuário.
      </p>
      <p>Qualquer atualização na tabela de CID-10 ou inserção de novos dados deve ser feita nessa coleção.</p>
      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-aaoz{background-color:#efefef;font-weight:bold;position:-webkit-sticky;position:sticky;text-align:left;top:-1px;\n  vertical-align:top;will-change:transform}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}"
          }}
        />
        <div className="tg-wrap">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-aaoz">Campo</th>
                <th className="tg-aaoz">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax">_id</td>
                <td className="tg-0lax">
                  Identificador único do elemento CID-10 na base
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">number</td>
                <td className="tg-0lax">Código CID-10, como "A93"</td>
              </tr>
              <tr>
                <td className="tg-0lax">name</td>
                <td className="tg-0lax">Nome do elemento na CID-10</td>
              </tr>
              <tr>
                <td className="tg-0lax">nameLatinise</td>
                <td className="tg-0lax">
                  Nome latinisado do elemento (sem acentos, pontuações e sinais
                  gráficos) para facilitar busca do usuário
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">abreviation</td>
                <td className="tg-0lax">
                  Abreviação do nome, conforme fornecido na CID-10
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">abreviationLatinise</td>
                <td className="tg-0lax">
                  Abreviação latinisada do nome, para facilitar busca do usuário
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>

    
    </PageContent>
  );
}
