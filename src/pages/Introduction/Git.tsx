import { PageContent } from "../../components/PageContent";

export default function Git() {
  return (
    <PageContent>
      <h1>Git</h1>

      <p>Quase todos os nossos projetos usam 3 branches básicas:</p>

      <ul>
        <li>development</li>
        <li>staging</li>
        <li>master</li>
      </ul>

      <p>
        Em geral a branch master contém o código que está ou será deployado em
        breve. Essa branch deve sempre ser estável.
      </p>

      <p>
        A staging também é uma branch estável e contém o código que depois de
        testado deve ir para a master.
      </p>

      <p>
        Finalmente a branch de dev é onde fazemos o trabalho do dia a dia, aqui
        podemos ter códigos menos estáveis e ainda sobre construção.
      </p>

      <p>
        Fora isso é sempre recomendado criar branches da suas funcionalidades,
        essas geralmente sairão e voltarão para a branch development.
      </p>

      <p>
        O sistema atual de branches da eDoc foi baseado no processo
        <a href="https://nvie.com/posts/a-successful-git-branching-model/">
          A successful Git branching model
        </a>
        , mas não existe nenhuma obrigatoriedade de seguir essa prática.
      </p>
    </PageContent>
  );
}
