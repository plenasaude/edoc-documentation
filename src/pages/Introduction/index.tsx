import { Link } from "react-router-dom";

import { PageContent } from "../../components/PageContent";

export default function Home() {
  return (
    <PageContent>
      <h1>Introdução</h1>

      <p>
        Essa documentação tem como objetivo capacitar um desenvolvedor a mexer
        na plataforma eDoc.
      </p>

      <p>
        É importante perceber que o intuito aqui não é ser exaustivo em relação
        a todas as possibilidades de todos os cenários, o que tentaremos fazer é
        passar conceitos de entidades, estrutura de código e infra estrutura, os
        detalhes sobre a implementação são melhor aprendidos mexendo no próprio
        código do que via texto.
      </p>

      <p>
        Também não é nosso intuito aqui realizar o treinamento sobre nenhuma das
        tecnologias de terceiros utilizadas no nosso stack, deixaremos esse
        esforço para as documentações dedicadas. Dito isso é recomendado que o
        desenvolvedores da plataforma adquiram alguma familiaridade com as
        ferramentas em questão, uma vez que só conhecendo essa base de produtos
        que se consegue ser realmente produtivo, principalmente em casos de
        debugs. É possível ver uma lista dos elementos na seção de
        <Link to="/appendix/tools">Ferramentas</Link> do apêndice, não
        garantimos que essa lista seja 100% exaustiva, mas faremos o melhor para
        que ela inclua o maio número de ferramentas possível.
      </p>

      <p>
        Finalmente, durante o processo de documentação deixaremos não só
        documentado o estado atual da aplicação como melhorias que poderiam ser
        feitas em determinados pontos. A eDoc foi desenvolvida durante alguns
        anos e por mais que tenhamos nos esforçado não conseguimos colocar todas
        as nossas ideias em prática (imagino que você também não conseguirá)!
        Mas deixaremos essa documentação cheia de dicas de melhorias.
      </p>

      <p>
        A seção de introdução dessa documentação visa transmitir o conceito do
        que é a eDoc, qual o objetivo do produto, o que é esse produto (sob a
        ótica do usuários e não de tecnologia) e quais as principais tecnologias
        que alguém precisa saber antes de começar a olhar para o código. Você
        deveria sair desta seção com uma compreensão macro sobre o produto que
        está prestes a se envolver.
      </p>
    </PageContent>
  );
}
