import Head from 'next/head'
import Link from 'next/link';
import { useContext } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Showcase from '../components/Showcase/Showcase';
import { FilterContext } from '../context/FilterContext';

export default function Home() {
  const { setSavedFilters } = useContext(FilterContext);

  return (
    <>
      <Head>
        <title>mattwritesart</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance." />
        <meta name="author" content="Angus Macrae" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="facebook-domain-verification" content="5r3fypjmkapt6xv9ny66qoz39msdn2" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className='home'>
        <section className='container-thin standout flow'>
          <p>
            <strong>Hi! I&apos;m matt and I write art.</strong>
          </p>
          <p>I form words into images, exploring the power of negative space and the illusion of distance.</p>
        </section>
        <Showcase />
        <section className='cta-container'>
          <Link href='/commissions'>
            <a className='btn btn-secondary'>Commissions</a>
          </Link>
          <Link href='/art' onClick={() => setSavedFilters({})}>
            <a className='btn'>Browse & Buy</a>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
