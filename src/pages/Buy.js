import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BuyOption from '../components/Buy/BuyOption';
import usePageTitle from '../hooks/usePageTitle';
import art from '../data/art.js';

export default function Buy() {
  const { slug } = useParams();
  const artwork = art.find(item => item.slug === slug);

  usePageTitle(`mattwritesart - Buy ${artwork.name}`);

  const printDimensions = artwork.width > artwork.height ? '11.7"x8.3"' : '8.3"x11.7"';

  const defaultBuyOption = artwork.original ? 'original' : 'print';
  const locationObj = useLocation();
  const selectedBuyOption = typeof locationObj.state !== 'undefined' ? locationObj.state.buyOption : defaultBuyOption;
  const [buyOption, setBuyOption] = useState(selectedBuyOption);

  function handleBuyOptionChange(event) {
    setBuyOption(event.target.value);
  }

  return (
    <>
      <Header />
      <main className='buy'>
        <section className='container-thin flow'>
          <h2>{artwork.name}</h2>
          <form>
            <fieldset className='buy__options'>
              {artwork.prints && <BuyOption name='print' caption='Order Print' selected={buyOption === 'print'} handleChange={handleBuyOptionChange} artworkSlug={artwork.slug} artworkDesc={artwork.description} dimensions={printDimensions} price={artwork.prints} />}
              {artwork.original && <BuyOption name='original' caption='Buy Original' selected={buyOption === 'original'} handleChange={handleBuyOptionChange} artworkSlug={artwork.slug} artworkDesc={artwork.description} dimensions={`${artwork.width}"x${artwork.height}"`} medium={artwork.medium} price={artwork.original} />}
            </fieldset>
            <p>To purchase, please fill in your details below. I'll get back to you ASAP with payment details and to arrange shipping.</p>
            <p>Thanks so much!</p>
            <input type='text' name='name' placeholder='Your name' required />
            <input type='email' name='email' placeholder='Your email' required />
            <textarea name='message' placeholder='Your message (optional)' rows='5' required></textarea>
            <button type='submit'>Send!</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
