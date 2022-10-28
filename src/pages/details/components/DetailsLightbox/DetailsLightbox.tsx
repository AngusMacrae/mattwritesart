import useEffectOnKeyUp from "../../../../common/hooks/useEffectOnKeyUp";

import styles from "./styles.module.scss";

export default function DetailsLightbox({ imageSrc, closeLightbox }) {
  useEffectOnKeyUp("Escape", closeLightbox);

  return (
    <div className={styles["details__lightbox"]} onClick={closeLightbox}>
      <div className={styles["details__lightbox-content"]}>
        <img
          src={imageSrc}
          alt="Lines of text and negative space forming an image"
        />
        <button autoFocus>
          Close <img src="/icons/close.svg" alt="Close Lightbox" />
        </button>
      </div>
    </div>
  );
}
