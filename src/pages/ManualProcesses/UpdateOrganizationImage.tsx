import { PageContent } from "../../components/PageContent";

export default function UpdateOrganizationImage() {
  const json = {a: 'b'}
  return (
    <PageContent>
      <h1>Atualizar imagem da unidade</h1>

      <p>
        Para alterar a imagem de uma unidade no sistema, basta seguir os mesmos
        passos do registro de novas unidades. São eles:
      </p>

      <h3>Passo 1: alterar imagem da unidade no agendamento web</h3>
      <a href="https://youtu.be/E_hcWRbhz3U">Como replicar um modelo</a>

      <h3>Passo 2: limpar o cache</h3>
      <p>
        <b>Atenção:</b> ao limpar o chache, todas as outros informações armazenadas em cache
        serão rearmazenadas pelo sistema. Isso significa que pelos proximos 10 a 15 min o 
        sistema sofrerá lentidão nos logins. Sugerimos deixar para limpar o cache ao fim do dia
        de operação, em horários de baixa demanda.
      </p>
      <p>
        Para limpar o chache, basta acessar <a href="http://api.consultasplena.com/admin/flushredis">http://api.consultasplena.com/admin/flushredis</a>. 
        Ao acessar essa rota, o sistema apagará as informações de cache e as rearmazenará a
        partir do próximo login, permitindo que a imagem do agendamento web seja recarregada
        os usuários.
      </p>
    </PageContent>
  );
}
