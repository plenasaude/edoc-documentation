export function Videos({
  src,
}: {
  /**
   * src is the name of the file inside the directory src/videos
   */
  src: string;
}) {
  return (
    <video style={{ width: "100%" }} controls>
      <source src={`/src/videos/${src}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
