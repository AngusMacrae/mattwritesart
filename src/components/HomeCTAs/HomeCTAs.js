import { Link } from 'react-router-dom';

export default function HomeCTAs() {
  return (
    <section className='home-ctas'>
      <Link to='/commissions' className='btn btn-secondary'>
        Commissions
      </Link>
      <Link to='/art' className='btn'>
        Browse & Buy
      </Link>
    </section>
  );
}
