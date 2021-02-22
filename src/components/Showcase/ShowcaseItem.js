import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/right-arrow.svg';

export default function ShowcaseItem({ artwork, rowHeight, rowGap }) {
  const showcaseItem = useRef();
  const showcaseItemContent = useRef();

  function fitToGrid() {
    const rowSpan = Math.ceil((showcaseItemContent.current.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    showcaseItem.current.style.gridRowEnd = `span ${rowSpan}`;
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', fitToGrid);
    return () => {
      window.removeEventListener('resize', fitToGrid);
    };
  }, []);

  return (
    <li className='showcase-item' ref={showcaseItem}>
      <div className='showcase-item-content' ref={showcaseItemContent}>
        <h2>{artwork.name}</h2>
        <Link to={`/art/${artwork.slug}`} className='showcase-item__link'>
          View
          <img src={arrow} alt='' />
        </Link>
        <img className='showcase-item__main-img' src={`/art-images/${artwork.slug}.png`} alt='' onLoad={fitToGrid} />
      </div>
    </li>
  );
}
