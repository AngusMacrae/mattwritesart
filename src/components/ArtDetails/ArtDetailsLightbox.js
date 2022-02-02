import { useEffect, useCallback } from "react";
import close from "../../assets/icons/close.svg";

export default function ArtDetailsLightbox({ imageSrc, closeLightbox }) {
  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    },
    [closeLightbox]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  return (
    <div className="art-details__lightbox" onClick={closeLightbox}>
      <div className="art-details__lightbox-content">
        {/* eslint-disable-next-line */}
        <img
          src={imageSrc}
          alt="Lines of text and negative space forming an image"
        />
        <button autoFocus>
          Close <img src={close} alt="Close Lightbox" />
        </button>
      </div>
    </div>
  );
}
