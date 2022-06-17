import { PageContent } from "../../components/PageContent";

export default function Slots() {
  return (
    <PageContent>
      <h1>Agendamento: procedimentos e horários livres</h1>

      <p>
        Nesta seção vamos abordar dois assuntos intimamente relacionados da
        eDoc: os procedimentos e os horários livres de uma agenda. No fim
        seremos capazes entender todo o fluxo de agendamento.
      </p>

      <p>
        A eDoc tem como um dos seus principais diferenciais a agenda dinâmica
        para os profissionais de saúde, permitindo que o tempo de um agendamento
        seja calculado com base em diversos fatores e na hora da busca e não
        setados previamente como na maior parte dos outros sistemas.
      </p>

      <p>
        Outro conceito usado pelo sistema e evitar erros o mais cedo possível em
        um fluxo. Ou seja, não queremos permitir nenhum agendamento se não
        soubermos de antemão como vamos fatura-lo.
      </p>

      <h2>Configurações</h2>
      <p>
        Essa flexibilidade na duração de um agendamento e na garantia de
        faturamento tem como ponto negativo a exigência de um pouco mais de
        configurações de uma agenda do que meramente o tempo de um atendimento.
      </p>
      <p>
        Vamos passar aqui rapidamente por duas entidades responsáveis por cada
        uma dessas áreas: procedimentos que permitem que uma agenda tenha
        eventos com durações distintas e os contratos que nos garantem que um
        evento agendado poderá ser faturado no dia que a consulta está sendo
        agendada.
      </p>

      <h3>Procedimentos</h3>
      <p>
        Procedimentos são uma das principais coleções da eDoc, é esta coleção
        mais os agendamentos já existentes que geram os horários disponíveis
        para agendamento de um médico. Os horários livres da agenda de um médico
        serão chamados de slots.
      </p>
      <p>Um procedimento relaciona de forma única as seguintes informações:</p>
      <ul>
        <li>usuário</li>
        <li>organização</li>
        <li>operadora (pode ser um plano de saúde ou particular)</li>
        <li>especialidade</li>
        <li>
          tuss group (representa um grupo de CBOs que podem ser agendados em
          conjunto)
        </li>
      </ul>

      <p>Esses dados são usados na hora de uma busca da eDoc.</p>

      <p>
        Depois de encontrados quais procedimentos devem ser usados para gerar a
        agenda de um profissional (pelo menos os dados de especialidade,
        operadora e tussGroups são necessário para se buscar uma agenda) usamos
        o procedimento para calcular os slots disponíveis. Para isso os
        procedimentos tem os dados da duração do procedimento e de quantos
        pacientes podem ser atendidos em paralelo para este procedimento (
        fisioterapeutas muitas vezes atendem múltiplos pacientes de uma única
        vez).
      </p>

      <p>
        Finalmente no momento do faturamento usaremos as informações como CBO,
        tussTable e tissAppointmentType para gerar uma guia TISS válida para o
        procedimento realizado.
      </p>

      <h3>Contratos</h3>
      <p>
        Os contratos participam do agendamento garantindo que nós seremos
        capazes de faturar um agendamento.
      </p>
      <p>
        Contratos estabelecem uma relação entre uma operadora de saúde (ou
        particular) e uma ou mais organizações e definem quais TUSSes são
        cobertos por estes contratos a qual preço (essas últimas infos são
        definidas na coleção de contractlines).
      </p>
      <p>
        Nós só permitiremos a criação de um procedure se existir um contrato que
        permita a sua cobrança, de forma que nem existirá uma agenda que não
        possa ser cobrada.
      </p>

      <h2>Cálculo de slots</h2>
      <p>
        Dadas as configurações acima é possível calcularmos os slots disponíveis
        que mostraremos no front.
      </p>
      <p>
        Aqui será apresentada uma versão em prosa do algorítimo, para passar o
        conceito de como calculamos os slots, para detalhes faz sentido ler o
        código diretamente.
      </p>
      <ul>
        <li>
          Dadas as informações mínimas de um TUSS ou um tussGroup, uma operadora
          e um profissional ou uma especialidade, nós conseguimos localizar
          quais procedures devem ser usados para o cálculo das agendas, perceba
          que nesta etapa podemos ter múltiplos procedures. Filtros extras podem
          ser passados, como organização e range de datas.
        </li>
        <li>
          Se não houver filtro de organizações vamos agrupar os procedures por
          organização.
        </li>
        <li>
          Caso o range de datas não tenha sido passado, vamos fazer uma busca
          para achar o primeiro slot disponível a partir da data de hoje e
          calcular as agendas para os próximos dias. (O algorítimo de achar o
          próximo horário livre, nextSlot, é uma versão reduzida deste
          algorítimo aqui, sendo que ele para assim que acha uma agenda livre ao
          invés de calcular todos os horários).
        </li>
        <li>
          Para cada procedimento e dia que queremos as agendas:
          <ul>
            <li>
              Vamos listar os agendamentos já existentes para o profissional do
              procedimento no dia em questão.
            </li>
            <li>
              Em seguida vamos pegar a duração do dia e subtrair todos os
              agendamentos já marcados deste período, levando em conta a regra
              de agendamentos paralelizáveis setada no procedure.
            </li>
            <li>
              Temos agora todos os horários livres do profissional para este dia
            </li>
            <li>
              Vamos quebrar os horários livres no maior número possível de slots
              dada a duração definida no procedure.
            </li>
            <li>
              Retornaremos estes intervalos para serem exibidos como os horários
              livres deste procedure.
            </li>
          </ul>
        </li>
        <li>
          No front agruparemos as agendas por organização e data para facilitar
          a sua visualização.
        </li>
      </ul>

      <h2>Formas de se calcular os slots</h2>
      <p>Os slots podem ser calculados de duas formas:</p>
      <ul>
        <li>Em tempo real, usando o algorítimo descrito acima</li>
        <li>Usando uma base de slots livres pré calculada</li>
      </ul>
      <p>
        Deve ser possível perceber que o algorítimo acima pode ficar pesado de
        se calcular se tivermos muitas respostas de um determinado filtro.
        Tentando resolver este problema nós desenvolvemos um serviço que mantém
        uma base de horários livres pré calculados e a atualizada conforme
        mudanças que ocorrem na base de dados.
      </p>
      <p>
        O serviço de <a href="https://github.com/plenasaude/slots">slots</a> é o
        responsável por estes cálculos de horários livres. Ele reage a eventos
        do SQS como adição ou remoção de novos agendamentos para manter a
        coleção slots atualizada.
      </p>
      <p>
        A coleção de slots (na base de dados slots e não na edoc), contem
        documentos com um slot livre continuo para os dados que podem ser
        buscados em um agendamento.
      </p>
      <p>
        Dessa forma usando esta coleção basta listá-la junta com um procedimento
        para conseguir calcular os slots, pulando toda a parte de encontrar os
        agendamentos para o cálculo do horário livre para o procedimento em
        questão.
      </p>
      <p>
        O usu de um método ou de outro é controlado pela API pelas propriedades
        de ambientes: DO_NOT_USE_SLOTS_SERVICE e DO_NOT_DISPATCH_SLOTS_SERVICE.
      </p>
    </PageContent>
  );
}
