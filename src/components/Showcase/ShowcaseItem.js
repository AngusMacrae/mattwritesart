import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import useImg from '../../hooks/useImg';

export default function ShowcaseItem({ artwork, rowHeight, rowGap }) {
  const { name, slug, spotlight, height, width, description } = artwork;
  const [imgStatus, onLoad, onError] = useImg();
  const showcaseItem = useRef();
  const showcaseItemContent = useRef();

  function fitToGrid() {
    if (spotlight) {
      // showcaseItem.current.style.gridColumnEnd = 'span 2';
    }
    const rowSpan = Math.ceil((showcaseItemContent.current.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    showcaseItem.current.style.gridRowEnd = `span ${rowSpan}`;
    onLoad();
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', fitToGrid);
    return () => {
      window.removeEventListener('resize', fitToGrid);
    };
  });

  return (
    <li className={`showcase__item shadow ${imgStatus}`} ref={showcaseItem}>
      <Link to={`/art/${slug}`} className='showcase__item-content' ref={showcaseItemContent}>
        <h2>{name}</h2>
        <img src={`/art-images/${slug}.webp`} alt={description} height={height * 1000} width={width * 1000} onLoad={fitToGrid} onError={onError} />
      </Link>
    </li>
  );
}
