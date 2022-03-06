import Head from 'next/head'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/misc/Form';
import usePageTitle from '../hooks/usePageTitle';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - mattwritesart</title>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance." />
        <meta name="author" content="Angus Macrae" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="facebook-domain-verification" content="5r3fypjmkapt6xv9ny66qoz39msdn2" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className='contact'>
        <section className='container-thin flow'>
          <h2>Get in touch</h2>
          <p>If you&apos;re interested in commissioning an original piece, have a question, suggestion or something you want to share with me, or anything else you&apos;d like to reach out about, you can use the form below.</p>
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
            <small>*unless, of course, I&apos;m writing</small>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
