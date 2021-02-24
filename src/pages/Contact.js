export default function Contact() {
  return (
    <section className='contact-form flow'>
      <h2>Get in Touch</h2>
      <p>If you have a question or suggestion, something you want to share with me, or anything else you'd like to reach out about, you can use the form below.</p>
      <p>My inbox is always open!</p>
      <form>
        <input type='text' name='name' placeholder='Your name' required />
        <input type='email' name='email' placeholder='Your email' required />
        <textarea name='message' placeholder='Your message' rows='5' required></textarea>
        <button type='submit'>Send!</button>
      </form>
    </section>
  );
}
