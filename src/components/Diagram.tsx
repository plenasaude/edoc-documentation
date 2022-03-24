import React from "react";

export function Diagram({ children }: { children: React.ReactNode }) {
  window.mermaid.initialize({ startOnLoad: true });

  React.useEffect(() => {
    window.mermaid.contentLoaded();
  }, []);

  return <div className="mermaid">{children}</div>;
}
