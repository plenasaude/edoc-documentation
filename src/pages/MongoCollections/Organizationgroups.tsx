import { PageContent } from "../../components/PageContent";

export default function Organizationgroups() {
  return (
    <PageContent>
      <h1>organizationgroups</h1>

      <p>
        Coleção com todos os grupos de unidades. Essa entidade é importante para registros que são únicos dentro de um mesmo grupo (ex: Hospital Previna) independente da unidade.
      </p>
      <p>Os principais registros deste tipo são operadoras, profissionais de saúde, pacientes e documentos de atendimento de pacientes.</p>
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
                <td className="tg-0pky">Nome do grupo - ex: Previna</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">admin</td>
                <td className="tg-0pky">
                  Array com identificador único dos usuários que são administradores
                  do grupo de unidade. Cada _id do array identifica um usuário na
                  collection <span style={{ fontWeight: "bold" }}>users</span>
                </td>
                <td className="tg-0pky">
                  Administradores têm poder de edição de operadoras e contratos de
                  faturamento
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">members</td>
                <td className="tg-0pky">
                  Array com identificador único das unidades que compõem o grupo. Cada
                  _id do array identifica uma unidade na collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span>
                </td>
                <td className="tg-0pky">
                  Ao adicionar uma unidade na collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizations</span> é
                  necessário adicionar seu _id neste array para que a mesma seja
                  reconhecida como parte do mesmo grupo
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">isActive</td>
                <td className="tg-0pky">
                  Booleano que identifica se o grupo está ativo
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">logo</td>
                <td className="tg-0pky">
                  Endereço da imagem com o logo do grupo no S3
                </td>
                <td className="tg-0pky">
                  Ver sessões de documentação sobre como trocar imagens
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">professionalValidation</td>
                <td className="tg-0pky">
                  Configura se um grupo vai utilizar o processo de validação do
                  registro de um profissional ao corpo clínico. Se a propriedade{" "}
                  <span style={{ fontWeight: "bold" }}>use </span>for igual a{" "}
                  <span style={{ fontWeight: "bold" }}>true </span>a funcionalidade
                  será utilizada para todos os registros.
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">professionalDocuments</td>
                <td className="tg-0lax">
                  Configura os documentos de identidade necessários para o cadastro de
                  um profissional de saúde no grupo. É um array de objetos com as
                  seguintes informações:
                  <br />
                  <span style={{ fontWeight: "bold" }}>required </span>-&gt; configura
                  se será obrigatório o upload do documento no cadastro
                  <br />
                  <span style={{ fontWeight: "bold" }}>name </span>-&gt; nome do
                  documento
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">canContactPatients</td>
                <td className="tg-0lax">
                  Booleana que configura se organizações do grupo podem enviar
                  mensagens diretamente para pacientes. Se setada como false, as
                  funcionalidades de envio serão desabilitadas
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
