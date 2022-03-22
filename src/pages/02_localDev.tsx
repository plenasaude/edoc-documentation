import { PageContent } from "../components/PageContent";

export default function LocalDev() {
  return (
    <PageContent>
      <video width="500" height="500" controls>
        <source src="src/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </PageContent>
  );
}
