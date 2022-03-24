import { PageContent } from "../../components/PageContent";
import { DownloadFile } from "../../components/DownloadFile";

import api from "../../dotFiles/apiProd?url";

export default function RunningMixed() {
  return (
    <PageContent>
      <h1>Rodando no local conectado remotamente</h1>

      <p>
        Para debugs é muito útil rodar parte do sistema local e parte do sistema
        em produção. A ideia aqui é por exemplo rodar a API e o front locais e
        todo o restante do sistema (inclusive as bases de dados) em produção.
        Fazendo isso é possível usar o seu sistema no local adicionando logs ou
        rodando um diretamente contra os sistemas de prod.
      </p>

      <p>
        Muito cuidado ao usar essa técnica, com grandes poderes vem grandes
        responsabilidades. Se você estiver rodando um sistema misto e chamar uma
        rota que por algum motivo da um drop na base em que a API está conectada
        você estará dropando a base de produção diretamente. Só use essa técnica
        em branches estáveis (geralmente na mesma deployada em produção, master)
        e só use essa técnica para achar o problema, jamais teste a solução do
        problema assim. Resolvido o seu problema teste tudo no local e depois
        deploye o seu código.
      </p>

      <p>
        Se quisermos rodar o sistema em produção e apenas a API e as plataformas
        no local, basta usarmos <DownloadFile src={api}>este .env</DownloadFile>
        no projeto da API. É necessário reinicializar o projeto caso ele já
        esteja rodando. Com isso temos uma configuração feita para que a API
        aponte para os serviços remotos ao mesmo tempo que podemos acessar a API
        local usando a nossa plataforma, também sendo rodada no local.
      </p>

      <p>
        Ou seja basta adaptar esses mesmos passos para quaisquer mix de projetos
        que você queira rodar no local ou remotamente. O único cuidado a ser
        tomado é garantir que o seu IP ou o seu usuário local tenha acesso aos
        recursos que você quer usar remotamente. Em geral para acessar a base de
        dados você precisará primeiro adicionar o seu IP em uma lista de IPs
        permitidos no MongoAtlas.
      </p>
    </PageContent>
  );
}
