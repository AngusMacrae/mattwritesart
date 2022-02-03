import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Error from './Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/misc/Form';
import BuyOption from '../components/Buy/BuyOption';
import usePageTitle from '../hooks/usePageTitle';
import useArtworkSlug from '../hooks/useArtworkSlug';

export default function Buy() {
  const { name, slug, original, prints, height, width, medium, description, buyOgCaption, buyPrtCaption } = useArtworkSlug();

  usePageTitle(`${name} - mattwritesart`);

  const defaultBuyOption = original ? 'Original' : 'Print';
  const locationState = useLocation().state;
  const selectedBuyOption = typeof locationState !== 'undefined' ? locationState.buyOption : defaultBuyOption;
  const [buyOption, setBuyOption] = useState(selectedBuyOption);

  function handleBuyOptionChange(event) {
    setBuyOption(event.target.value);
  }

  let printDimensions = width > height ? '11.7"x8.3"' : '8.3"x11.7"';
  if (slug === 'four-brood') printDimensions = '16.5"x11.7"';

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
              {original && <BuyOption value='Original' caption={buyOgCaption || 'Buy Original'} selected={buyOption === 'Original'} handleChange={handleBuyOptionChange} artworkSlug={slug} artworkDesc={description} dimensions={`${width}"x${height}"`} medium={medium} price={original} />}
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
