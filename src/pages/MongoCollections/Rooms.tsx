import { PageContent } from "../../components/PageContent";

export default function Rooms() {
  return (
    <PageContent>
      <h1>rooms</h1>

      <p>
        Coleção onde são guardados todos os possíveis locais físicos onde um paciente possa ser chamado pelo chamador de filas
      </p>
      <p>As principais opções utilizadas hoje são: guichê x, consultório y e sala de triagem z.</p>
      <p>Cada uma dessas estruturas pode ser organizada em árvores. O caso de uso do Hospital Previna é o de Guichês. Por exemplo, em uma unidade que use o chamador de senhas, podemos criar um "local" chamado "Guichês Primeiro Andar Taipas" e vários guichês filhos deste local, como "Recepção 1", "Recepção 2", etc.</p>
      <p>Com essa estrutura, é possível desenhar um fluxo de filas: A tela onde um paciente tira uma senha manda o paciente para o local "Guichês Primeiro Andar Taipas". A partir daí, cada recepção filho pode chamar deste local, ou seja, a "Recepção 1" só terá acesso aos pacientes esperando no "Guichês Primeiro Andar Taipas" e não em outras filas.</p>
      
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
                <td className="tg-0pky">Identificador único do objeto</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">parent</td>
                <td className="tg-0pky">
                  Se existir, aponta para um objeto na própria collection de{" "}
                  <span style={{ fontWeight: "bold" }}>rooms</span>, mostrando qual é
                  o local pai deste local. Caso não exista, este é um local sem um
                  local pai
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">organization</td>
                <td className="tg-0pky">
                  _id da unidade para a qual o procedimento é válido - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">group</td>
                <td className="tg-0pky">
                  _id do grupo de unidades que essa unidade faz parte - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">name</td>
                <td className="tg-0pky">Nome do local criado</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">nameLatinise</td>
                <td className="tg-0pky">Nomes latinisado do local criado</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">isActive</td>
                <td className="tg-0pky">
                  Mostra se local está ativo ou não para a busca de filas
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">queues</td>
                <td className="tg-0pky">
                  Array com _id das das filas das quais essa localidade faz parte - ver collection{" "}
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