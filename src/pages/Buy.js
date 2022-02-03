import Error from './Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/misc/Form';
import BuyOption from '../components/Buy/BuyOption';
import usePageTitle from '../hooks/usePageTitle';
import useArtworkSlug from '../hooks/useArtworkSlug';
import useBuyOptions from '../hooks/useBuyOptions';
import getPrintDimensions from '../utils/getPrintDimensions';

export default function Buy() {
  const { name, slug, original, prints, height, width, medium, description, buyOgCaption, buyPrtCaption } = useArtworkSlug();

  usePageTitle(`${name} - mattwritesart`);

  const defaultBuyOption = original ? 'Original' : 'Print';
  const [buyOption, handleBuyOptionChange] = useBuyOptions(defaultBuyOption);

  const printDimensions = getPrintDimensions(slug, width, height);
  const originalDimensions = `${width}"x${height}"`;

  if (!slug) return <Error />;

  return (
    <>
      <Header />
      <main className='buy'>
        <section className='container-thin flow'>
          <h2>{name}</h2>
          <Form name='buy' subject={'Order - ' + slug}>
            <fieldset className='buy__options'>
              {prints && <BuyOption value='Print' caption={buyPrtCaption || 'Order Print'} selected={buyOption === 'Print'} handleChange={handleBuyOptionChange} artworkSlug={slug} artworkDesc={description} dimensions={printDimensions} price={prints} />}
              {original && <BuyOption value='Original' caption={buyOgCaption || 'Buy Original'} selected={buyOption === 'Original'} handleChange={handleBuyOptionChange} artworkSlug={slug} artworkDesc={description} dimensions={originalDimensions} medium={medium} price={original} />}
            </fieldset>
            <p>To purchase, please fill in your details below. I'll get back to you ASAP with payment details and to arrange shipping.</p>
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
