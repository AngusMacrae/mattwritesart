import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Form from "../components/misc/Form";

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
          <h2>Get in touch</h2>
          <p>
            If you&apos;re interested in commissioning an original piece, have a
            question, suggestion or something you want to share with me, or
            anything else you&apos;d like to reach out about, you can use the
            form below.
          </p>
          <p>My inbox is always open!*</p>
          <Form name="contact" subject="Contact">
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="btn">
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
