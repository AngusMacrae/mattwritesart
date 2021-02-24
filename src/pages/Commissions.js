export default function Commissions() {
  return (
    <section className='commissions'>
      <div className='commissions__img-carousel'>
        <div className='commissions__img-container'>
          <img src={`/art-images/swallow-study-1.webp`} alt='Swallow' />
        </div>
        <div className='commissions__img-container'>
          <img src={`/art-images/adele.webp`} alt='Adele' />
        </div>
        <div className='commissions__img-container'>
          <img src={`/art-images/frank-turner-3.webp`} alt='Frank Turner' />
        </div>
      </div>
      <div className='commissions__text-container flow'>
        <h2>Commissions</h2>
        <p>I love the challenge and joy of commissions. From discussing a new idea with a potential customer, through the process of creation, to delivery - it's a unique journey.</p>
        <p>If you're interested in an original commission, please get in touch by filling out the form below. I'll be happy to discuss ideas, cost, sizing and anything else that makes the piece special for you.</p>
        <p>Please note that unless discussed I reserve the right to make a copy and prints of any commissioned piece.</p>
        <form action=''>
          <input type='text' name='name' placeholder='Your name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea name='message' placeholder='Details of commission' rows='5' required></textarea>
          <button type='submit'>Send!</button>
        </form>
      </div>
    </section>
  );
}
