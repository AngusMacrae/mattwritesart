import { Link } from 'react-router-dom';

export default function Commissions() {
  return (
    <section className='commissions'>
      <div className='commissions__img-carousel'>
        <div className='commissions__img-container'>
          <img src={`/art-images/pete-doherty.webp`} alt='Pete Doherty' />
        </div>
        <div className='commissions__img-container'>
          <img src={`/art-images/bjoern-gelotte.webp`} alt='Bjoern Gelotte' />
        </div>
        <div className='commissions__img-container'>
          <img src={`/art-images/frank-turner-3.webp`} alt='Frank Turner' />
        </div>
      </div>
      <div className='commissions__text-container flow'>
        <h2>Commissions</h2>
        <p>I love the challenge and joy of commissions. From discussing a new idea with a potential customer, through the process of creation, to delivery - it's a unique journey.</p>
        <p>If you're interested in an original commission, please don't hesitate to get in touch! I'll be happy to discuss ideas, cost, sizing, and anything else that makes the piece special for you.</p>
        <p>Please note that unless discussed I reserve the right to make a copy and prints of any commissioned piece.</p>
        <div className='commissions-ctas'>
          <Link to='/art' className='btn btn-secondary'>
            View More Art
          </Link>
          <Link to='/contact' className='btn'>
            Commission a Piece
          </Link>
        </div>
      </div>
    </section>
  );
}
