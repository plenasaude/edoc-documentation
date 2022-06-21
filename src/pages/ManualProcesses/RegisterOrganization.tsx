import { PageContent } from "../../components/PageContent";

export default function RegisterOrganization() {
  const json = {a: 'b'}
  return (
    <PageContent>
      <h1>Cadastro de Unidades</h1>

      <p>
        Nesta seção vamos abordar como realizar o cadastro de novas unidades no sistema.
      </p>

      <p>
        A eDoc não possui uma tela de registro de novas unidades. Este cadastro é 
        feito diretamente na base de dados. Para tanto, basta inserir um novo documento
        na collection <b>organizations</b> com os parâmetros da nova unidade.
        Feita essa inserção, é necessário adicionar o <b>_id</b> da nova unidade criada
        no grupo de organizações, ou seja, no array "members" do grupo Hospital Previna
        na collection <b>organizationgroups</b>
      </p>

      <p>
        Abaixo temos um passo a passo de como realizar a operação
      </p>

      <h2>Passo a passo para o cadastro de uma nova unidade</h2>

      <h3>Passo 1: replicar um modelo de unidade</h3>
      <a href="https://youtu.be/HD-UlQ4smHc" target="_blank">Como replicar um modelo</a>
      
      <h3>Passo 2: alterar imagem da unidade no agendamento web</h3>
      <a href="https://youtu.be/E_hcWRbhz3U" target="_blank">Como alterar imagem de unidade</a>

      <h3>Passo 3: limpar o cache</h3>
      <p>
        <b>Atenção:</b> ao limpar o chache, todas as outros informações armazenadas em cache
        serão rearmazenadas pelo sistema. Isso significa que pelos proximos 10 a 15 min o 
        sistema sofrerá lentidão nos logins. Sugerimos deixar para limpar o cache ao fim do dia
        de operação, em horários de baixa demanda.
      </p>
      <p>
        Para limpar o chache, basta acessar <a href="http://api.consultasplena.com/admin/flushredis" target="_blank">http://api.consultasplena.com/admin/flushredis</a>. 
        Ao acessar essa rota, o sistema apagará as informações de cache e as rearmazenará a
        partir do próximo login, permitindo que a imagem do agendamento web seja recarregada
        os usuários.
      </p>
    </PageContent>
  );
}
