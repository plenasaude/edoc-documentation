import { PageContent } from "../../components/PageContent";

export default function MainTechnologies() {
  return (
    <PageContent>
      <h1>Principais tecnologias</h1>

      <p>
        Todo o código da eDoc foi escrito em JavaScript, os servidores são
        escritos em Node.js enquanto todo o front end usa AngularJS.
      </p>

      <p>
        A principal base de dados usada é o MongoDB, onde guardamos os dados
        originais gerados nas plataformas. Nós também usamos Redis para caches e
        ElasticSearch para buscas mais ágeis.
      </p>
    </PageContent>
  );
}
