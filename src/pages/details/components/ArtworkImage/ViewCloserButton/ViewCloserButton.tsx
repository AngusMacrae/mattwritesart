import useToggle from "@/common/hooks/useToggle";

import Lightbox from "../Lightbox/Lightbox";

export default function ViewCloserButton({ slug }) {
  const [lightboxOpen, openLightbox, closeLightbox] = useToggle(false);

  return (
    <>
      <button onClick={openLightbox}>
        <img src="/icons/magnifying-glass.svg" alt="" />
        View Closer
      </button>
      {lightboxOpen ? (
        <Lightbox
          imageSrc={`/art-images/close-ups/${slug}_1.jpg`}
          closeLightbox={closeLightbox}
        />
      ) : null}
    </>
  );
}
