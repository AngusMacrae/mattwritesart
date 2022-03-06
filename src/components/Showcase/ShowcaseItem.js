import Link from 'next/link';
import clsx from 'clsx';
import useImg from '../../hooks/useImg';

export default function ShowcaseItem({ artwork }) {
  const { name, slug, spotlight, height, width, description } = artwork;
  const [imgStatus, onLoad, onError] = useImg();

  return (
    <li className={clsx('showcase__item', 'shadow',  height > width ? 'portrait' : 'landscape', imgStatus, spotlight && 'spotlight')}>
      <Link href={`/art/${slug}`} className='showcase__item-content'>
        <a>
          <h2>{name}</h2>
          <picture>
            <source srcSet={`/art-images/${slug}.webp`} type='image/webp' />
            <img src={`/art-images/${slug}.jpg`} alt={description} height={height * 1000} width={width * 1000} onLoad={onLoad} onError={onError} loading='lazy' />
          </picture>
        </a>
      </Link>
    </li>
  );
}
