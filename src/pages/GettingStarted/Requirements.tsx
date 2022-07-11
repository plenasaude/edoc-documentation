import { PageContent } from "../../components/PageContent";

export default function Requirements() {
  return (
    <PageContent>
      <h1>Requisitos</h1>

      <p>
        Antes de começar a tentar rodar a infra estrutura da eDoc é necessário
        fazermos algumas preparações. Aqui falaremos apenas dos requisitos para
        rodar o código, os requisitos para deploy serão tratados ainda nessa
        seção, mas mais adiante.
      </p>

      <h2>Acessando o código</h2>

      <p>
        Claramente a primeira coisa necessária é acesso aos projetos da eDoc.
        Todo o nosso código fica hospedado no GitHub. Você precisará ter uma
        conta na plataforma e pedir acesso ao responsável pelo GitHub, que
        deverá te adicionar ao time com acesso de leitura e escrita.
      </p>

      <p>
        O segundo paço obvio é a necessidade de um editor de texto. Sugerimos o
        uso do VSCode para possibilitar a troca de ferramentas e configurações
        disponíveis.
      </p>

      <h2>Node.js</h2>

      <p>
        Como já dissemos antes todo o código da eDoc é escrito em JavaScript,
        logo não é de se surpreender que o Node.js é necessário. Os códigos da
        eDoc já são um pouco antigos, então você precisará da versão 8.9.3 do
        Node.js para garantir o funcionamento de tudo. É totalmente possível que
        a aplicação funcione em versões mais recentes, mas ela não foi testada
        nessas situações ainda.
      </p>

      <p>
        Além de instalar o Node nós recomendamos fortemente a instalação do
        <a href="https://www.npmjs.com/package/n">n</a>. o n permite a gestão de
        versão do Node.js na sua máquina, permitindo usar versões mais antigas
        para os projetos já existentes.
      </p>

      <h2>Docker e docker-compose</h2>

      <p>
        O uso de Docker e docker composer é essencial para rodar a eDoc de forma
        prática no local.
      </p>

      <p>
        Além das ferramentas que nós já disponibilizamos é possível usar o
        Docker para aumentar a virtualização e a independência dos projetos,
        dockenizar um projeto pode ser um esforço que se paga rápido. Se esse
        caminho for escolhido eu sugiro uma olhada na extensão
        <a href="https://code.visualstudio.com/docs/remote/containers">
          Remote Container
        </a>
        do VSCode.
      </p>

      <h2>aws/eb CLI</h2>

      <p>
        O principal host da eDoc é a AWS, essa provedora fornece algumas
        ferramentas para possibilitar o trabalho com seus artefatos a partir da
        sua linha de comando. Além de uso para pequenas tarefas você precisará
        das ferramentas de linha de comando para o deploy das aplicações.
      </p>

      <p>
        A ferramenta mais utilizada será a{" "}
        <a href="https://docs.aws.amazon.com/pt_br/elasticbeanstalk/latest/dg/eb-cli3-install.html">
          eb CLI
        </a>{" "}
        uma vez que a maior parte dos nossos projetos são deployados no
        ElasticBeanstalk.
      </p>

      <p>
        Outra ferramenta importante para a gestão da nuvem da AWS a partir do
        local é a <a href="https://aws.amazon.com/pt/cli/">aws CLI</a>, essa
        sendo mais genérica que a primeira.
      </p>

      <h2>Usuário no auth0</h2>
      <p>
        O login da eDoc sempre usa o auth0 como provedor, mesmo para o
        desenvolvimento local. Ou seja, é possível desenvolver localmente, mas
        não offline.
      </p>

      <p>
        O auth0 funciona com o conceito de 'tenants', que são diferentes perfies
        que você pode criar dentro de uma conta. Atualmente a eDoc usa 3
        tenants:
      </p>
      <ol>
        <li>
          edocauth: o ambiente de produção do auth0. Aqui estão os dados de
          login dos usuário reais da plataforma. Sempre evite modificar dados
          manualmente nesta base de dados, uma vez que isso pode afetar o
          comportamento da plataforma para este usuário.
        </li>
        <li>edocauth-approval: ambiente para testes e QA</li>
        <li>
          edocauth-dev: ambiente para uso de desenvolvimento, em geral quando
          rodamos o sistema no local vamos querer logar neste tenant. Aqui você
          pode ter mais liberdade de mexer manualmente, dado que é um ambiente
          para desenvolvimento. Como temos este único ambiente para todos os
          desenvolvedores, só tome o cuidado para não quebrar o testes dos
          outros.
        </li>
      </ol>

      <p>
        Um usuário da base de dados eDoc é ligado ao auth0 a partir da chave
        'authId', que é um array, permitindo um único user ter múltiplos logins
        distintos.
      </p>

      <p>
        Ao fazer um login no auth0 nós teremos um JWT, a API vai descompactar os
        dados deste JWT e tentar achar um usuário na base que contenha o ID do
        JWT no campo authId da coleção de users no mongo.
      </p>
    </PageContent>
  );
}
