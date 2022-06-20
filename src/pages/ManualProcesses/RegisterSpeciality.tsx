import { PageContent } from "../../components/PageContent";

export default function RegisterSpeciality() {
  const json = {a: 'b'}
  return (
    <PageContent>
      <h1>Registro de novas especialidades</h1>

      <p>
        Nesta seção vamos abordar como cadastrar novas especalidades além das já existentes
        no sistema.
      </p>

      <p>
        As especialidades existentes estão registradas na collection <b>specialitiesstatics</b>.
        Todas elas vieram diretamente do protocolo TISS da ANS.
        É essencial que todas as especialidades registradas contenham um CBO (Cadastro Brasileiro
        de Ocupações), pois estes dados alimentam diretamente aos guias de faturamento TISS.
        Para uma documentação completa de cada um dos parâmetros de uma especialidade, visite
        a <a href="../mongo-collections/Specialitiesstatics">documentação da collection specialitiesstatics</a>.
      </p>

      <p>
        <b>Atenção:</b> ao longo dos anos de operação recebemos inúmeros pedidos de inclusão de novas
        especialidades. Em raríssimas vezes foi necessária a criação de uma especialidade não contida na
        TISS. É boa prática de quem for manter o sistema garantir que essa base não sofra muitas alterações,
        já que isso pode acarretar em possíveis erros de faturamento com outras operadoras e tornar muito
        difícil o rastreio do porque aquela especialidade foi incluida, além de ser ainda mais difícil 
        reverter essa inclusão, já que outras entidades (cadastro de profissionais, procedimentos, agendas
        e contratos) passarão a depender dela.
      </p>

      <h2>Passo a passo para o cadastro de uma nova especialidade</h2>

      <h3>Passo 1: replicar um modelo de especialidade</h3>
      <a href="https://youtu.be/sGCZpDEFNEk" target="_blank">Como replicar um modelo</a>
      

      <h3>Passo 2: limpar o cache</h3>
      <p>
        <b>Atenção:</b> ao limpar o chache, todas as outros informações armazenadas em cache
        serão rearmazenadas pelo sistema. Isso significa que pelos proximos 10 a 15 min o 
        sistema sofrerá lentidão nos logins. Sugerimos deixar para limpar o cache ao fim do dia
        de operação, em horários de baixa demanda.
      </p>
      <p>
        Para limpar o chache, basta acessar <a href="http://api.consultasplena.com/admin/flushredis" target="_blank">http://api.consultasplena.com/admin/flushredis</a>. 
        Ao acessar essa rota, o sistema apagará as informações de cache e as rearmazenará a
        partir do próximo login.
      </p>
    </PageContent>
  );
}
