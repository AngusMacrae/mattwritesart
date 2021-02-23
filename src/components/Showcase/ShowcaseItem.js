import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/right-arrow.svg';

export default function ShowcaseItem({ artwork }) {
  const showcaseItem = useRef();
  const showcaseItemContent = useRef();

  function fitToGrid() {
    const { height, width } = showcaseItemContent.current.getBoundingClientRect();
    if (height > width) {
      if (Math.random() > 0.8) {
        showcaseItem.current.style.gridRowEnd = 'span 4';
        showcaseItem.current.style.gridColumnEnd = 'span 2';
      } else {
        showcaseItem.current.style.gridRowEnd = 'span 2';
        showcaseItem.current.style.gridColumnEnd = 'span 1';
      }
    } else {
      if (Math.random() > 0.8) {
        showcaseItem.current.style.gridRowEnd = 'span 2';
        showcaseItem.current.style.gridColumnEnd = 'span 2';
      } else {
        showcaseItem.current.style.gridRowEnd = 'span 1';
        showcaseItem.current.style.gridColumnEnd = 'span 1';
      }
    }
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
