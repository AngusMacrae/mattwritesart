import { useParams } from 'react-router-dom';
import art from '../data/art.js';

export default function ArtDetails() {
  const { slug } = useParams();
  const artwork = art.find(item => item.slug === slug);

  return (
    <section className='art-details'>
      <div className='art-details__img-gallery-container'>
        <img src={`/art-images/${artwork.slug}.webp`} alt='' />
      </div>
      <div className='art-details__text-container flow'>
        <h2>{artwork.name}</h2>
        <ul className='art-details__key-info'>
          <li>
            <small>{artwork.date}</small>
          </li>
          <li>
            <small>{artwork.medium}</small>
          </li>
          <li>
            <small>
              Original size {artwork.width}"x{artwork.height}"
            </small>
          </li>
        </ul>
        <p>{artwork.description}</p>
        <p>To buy, fill out the form below, and I'll get back to you ASAP to discuss payment and shipping. Your details will not be stored or shared with any third parties.</p>
        <form action=''>
          <input type='text' name='name' placeholder='Your name (required)' required />
          <input type='email' name='email' placeholder='Your email (required)' required />
          <textarea name='message' placeholder='Message (optional)' rows='5'></textarea>{' '}
          <button type='submit' className='btn-secondary'>
            Buy Print
          </button>
          <button type='submit'>Buy Original</button>
        </form>
      </div>
    </section>
  );
}
