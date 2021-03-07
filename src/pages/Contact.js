import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import usePageTitle from '../hooks/usePageTitle';
import useForm from '../hooks/useForm';

export default function Contact() {
  usePageTitle('mattwritesart - Contact');

  const [contactForm, handleSubmit] = useForm();

  return (
    <>
      <Header />
      <main className='contact'>
        <section className='container-thin flow'>
          <h2>Get in touch</h2>
          <p>If you're interested in commissioning an original piece, have a question, suggestion or something you want to share with me, or anything else you'd like to reach out about, you can use the form below.</p>
          <p>My inbox is always open!*</p>
          <form method='POST' name='contact' data-netlify='true' onSubmit={handleSubmit} ref={contactForm}>
            <input type='hidden' name='form-name' value='contact' />
            <input type='hidden' name='subject' value='Contact' />
            <input type='text' name='name' placeholder='Your name' required />
            <input type='email' name='email' placeholder='Your email' required />
            <textarea name='message' placeholder='Your message' rows='5' required></textarea>
            <button type='submit' className='btn'>
              Send!
            </button>
          </form>
          <p>
            <small>*unless, of course, I'm writing</small>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
