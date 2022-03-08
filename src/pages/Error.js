import Head from "next/head";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <Head>
        <title>Page Not Found - mattwritesart</title>
        <meta
          name="description"
          content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance."
        />
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
          <Link href="/">
            <a className="btn btn-secondary">Home</a>
          </Link>
          <Link href="/art?clearFilters=true" as="/art">
            <a className="btn">Browse Art</a>
          </Link>
        </section>
      </main>
    </>
  );
}
