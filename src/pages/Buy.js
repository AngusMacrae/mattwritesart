import Head from 'next/head'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/misc/Form';
import BuyOption from '../components/Buy/BuyOption';
import useBuyOptions from '../hooks/useBuyOptions';
import getPrintDimensions from '../utils/getPrintDimensions';
import art from "../data/art.js";

export default function Buy({ artwork }) {
  const { name, slug, original, prints, height, width, medium, description, buyOgCaption, buyPrtCaption } = artwork;

  const defaultBuyOption = original ? 'Original' : 'Print';
  const [buyOption, handleBuyOptionChange] = useBuyOptions(defaultBuyOption);

  const printDimensions = getPrintDimensions(slug, width, height);
  const originalDimensions = `${width}"x${height}"`;

  return (
    <>
      <Head>
        <title>{name} - mattwritesart</title>
        <meta name="description" content={description} />
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

export async function getStaticPaths() {
  const paths = art.map(artwork => {
    return { params: { slug: artwork.slug }}
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const artwork = art.find((item) => item.slug === params.slug);

  return {
    props: {
      artwork
    },
  }
}