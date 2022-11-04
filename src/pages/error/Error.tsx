import Head from "next/head";

import CtaGroup from "@/common/components/CtaGroup/CtaGroup";
import LinkButton from "@/common/components/LinkButton/LinkButton";
import { LOGOS } from "@/common/constants";

export default function Error() {
  return (
    <>
      <Head>
        <title>Page Not Found - mattwritesart</title>
        <meta name="description" content="Oh no! Something went wrong." />
        <meta name="robots" content="noindex" />
      </Head>
      <main className="error">
        <section className="container-s standout flow">
          <img src={LOGOS.MWA_FACE_SAD} alt="" />
          <p>
            <strong>Oh no! Nothing to see here.</strong>
          </p>
          <p>Would you like to browse some art?</p>
        </section>
        <section>
          <CtaGroup>
            <LinkButton href="/" level="secondary">
              Home
            </LinkButton>
            <LinkButton href="/art">Browse Art</LinkButton>
          </CtaGroup>
        </section>
      </main>
    </>
  );
}
