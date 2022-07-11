import { saveAs } from "file-saver";

async function downloadDocument(url: string) {
  if (url) {
    const finalName = url.split("/").at(-1);
    const response = await fetch(url);
    const file = await response.blob();
    saveAs(file, finalName);
  }
}

export function DownloadFile({
  src,
  children,
}: {
  src: string;
  children?: string;
}) {
  return (
    <button
      onClick={() => {
        downloadDocument(src);
      }}
    >
      {children || "DOWNLOAD"}
    </button>
  );
}
