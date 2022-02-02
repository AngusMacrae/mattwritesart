import { useEffect } from 'react';
import close from '../../assets/icons/close.svg';

export default function ArtDetailsLightbox({ imageSrc, closeLightbox }) {
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  function handleKeyUp(event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }

  return (
    <div className='art-details__lightbox' onClick={closeLightbox}>
      <div className='art-details__lightbox-content'>
        {/* eslint-disable-next-line */}
        <img src={imageSrc} alt='Lines of text and negative space forming an image' />
        <button autoFocus>
          Close <img src={close} alt='Close Lightbox' />
        </button>
      </div>
    </div>
  );
}
