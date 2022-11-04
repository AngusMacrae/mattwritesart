import { ICONS } from "@/common/constants";
import useToggle from "@/common/hooks/useToggle";

import Lightbox from "../Lightbox/Lightbox";

export default function ViewCloserButton({ slug }) {
  const [lightboxOpen, openLightbox, closeLightbox] = useToggle(false);

  return (
    <>
      <button onClick={openLightbox}>
        <img src={ICONS.MAGNIFY} alt="" />
        View Closer
      </button>
      {lightboxOpen ? (
        <Lightbox
          imageSrc={`/assets/images/art/closeups/${slug}_1.jpg`}
          closeLightbox={closeLightbox}
        />
      ) : null}
    </>
  );
}
