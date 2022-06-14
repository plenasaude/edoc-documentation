import React from "react";

type Line = {
  field: string | React.ReactNode;
  description: string | React.ReactNode;
  comments?: string | React.ReactNode;
};

export function DbSchemaTable({ lines }: { lines: Line[] }) {
  return (
    <div className="tg-wrap">
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-aaoz">Campo</th>
            <th className="tg-aaoz">Descrição</th>
            <th className="tg-aaoz">Comentários</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line) => (
            <tr>
              <td className="tg-0lax">{line.field}</td>
              <td className="tg-0lax">{line.description}</td>
              <td className="tg-0lax">{line.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
