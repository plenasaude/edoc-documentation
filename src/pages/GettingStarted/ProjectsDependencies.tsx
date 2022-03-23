import { PageContent } from "../../components/PageContent";

export default function ProjectsDependencies() {
  return (
    <PageContent>
      <h1>Dependência entre projetos</h1>

      <p>
        É importante notar que alguns projetos dependem de outros projetos como
        'módulos'. Ou seja esses outros projetos privados da eDoc foram
        instalados como dependências via npm e estão presentes no package.json
        da aplicação. Como no caso abaixo da API:
      </p>

      <pre>
        "access_control":
        "git+https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:x-oauth-basic@github.com/edocsaude/access_control.git#20fac571837e9a1de0b64a79c51972d712bd8574",
      </pre>

      <p>
        Nesses casos nós precisamos passar um token do GitHub para autenticação,
        o que nos permite instalar um projeto privado. E também podemos passar o
        sha de um commit específico para forçarmos a versão da dependência,
        evitando quebras por mudanças de interfaces. O token do GitHub pode ser
        gerado seguindo os paços da
        <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">
          documentação
        </a>
        .
      </p>

      <p>
        É importante saber disso para identificar problemas ao se rodar o npm
        install de um projeto. Se o problema não estiver diretamente relacionado
        a algum projeto esterno a maior chance é de algum problema com os
        tokens.
      </p>

      <p>
        Apesar dessa abordagem funcionar bem ela pode gerar alguns problemas,
        por exemplo a invalidação acidental de algum token pode fazer os
        sistemas caírem. Usar outros sistemas de dependência dos pacotes pode
        ser uma boa alternativa. Monorepos com ferramentas como
        <a href="https://nx.dev/">Nx</a> também são uma excelente solução para
        esse problema, mas bastante mais complexa.
      </p>
    </PageContent>
  );
}
