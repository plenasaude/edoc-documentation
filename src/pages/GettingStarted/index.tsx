import { PageContent } from "../../components/PageContent";

export default function GettingStarted() {
  return (
    <PageContent>
      <h1>Começando</h1>

      <p>
        Depois de entender o que é o produto na seção anterior agora daremos os
        primeiros passos para modificá-lo. Essa seção visa ajudar você a rodar a
        infra estrutura da eDoc, seja no seu local seja uma versão mista para
        conseguir observar um comportamento de produção no seu local.
      </p>

      <p>
        Entrando na parte técnica da aplicação é importante fazer uma nota sobre
        sistemas operacionais: a eDoc foi desenvolvida inteiramente usando Linux
        e MacOS. Essa documentação vai supor em geral que você esteja usando
        Linux como sistema operacional. Sem dúvida é possível rodar e
        desenvolver a eDoc em Windows, mas essa tarefa sem dúvida passará por
        algumas etapas a mais de virtualização e adaptação de ferramentas.
      </p>
    </PageContent>
  );
}
