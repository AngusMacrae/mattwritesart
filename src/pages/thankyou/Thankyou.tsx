import Head from "next/head";
import LinkButton from "../../common/components/LinkButton/LinkButton";

export default function Thankyou() {
  return (
    <>
      <Head>
        <title>Thanks! - mattwritesart</title>
        <meta
          name="description"
          content="UK-based artist - forming words into images, exploring the power of negative space and the illusion of distance."
        />
        <meta name="robots" content="noindex" />
      </Head>
      <main className="thankyou">
        <section className="container-thin standout flow">
          <img src="/logo/mwa-logo.svg" alt="" />
          <p>
            <strong>Thanks for your enquiry!</strong>
          </p>
          <p>
            I&apos;ll get back to you as soon as I can, so keep your eyes on
            your inbox...
          </p>
          <p>&#128394;</p>
        </section>
        <section className="cta-container">
          <LinkButton href="/art?clearFilters=true" as="/art" level="secondary">
            Browse More Art
          </LinkButton>
        </section>
      </main>
    </>
  );
}
