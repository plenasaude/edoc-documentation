import { PageContent } from "../../components/PageContent";

export default function TissXml() {
  return (
    <PageContent>
      <h1>Tiss XML</h1>

      <p>
        O tiss_xml é o projeto que gera os XMLs das guias TISS e os 
        XMLs dos lotes TISS para envio de cobrança às operadoras.
        Anualmente, a TISS lança de 1 a duas atualizações, mudando a versão
        do protocolo, sendo necessária a atualização deste projeto.
        Para ter acesso, você pode clonar o projeto no <a href="https://github.com/plenasaude/tiss_xml">Github</a>.
      </p>
      

      <h2>Atualizando a versão da TISS</h2>
      <p>
        Para atualizar a versão da TISS no tiss_xml, siga os passos 
        <a href="https://youtu.be/F6Vw-6sLXco">deste video</a> .
      </p>
    </PageContent>
  );
}
