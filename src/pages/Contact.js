import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/misc/Form';
import usePageTitle from '../hooks/usePageTitle';

export default function Contact() {
  usePageTitle('Contact - mattwritesart');

  return (
    <>
      <Header />
      <main className='contact'>
        <section className='container-thin flow'>
          <h2>Get in touch</h2>
          <p>If you're interested in commissioning an original piece, have a question, suggestion or something you want to share with me, or anything else you'd like to reach out about, you can use the form below.</p>
          <p>My inbox is always open!*</p>
          <Form name='contact' subject='Contact'>
            <input type='text' name='name' placeholder='Your name' required />
            <input type='email' name='email' placeholder='Your email' required />
            <textarea name='message' placeholder='Your message' rows='5' required></textarea>
            <button type='submit' className='btn'>
              Send!
            </button>
          </Form>
          <p>
            <small>*unless, of course, I'm writing</small>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
