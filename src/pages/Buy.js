import Head from 'next/head'
import Error from './Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/misc/Form';
import BuyOption from '../components/Buy/BuyOption';
import useArtworkSlug from '../hooks/useArtworkSlug';
import useBuyOptions from '../hooks/useBuyOptions';
import getPrintDimensions from '../utils/getPrintDimensions';

export default function Buy() {
  const { name, slug, original, prints, height, width, medium, description, buyOgCaption, buyPrtCaption } = useArtworkSlug();

  const defaultBuyOption = original ? 'Original' : 'Print';
  const [buyOption, handleBuyOptionChange] = useBuyOptions(defaultBuyOption);

  const printDimensions = getPrintDimensions(slug, width, height);
  const originalDimensions = `${width}"x${height}"`;

  if (!slug) return <Error />;

  return (
    <>
      <Head>
        <title>{name} - mattwritesart</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="author" content="Angus Macrae" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="facebook-domain-verification" content="5r3fypjmkapt6xv9ny66qoz39msdn2" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className='buy'>
        <section className='container-thin flow'>
          <h2>{name}</h2>
          <Form name='buy' subject={'Order - ' + slug}>
            <fieldset className='buy__options'>
              {prints && <BuyOption value='print' caption={buyPrtCaption || 'Order Print'} selected={buyOption === 'print'} handleChange={handleBuyOptionChange} artworkSlug={slug} artworkDesc={description} dimensions={printDimensions} price={prints} />}
              {original && <BuyOption value='original' caption={buyOgCaption || 'Buy Original'} selected={buyOption === 'original'} handleChange={handleBuyOptionChange} artworkSlug={slug} artworkDesc={description} dimensions={originalDimensions} medium={medium} price={original} />}
            </fieldset>
            <p>To purchase, please fill in your details below. I&apos;ll get back to you ASAP with payment details and to arrange shipping.</p>
            <p>Thanks so much!</p>
            <input type='text' name='name' placeholder='Your name' required />
            <input type='email' name='email' placeholder='Your email' required />
            <textarea name='message' placeholder='Your message (optional)' rows='5'></textarea>
            <button type='submit' className='btn'>
              Send!
            </button>
          </Form>
        </section>
      </main>
      <Footer />
    </>
  );
}
