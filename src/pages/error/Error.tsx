import Head from "next/head";
import LinkButton from "../../common/components/LinkButton/LinkButton";

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
          <LinkButton href="/" level="secondary">
            Home
          </LinkButton>
          <LinkButton href="/art?clearFilters=true" as="/art">
            Browse Art
          </LinkButton>
        </section>
      </main>
    </>
  );
}
