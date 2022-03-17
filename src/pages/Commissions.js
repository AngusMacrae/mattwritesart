import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CommissionsImages from "../components/Commissions/CommissionsImages";

export default function Commissions() {
  return (
    <>
      <Head>
        <title>Commissions - mattwritesart</title>
        <meta
          name="description"
          content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance."
        />
      </Head>
      <Header />
      <main className="commissions">
        <CommissionsImages />
        <section className="commissions__text-container container-thin flow">
          <h1>Commissions</h1>
          <p>
            I love the challenge and joy of commissions. From discussing a new
            idea with a potential customer, through the process of creation, to
            delivery - it&apos;s a unique journey.
          </p>
          <p>
            If you&apos;re interested in an original commission, please
            don&apos;t hesitate to get in touch! I&apos;ll be happy to discuss
            ideas, cost, sizing, and anything else that makes the piece special
            for you.
          </p>
          <p>
            Please note that unless discussed I reserve the right to make a copy
            and prints of any commissioned piece.
          </p>
        </section>
        <section className="cta-container">
          <Link href="/art?clearFilters=true" as="/art">
            <a className="btn btn-secondary">View More Art</a>
          </Link>
          <Link href="/contact">
            <a className="btn">Commission Original Art</a>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
