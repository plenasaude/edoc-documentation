import { PageContent } from "../../components/PageContent";
import { Diagram } from "../../components/Diagram";

import queues from "./queues.mmd?raw";

export default function Queues() {
  return (
    <PageContent>
      <h1>Filas de espera</h1>

      <p>
        Primeiramente, é importante saber que toda a lógica de filas é
        gerenciada pelo código do projeto lines_server. Outros serviços ou
        clientes que pretendam usar filas devem fazer chamados para este via
        HTTP.
      </p>

      <h2>Elementos</h2>
      <p>As filas tem 3 principais elementos</p>

      <h3>Filas</h3>
      <p>
        A entidade filas representam uma fila FIFO. Cada fila é representada por
        um documento na coleção line.
      </p>
      <p>Uma fila tem um nome e um nome usado nos displays que a consumirem.</p>
      <p>As filas serão usadas na criação de tickets.</p>

      <h3>Tickets</h3>
      <p>
        Um ticket é uma entrada em uma fila. Um ticket sempre pertence a uma
        única fila. Os tickets se comportam de forma FIFO. Cada ticket é um
        documento na coleção tickets.
      </p>
      <p>
        Os tickets tem um identificador legível para ser usado nos chamadores de
        senhas, assim como a relação com a fila a qual eles pertencem.
      </p>

      <h3>Screens</h3>
      <p>
        Screens são os clientes dedicados aos sistemas de filas. Cada screen é
        um documento na coleção screens. Uma screen representa em geral um
        aparelho físico presente em uma unidade de saúde.
      </p>
      <p>Existem 2 tipos de screens:</p>
      <ul>
        <li>tv</li>
        <li>totem</li>
      </ul>
      <p>
        Totens são os aparelhos que adicionam um ticket à uma fila. Os totens
        são usados por pacientes que chegam à uma unidade de saúde para que eles
        entrem em uma fila para serem chamados para a recepção.
      </p>
      <p>
        Tvs são os aparelhos que vão mostrar qual o último ticket foi chamada.
      </p>

      <h2>Fluxo:</h2>
      <Diagram>{queues}</Diagram>
    </PageContent>
  );
}
