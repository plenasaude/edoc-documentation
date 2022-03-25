import { PageContent } from "../../components/PageContent";
import { TODO } from "../../components/TODO";

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
      <TODO></TODO>
    </PageContent>
  );
}
