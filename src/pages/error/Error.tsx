import Head from "next/head";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <Head>
        <title>Page Not Found - mattwritesart</title>
        <meta name="description" content="Oh no! Something went wrong." />
        <meta name="robots" content="noindex" />
      </Head>
      <main className="error">
        <section className="container-thin standout flow">
          <img src="/logo/mwa-logo-sad.svg" alt="" />
          <p>
            <strong>Oh no! Nothing to see here.</strong>
          </p>
          <p>Would you like to browse some art?</p>
        </section>
        <section className="cta-container">
          <Link href="/" className="btn btn-secondary">
            Home
          </Link>
          <Link href="/art?clearFilters=true" as="/art" className="btn">
            Browse Art
          </Link>
        </section>
      </main>
    </>
  );
}
