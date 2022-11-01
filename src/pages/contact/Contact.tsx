import Head from "next/head";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - mattwritesart</title>
        <meta
          name="description"
          content="If you'd like to reach out to me about a commission or anything else, you can use the
          form here."
        />
      </Head>
      <Header />
      <main className="contact">
        <section className="container-s flow">
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
