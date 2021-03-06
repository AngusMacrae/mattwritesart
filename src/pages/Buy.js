import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Error from './Error';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BuyOption from '../components/Buy/BuyOption';
import usePageTitle from '../hooks/usePageTitle';
import useForm from '../hooks/useForm';
import art from '../data/art.js';

export default function Buy() {
  const urlParams = useParams();
  const artwork = art.find(item => item.slug === urlParams.slug);
  const pathValid = typeof artwork !== 'undefined';

  usePageTitle(`mattwritesart - Buy ${pathValid && artwork.name}`);

  const defaultBuyOption = pathValid && artwork.original ? 'Original' : 'Print';
  const locationObj = useLocation();
  const selectedBuyOption = typeof locationObj.state !== 'undefined' ? locationObj.state.buyOption : defaultBuyOption;
  const [buyOption, setBuyOption] = useState(selectedBuyOption);

  function handleBuyOptionChange(event) {
    setBuyOption(event.target.value);
  }

  const [buyForm, handleSubmit] = useForm();

  if (!pathValid) {
    return <Error />;
  }

  const { name, slug, original, prints, height, width, medium, description } = artwork;
  const printDimensions = width > height ? '11.7"x8.3"' : '8.3"x11.7"';

  return (
    <>
      <Header />
      <main className='buy'>
        <section className='container-thin flow'>
          <h2>{name}</h2>
          <form method='POST' name='buy' data-netlify='true' onSubmit={handleSubmit} ref={buyForm}>
            <fieldset className='buy__options'>
              {prints && <BuyOption value='Print' caption='Order Print' selected={buyOption === 'Print'} handleChange={handleBuyOptionChange} artworkSlug={slug} artworkDesc={description} dimensions={printDimensions} price={prints} />}
              {original && <BuyOption value='Original' caption='Buy Original' selected={buyOption === 'Original'} handleChange={handleBuyOptionChange} artworkSlug={slug} artworkDesc={description} dimensions={`${width}"x${height}"`} medium={medium} price={original} />}
            </fieldset>
            <p>To purchase, please fill in your details below. I'll get back to you ASAP with payment details and to arrange shipping.</p>
            <p>Thanks so much!</p>
            <input type='hidden' name='form-name' value='buy' />
            <input type='hidden' name='subject' value={'Order - ' + artwork.slug} />
            <input type='text' name='name' placeholder='Your name' required />
            <input type='email' name='email' placeholder='Your email' required />
            <textarea name='message' placeholder='Your message (optional)' rows='5'></textarea>
            <button type='submit'>Send!</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
