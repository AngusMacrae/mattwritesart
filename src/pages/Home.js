import Showcase from '../components/Showcase/Showcase';
import About from '../components/About/About';

export default function Home({ art }) {
  return (
    <>
      <Showcase art={art} />
      <About />
    </>
  );
}
