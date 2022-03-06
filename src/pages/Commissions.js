import Head from 'next/head'
import Link from 'next/link';
import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Commissions() {
  const { setSavedFilters } = useContext(FilterContext);

  return (
    <>
      <Head>
        <title>Commissions - mattwritesart</title>
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
      <main className='commissions'>
        <section className='commissions__images container-med'>
          <picture>
            <source srcSet='/art-images/pete-doherty.webp' type='image/webp' />
            <img className='shadow' src='/art-images/pete-doherty.jpg' alt='Pete Doherty' />
          </picture>
          <picture>
            <source srcSet='/art-images/bjoern-gelotte.webp' type='image/webp' />
            <img className='shadow' src='/art-images/bjoern-gelotte.jpg' alt='Bjoern Gelotte' />
          </picture>
          <picture>
            <source srcSet='/art-images/frank-turner-3.webp' type='image/webp' />
            <img className='shadow' src='/art-images/frank-turner-3.jpg' alt='Frank Turner' />
          </picture>
        </section>
        <section className='commissions__text-container container-thin flow'>
          <h2>Commissions</h2>
          <p>I love the challenge and joy of commissions. From discussing a new idea with a potential customer, through the process of creation, to delivery - it&apos;s a unique journey.</p>
          <p>If you&apos;re interested in an original commission, please don&apos;t hesitate to get in touch! I&apos;ll be happy to discuss ideas, cost, sizing, and anything else that makes the piece special for you.</p>
          <p>Please note that unless discussed I reserve the right to make a copy and prints of any commissioned piece.</p>
        </section>
        <section className='cta-container'>
          <Link href='/art' onClick={() => setSavedFilters({})}>
            <a className='btn btn-secondary'>View More Art</a>
          </Link>
          <Link href='/contact'>
            <a className='btn'>Commission Original Art</a>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
