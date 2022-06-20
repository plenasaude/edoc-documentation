import { PageContent } from "../../components/PageContent";

export default function Users() {
  return (
    <PageContent>
      <h1>users</h1>

      <p>Coleção onde são guardadas as informações e cadastro dos usuários.</p>
      <p>Todos os perfis são armazenados nesta collection - tanto de pacientes, quanto de profissionais, recepcionistas e trabalhadores administrativos</p>
      
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
                <td className="tg-0pky">Nome do usuário</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">nameLatinise</td>
                <td className="tg-0lax">
                  Nome latinisado (sem acentos e cedilha) do usuário
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">cpf</td>
                <td className="tg-0lax">CPF do usuário</td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isDependent</td>
                <td className="tg-0lax">
                  Booleano se usuário é dependente de outra pessoa ou não
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">bithdate</td>
                <td className="tg-0lax">
                  Data de nascimento do usuário - em Unix Timestamp
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">group</td>
                <td className="tg-0lax">
                  Grupo de unidades que têm acesso ao cadastro deste usuário - ver
                  collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">emailVerified</td>
                <td className="tg-0lax">
                  Booleana que mostra se email do usuários foi verificado como
                  verdadeiro ou não
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">canSendEmail</td>
                <td className="tg-0lax">
                  Booleana que indica se podemos enviar emails para o usuário
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isValid</td>
                <td className="tg-0lax">
                  Booleana que identifica que identidade do usuário foi verificada
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isLocal</td>
                <td className="tg-0lax">
                  Indica se usuário tem registro mostrado apenas para o seu grupo de
                  unidades ou se tem um perfil global no app mobile do sistema
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">lastUpdatedAt</td>
                <td className="tg-0lax">
                  Data e hora da última vez que o perfil do usuário foi editado
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">createdAt</td>
                <td className="tg-0lax">
                  Data e hora que o perfil do usuário foi criado
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">isActive</td>
                <td className="tg-0lax">
                  Booleano que indica se perfil do usuário está válido
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">__t</td>
                <td className="tg-0lax">
                  Se inexistente ou vazio, indica perfil de um paciente. Se igual a
                  "Professional", indica que perfil também é de um profissional de
                  saúde que atende no sistema
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">labels</td>
                <td className="tg-0lax">
                  Array que marca diferentes tipos para um perfil de usuário, como
                  "Patient" e "Professional"
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">documents</td>
                <td className="tg-0lax">
                  Array que guarda informações de documentos pessoais do paciente,
                  como RG
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">familyHistory</td>
                <td className="tg-0lax">
                  Array reservado para guardar informações de histórico familiar do
                  paciente.{" "}
                </td>
                <td className="tg-0lax">Não utilizado no sistema</td>
              </tr>
              <tr>
                <td className="tg-0lax">healthProfile</td>
                <td className="tg-0lax">
                  Array reservado para guardar informações de perfil de saúde do
                  paciente.{" "}
                </td>
                <td className="tg-0lax">Não utilizado no sistema</td>
              </tr>
              <tr>
                <td className="tg-0lax">insurance</td>
                <td className="tg-0lax">
                  Array com informações de planos de saúde dos usuário
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">filiation</td>
                <td className="tg-0lax">
                  Array com informações dos genitores do usuário
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">phones</td>
                <td className="tg-0lax">
                  Array com informações dos números de telefone do usuário
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">enrolledFaces</td>
                <td className="tg-0lax">
                  Array com informações de reconhecimento facial do usuário
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">pushNotification</td>
                <td className="tg-0lax">
                  Array com chaves para envio de notificações push para o usuário
                </td>
                <td className="tg-0lax">
                  App Mobile da&nbsp;&nbsp;eDoc. Não faz parte do pacote entregue para
                  a Plena Saúde.
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">validation</td>
                <td className="tg-0lax">
                  Array com informações de tentativas de validação da identidade do
                  usuário
                </td>
                <td className="tg-0lax">
                  App Mobile da eDoc. Não faz parte do pacote entregue para a Plena
                  Saúde
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">authId</td>
                <td className="tg-0lax">
                  Array com informações dos identificadores de acesso deste usuário no
                  serviço de autenticação à plataforma no Auth0
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">updatedAt</td>
                <td className="tg-0lax">
                  Array com informações de todas as modificações feitas no perfil do
                  usuário, por usuário
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