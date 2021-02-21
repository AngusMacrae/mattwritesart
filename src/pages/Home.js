import About from '../components/About/About';
import Showcase from '../components/Showcase/Showcase';
import HomeCTAs from '../components/HomeCTAs/HomeCTAs';

export default function Home({ art }) {
  return (
    <>
      <About />
      <Showcase art={art} />
      <HomeCTAs />
    </>
  );
}
