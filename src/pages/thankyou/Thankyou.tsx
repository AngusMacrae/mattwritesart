import Head from "next/head";

import CtaGroup from "@/common/components/CtaGroup/CtaGroup";
import LinkButton from "@/common/components/LinkButton/LinkButton";
import { LOGOS } from "@/common/constants";

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
        <section className="container-s standout flow">
          <img src={LOGOS.MWA_FACE} alt="" />
          <p>
            <strong>Thanks for your enquiry!</strong>
          </p>
          <p>
            I&apos;ll get back to you as soon as I can, so keep your eyes on
            your inbox...
          </p>
          <p>&#128394;</p>
        </section>
        <section>
          <CtaGroup>
            <LinkButton href="/art" level="secondary">
              Browse More Art
            </LinkButton>
          </CtaGroup>
        </section>
      </main>
    </>
  );
}
