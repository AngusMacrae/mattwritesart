import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Showcase from "../components/Showcase/Showcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>mattwritesart</title>
        <meta
          name="description"
          content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance."
        />
      </Head>
      <Header />
      <main className="home">
        <section className="container-thin standout flow">
          <h1 style={{ display: "none" }}>mattwritesart - Home</h1>
          <p>
            <strong>Hi! I&apos;m matt and I write art.</strong>
          </p>
          <p>
            I form words into images, exploring the power of negative space and
            the illusion of distance.
          </p>
        </section>
        <Showcase />
        <section className="cta-container">
          <Link href="/commissions">
            <a className="btn btn-secondary">Commissions</a>
          </Link>
          <Link href="/art?clearFilters=true" as="/art">
            <a className="btn">Browse & Buy</a>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
