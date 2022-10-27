import Head from "next/head";
import Link from "next/link";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import CommissionsImages from "./components/CommissionsImages/CommissionsImages";

export default function Commissions() {
  return (
    <>
      <Head>
        <title>Commissions - mattwritesart</title>
        <meta
          name="description"
          content="If you're interested in an original commission, please
        don't hesitate to get in touch! I'll be happy to discuss
        ideas, cost, sizing, and anything else that makes the piece special
        for you."
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
          <Link
            href="/art?clearFilters=true"
            as="/art"
            className="btn btn-secondary"
          >
            View More Art
          </Link>
          <Link href="/contact" className="btn">
            Commission Original Art
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
