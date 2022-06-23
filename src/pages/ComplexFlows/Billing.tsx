import { PageContent } from "../../components/PageContent";

export default function Billing() {
  return (
    <PageContent>
      <h1>Fluxo do faturamento da eDoc</h1>

      <p>
        O fluxo de faturamento passa por diversas partes do código da eDoc. Ele
        se inicia na configuração do contrato com a operadora é finalizado na
        confecção dos lotes de faturamento.
      </p>

      <p>
        É importante lembrar que na eDoc tratamos consultas particulares da
        mesma forma que uma operadora de saúde, a diferença são definições
        dentro do contrato, como meio de pagamento, que para um convênio será
        TISS e para particular dinheiro.
      </p>

      <p>
        Como todo agendamento depende da escolha de um procedimento e os
        procedimentos estão sempre relacionados à um contrato, depois do
        agendamento nós tentamos garantir que aquela consulta será cobrada.
      </p>

      <p>
        Na recepção fazemos as validações do paciente para evitar fraudes:
        conferência dos dados pelo pessoal da recepção e reconhecimento facial.
        Finalmente se a integração com o convênio estiver habilitada, fazemos
        uma chamada para autorização com os dados do registro do convênio do
        paciente para a operadora de saúde. Idealmente ao fim deste processo
        temos certeza não só de que temos os dados para a geração da guia de
        cobrança como também que esta cobrança será devidamente paga pela
        operadora.
      </p>

      <p>
        Em um momento do futuro é possível que pessoas com autorização de
        faturamento gerem os lotes XML da TISS usando a plataforma para
        enviá-los para a operadora. Se o faturamento paperless não estiver
        habilitado para esta operadora esse envio deve ser acompanhado com o
        despacho das guias equivalentes impressas.
      </p>
    </PageContent>
  );
}
