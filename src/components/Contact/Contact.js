export default function Contact() {
  return (
    <section className='contact'>
      <form>
        <input type='text' name='name' placeholder='Your name' />
        <input type='email' name='email' placeholder='Your email' />
        <textarea name='message' placeholder='Your message' rows='5'></textarea>
        <button type='submit'>Send!</button>
      </form>
    </section>
  );
}
