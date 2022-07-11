import { PageContent } from "../../components/PageContent";

export default function Contracts() {
  return (
    <PageContent>
      <h1>Gestão de contratos com operadoras</h1>
      <p>
        Nesta sessão apresentaremos a gestão de contatos entre com operadoras
        de saúde.
        Os contratos é onde tudo se inicia no sistema, registrando, para 
        cada operadora, quais procedimentos podem ser realizados e
        qual será o valor pago por ele.
      </p>
      <p>
        <code> 
          <b>Atenção: </b>Procedimentos pagos em dinheiro também
          são registrados no sistema como uma operadora. Por exemplo, existe
          a operadora "Particular", onde são registrados os procedimentos e 
          preços particulares cobrados pelo Hospital Previna. 
        </code>
      </p>

      <h2>1. Visão Geral</h2>
      <p>
        A tela de gestão de contratos é acessada pelo menu lateral da do 
        sistema, na aba de "Cofnigurações". Apenas usuários com o nível de 
        autorização correto conseguirão ver essa opção no menu lateral.
      </p>
      <p>
        <code> 
          <b>Atenção:</b> Não é recomendado autorizar muitas pessoas
          na tela de contratos, já que edições incorretas causarão problemas 
          em todo o sistema - desde o agendamento, passando por recepção, 
          prontuário e faturamento.
        </code>
      </p>
      <p>
        Para dar autorização à tela de contratos para um usuário, primeiro vá 
        até a collection <b>"users" </b> e consiga o "_id" do usuário. Com este 
        dado em mãos, insira o seguinte documento na collection 
        <b>"authorizationgroupinstances"</b>: <br></br> <br></br>

        <code>
          "user" : <b>(insira aqui o _id do usuário)</b>, <br></br>
          "authorizationGroup" : ObjectId("5ab1caf9090ac240b5582725"), <br></br>
          "organizationGroup" : ObjectId("58ade409d1ab7d5533ff5952"), <br></br>
          "createdBy" : ObjectId("58ae62350e0404108404e819"), <br></br>
          "isActive" : true, <br></br>
          "createdAt" : 1521636040896.0, <br></br>
          "__v" : 0.0 <br></br>
        </code>
      </p>
      <p>
        <a href="https://youtu.be/ipM_ix7dEyc">Neste video </a>   
        damos uma visão geral da aba de configurações de de contratos.
      </p>

      <h2>2. Contratos Particulares</h2>
      <h3>2.1. Visão Geral</h3>
        <p>
          Contratos particulares são todos aqueles em que o paciente realizará
          um pagamento. Em geral, estes contratos não necessitam de um número
          de carteirinha do paciente, sendo necessário configurá-los para que
          possam ser selecionados para todos os pacientes, ainda que eles não 
          tenham um registro em seu usuário.           
        </p>
        <p>
          Os contratos particulares ativos no Hospital Previna em 24/06/20222 
          são os seguintes:
          <ol>
            <li>Particular</li>
            <li>Programa Promo</li>
            <li>Nossa Clínica</li>
            <li>Ames Assistência Multiprofissional</li>
            <li>Docctor Med Jundiai</li>
            <li>Atende Já</li>
          </ol>
        </p>
        <p>
          Para criar uma novo convênio de atendimento particular, como os acima,
          é necessário iniciar criando um 
          <a href="https://youtu.be/xgvuhmRrWM4" target="_blank"> novo registro de operadora particular.</a>
        </p>
        <p>
          Após criado o registro da operadora, podemos seguir com a 
          <a href="https://youtu.be/mrlTkQOEDDc" target="_blank">criação do contrato</a>, onde serão 
          definidas as unidades de atendimento, procedimentos atendidos, 
          valores e formas de pagamento.
        </p>
      <h3>2.2. Atualizando um preço individual</h3>
      <p>
        Quando já temos um contrato particular válido e queremos atualizar
        apenas alguns poucos valores, a forma mais fácil de realizar essa
        alteração é editando o contrato já existe.
        <a href="https://youtu.be/Lb5SQPY1nLs" target="_blank">Neste vídeo</a>
        mostramos como realizar essa edição.
      </p>
      <h3>2.3. Atualizando uma tabela inteira</h3>
      <p>
        É comum haver reajustes sazonais de uma tabela inteira de procedimentos
        particulares.
        Para se manter o histórico de alterações e também poder voltar rapidamente
        a versão para um contrato antigo, a melhor forma de fazer essa
        atualização é duplicando um contrato já existente.
      </p>
      <p>
        <a href="https://youtu.be/yF1Vxq_maiQ" target="_blank">Neste video</a> 
        mostramos como duplicar um contrato e alterar seus preços.
      </p>
      <h3>2.4. Adicionando uma exceção de preço para um profissional</h3>
      <p>
        Um caso comum é termos alguns profissinais que desejam atender particular,
        mas cobrando um preço distinto do paciente (Atenção: isso não significa
        que o profissional terá um Repasse diferente, mas sim que outro preço
        será cobrado de quem for ser atendido).
      </p>
      <p>
        Para tanto, é necessário utilizar a funcionalidade de exceções de 
        contrato, mostradas <a href="https://youtu.be/MDwbcj9XvhM" target="_blank">neste vídeo.</a>
      </p>
      <h3>2.5. Adicionando uma exceção de preço para uma especialidade</h3>
      <p>
          Outro caso bastante comum é a diferenciação de preços por especialidade.
          Todos os procedimentos no sistema permitem que sejam executados
          apenas por uma especialidade ou que algumas especialidades sejam
          excluidas da possibilidade de executar este procedimento.
      </p>
      <p>
        Ao combinarmos essas duas funcionalidades, podemos criar restrições de
        preços diferentes por especialidade.
        Por exemplo, caso queiramos que todas as consultas dermatologia e 
        neurologia custem R$ 200,00, mas que todas as outras especialidades
        custem R$ 150,00, podemos proceder da seguinte forma:
        <ol>
          <li>Adicionar procedimento de consulta com preço de R$ 150,00
            excluindo as especialidades de dermatologia e neurologia.
          </li>
          <li>Adicionar procedimento de consulta com preço de R$ 200,00
            incluindo apenas as especialidades de dermatologia e neurologia.
          </li>
        </ol>
      </p>
      <p>
        Mostramos <a href="https://youtu.be/w1OOtc3Cluc" target="_blank">neste vídeo</a> 
        a execução do procedimento acima.
      </p>

      <h2>3. Contratos TISS com operadoras de saúde</h2>
      <h3>3.1. Visão Geral</h3>
      <p>
        Um contrato TISS é um contrato entre prestador e operadora de saúde
        que será regido pelas regras da ANS, ou seja, o seu faturamento exige
        a emissão de guias TISS, além da emissão e envio de lotes para 
        cobrança.
      </p>
      <p>
        <a href="https://youtu.be/ehNhsbhziBM" target="_blank">Neste video</a>
        damos uma visão geral de como criar e configurar este tipo de contrato.
      </p>
      <h3>3.2. Diferentes preços para diferentes planos na mesma operadora</h3>
      <p>
        Um mesmo contrato com uma operadora de saúde pode diferenciar os preços
        cobrados por cada um dos planos que ela oference (por exemplo: empresarial,
        individual, etc.).
        <a href="https://youtu.be/dS1gKoAQAoE" target="_blank">Neste vídeo</a>
        mostramos como configurar diferentes planos (ou familias de planos) com
        preços distintos.
      </p>
      <h3>3.3. Atualizando uma tabela inteira de preços</h3>
      <p>
        A atualização de uma tabela inteira de preços segue o mesmo padrão
        da atualização de uma tabela particular, devendo-se:
        <ol>
          <li>Duplicar um contrato base</li>
          <li>Alterar a vigência e o preço do contrato novo</li>
          <li>Alterar a vigência do contrato antigo</li>
          <li>Salvar o novo contrato</li>
        </ol>
      </p>
      <p>
        Para ver a mecânica de duplicação de um contrato, basta ver o 
        <a href="https://youtu.be/yF1Vxq_maiQ" target="_blank">video da sessão 2.3</a>
      </p>
      
    </PageContent>
  );
}
