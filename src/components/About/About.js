import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className='about flow'>
      <p>
        <strong>Hi! I'm matt and I write art.</strong>
      </p>
      <p>I form words into images, exploring the power of negative space and the illusion of distance.</p>
      <div className='about__cta'>
        <Link to='/commissions' className='btn btn-secondary'>
          Commissions
        </Link>
        <Link to='/art' className='btn'>
          Browse & Buy
        </Link>
      </div>
    </section>
  );
}
