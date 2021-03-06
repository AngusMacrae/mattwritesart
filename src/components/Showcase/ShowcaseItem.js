import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowcaseItem({ artwork }) {
  const { name, slug, spotlight, height, width, description } = artwork;
  const [loaded, setLoaded] = useState(false);

  let gridClasses = '';
  if (height > width) {
    gridClasses += 'portrait ';
  } else {
    gridClasses += 'landscape ';
  }
  // if (height / width < 1.2 && height / width > 0.85) {
  //   gridClasses += 'square ';
  // }
  if (spotlight) {
    gridClasses += 'spotlight ';
  }

  function handleLoaded(event) {
    console.log(event.target);
    setLoaded(true);
  }

  return (
    <li className={`showcase__item shadow ${gridClasses} ${loaded && 'loaded'}`}>
      <Link to={`/art/${slug}`} className='showcase__item-content'>
        <h2>{name}</h2>
        <img src={`/art-images/${slug}.webp`} alt={description} height={height * 1000} width={width * 1000} onLoad={handleLoaded} />
      </Link>
    </li>
  );
}
