import { useState } from 'react';

export default function useLightbox() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function openLightbox() {
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  return [lightboxOpen, openLightbox, closeLightbox];
}
