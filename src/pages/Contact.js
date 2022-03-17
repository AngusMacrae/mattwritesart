import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - mattwritesart</title>
        <meta
          name="description"
          content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance."
        />
      </Head>
      <Header />
      <main className="contact">
        <section className="container-thin flow">
          <h1>Get in touch</h1>
          <p>
            If you&apos;re interested in commissioning an original piece, have a
            question, suggestion or something you want to share with me, or
            anything else you&apos;d like to reach out about, you can use the
            form below.
          </p>
          <p>My inbox is always open!*</p>
          <ContactForm />
          <p>
            <small>*unless, of course, I&apos;m writing</small>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
