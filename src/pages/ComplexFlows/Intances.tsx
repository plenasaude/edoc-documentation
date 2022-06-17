import { PageContent } from "../../components/PageContent";

export default function Instances() {
  return (
    <PageContent>
      <h1>Instances</h1>

      <p>
        Diferente de outras partes desta seção, esta não vai explicar um fluxo
        em sí, mas um conceito amplamente usado na plataforma eDoc: as intances.
      </p>
      <p>
        Depois de mexer por algum tempo na aplicação você se deparará com
        diversas entidades com o nome acabado em instance, como
        professionalinstances, employeeinstances, organizationgroupinstance,
        etc.
      </p>
      <p>
        Toda entidade instance representa a relação entre duas ou mais outras
        entidades. Por exemplo, uma professionalinstance cria uma relação entre
        um usário e uma organização na qual esse usuário atua como profissional
        de saúde.
      </p>
      <p>
        Além da relação em si as instances podem carregar metadata sobre a
        relação. Usando mais uma vez o exemplo das professionalinstances, esses
        objetos trazem dados como quais especialidades este profissional tem,
        observações e etc.
      </p>
      <p>
        A nomenclatura 'intences' teve como base o jargão de orientação a
        objeto, a ideia é que uma entidade como profissionalinstance fosse o
        instanceamento da 'classe' profissional.
      </p>
    </PageContent>
  );
}
