import { createPortal } from "react-dom";
import useEffectOnKeyUp from "@/common/hooks/useEffectOnKeyUp";
import { ICONS } from "@/common/constants";

import styles from "./styles.module.scss";

export default function Lightbox({ imageSrc, closeLightbox }) {
  useEffectOnKeyUp("Escape", closeLightbox);

  const portalContainer = document.querySelector("#portal-root");

  const element = (
    <div className={styles.overlay} onClick={closeLightbox}>
      <div className={styles.lightbox}>
        <img
          src={imageSrc}
          alt="Lines of text and negative space forming an image"
        />
        <button autoFocus>
          Close <img src={ICONS.CLOSE} alt="" />
        </button>
      </div>
    </div>
  );

  return createPortal(element, portalContainer);
}
