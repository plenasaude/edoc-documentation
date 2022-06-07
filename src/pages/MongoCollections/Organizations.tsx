import { PageContent } from "../../components/PageContent";

export default function Organizations() {
  return (
    <PageContent>
      <h1>organizations</h1>

      <p>
        Coleção com todas as unidades de um grupo. É nesta coleção que se registram novas unidades e que alteram-se caracteríticas como nome, endereço e foto.
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
                <td className="tg-0pky">
                  Nome da Unidade -{" "}
                  <span style={{ fontWeight: "bold" }}>Ex: Dr. Previna Caieiras</span>
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">coordinates</td>
                <td className="tg-0pky">
                  Array com coordenadas geográficas para busca geolocalizada. O
                  primeiro item do array recebe a longitude, enquanto o segundo item
                  do array recebe a latitude da unidade.
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">cnes</td>
                <td className="tg-0pky">Código CNES da unidade</td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">isActive</td>
                <td className="tg-0pky">
                  Booleano que identifica se a unidade está ativa
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">address</td>
                <td className="tg-0pky">
                  Objeto com endereço da unidade quebrado em seus componentes de forma
                  estruturada. São eles:
                  <br />
                  postalcode -&gt; CEP
                  <br />
                  street -&gt; Logradouro
                  <br />
                  number -&gt; Número
                  <br />
                  neighborhood -&gt; Bairro
                  <br />
                  city -&gt; (city.name -&gt; nome da cidade ; city.code -&gt; código
                  da cidade no IBGE)
                  <br />
                  state -&gt; (state.name -&gt; sigla do estado)
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0pky">avatarMini</td>
                <td className="tg-0pky">
                  Endereço no S3 da <span style={{ fontWeight: "bold" }}>foto </span>
                  da unidade
                </td>
                <td className="tg-0pky" />
              </tr>
              <tr>
                <td className="tg-0lax">cnpj</td>
                <td className="tg-0lax">
                  Dados do registro social da unidade quebrado em seus componentes
                  estruturados. São eles:
                  <br />
                  number -&gt; número do CNPJ, sem pontos ou espaços
                  <br />
                  name -&gt; razão social
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">group</td>
                <td className="tg-0lax">
                  _id do grupo ao qual a unidade faz parte - ver collection{" "}
                  <span style={{ fontWeight: "bold" }}>organizationgroups</span>
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">logo</td>
                <td className="tg-0lax">
                  Endereço do logo da unidade no S3, inserida em documentos impressos
                  como prontuários e receituários.
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">site</td>
                <td className="tg-0lax">
                  Endereço do site da unidade, inserida em documentos impressos como
                  prontuários e receituários.
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">config</td>
                <td className="tg-0lax">
                  Configurações de recepção da unidade. São elas:
                  <br />
                  <span style={{ fontWeight: "bold" }}>useQueue</span> -&gt; booleana
                  se unidade usa chamador de filas na recepção
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    useFacialRecognition
                  </span>{" "}
                  -&gt; booleana se unidade usa reconhecimento facial de pacientes na
                  recepção
                </td>
                <td className="tg-0lax" />
              </tr>
              <tr>
                <td className="tg-0lax">emailConfig</td>
                <td className="tg-0lax">
                  Configuração da unidade sobre quando mandar email confirmando
                  presença de agendamentos. Essa configuração depende de onde o
                  agendamento é criado:
                  <br />
                  <span style={{ fontWeight: "bold" }}>scheduler </span>-&gt;
                  agendamentos criados no call center
                  <br />
                  <span style={{ fontWeight: "bold" }}>calendar </span>-&gt;
                  agendamentos criados como encaixe no calendário da recepção
                  <br />
                  <span style={{ fontWeight: "bold" }}>web-scheduler</span> -&gt;
                  agendamentos criados no agendamento web pelo paciente
                  <br />
                  <span style={{ fontWeight: "bold" }}>mobile </span>-&gt;
                  agendamentos criados no app mobile da eDoc
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
