import { PageContent } from "../../components/PageContent";
import { DbSchemaTable } from "../../components/DbSchemaTable";

const sessionRecordRegisterProps = [
  {
    field: "_id",
    description: "Identificador único do documento do prontuário",
    comments: "",
  },
  {
    field: "professional",
    description:
      "Identificador do profissional de saúde que emitiu o documento do prontuário",
    comments: "Esse ID pertence a um documento da coleção users",
  },
  {
    field: "patient",
    description:
      "Identificador do paciente para que o documento do prontuário foi emitido",
    comments: "Esse ID pertence a um documento da coleção users",
  },
  {
    field: "appointment",
    description:
      "Identificador ao agendamento em que esse documento do prontuário foi gerado",
    comments: "",
  },
  {
    field: "professionalInstance",
    description:
      "Identificador da instancia do profissional que emitiu este documento do prontuário",
    comments: "Ver seção de professional instances para mais informações",
  },
  {
    field: "name",
    description: "Nome/Título do documento do prontuário",
    comments: "",
  },
  {
    field: "documentId",
    description: "Identificador curto do documento",
    comments:
      "Gerado para validação esterna via serviço de validador de atestados. Esse identificador tem como único objetivo ser curto para facilitar a leitura por pessoas",
  },
  {
    field: "type",
    description: "O tipo de documento do prontuário",
    comments: (
      <span>
        <ul>
          <li>fit_note</li>
          <li>progress</li>
          <li>prescription</li>
          <li>note</li>
          <li>upload</li>
          <li>medical_report</li>
        </ul>
      </span>
    ),
  },
  { field: "updates", description: "", comments: "" },
  { field: "data", description: "", comments: "" },
  { field: "specialPrescription", description: "", comments: "" },
  { field: "createdAt", description: "", comments: "" },
  { field: "isActive", description: "", comments: "" },
  { field: "__v", description: "", comments: "" },
];

export default function SessionRecordRegisters() {
  return (
    <PageContent>
      <h1>sessionrecordregisters</h1>

      <p>
        Coleção com os documentos criados dentro de um prontuário eletrônico.
      </p>

      <p>
        Também usada pelo validador de certificados, no caso do documento ser um
        atestado.
      </p>

      <DbSchemaTable lines={sessionRecordRegisterProps} />
    </PageContent>
  );
}
