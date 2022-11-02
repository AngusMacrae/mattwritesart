import Head from "next/head";

import Header from "@/common/components/Header/Header";
import Footer from "@/common/components/Footer/Footer";
import CtaGroup from "@/common/components/CtaGroup/CtaGroup";
import LinkButton from "@/common/components/LinkButton/LinkButton";

import Showcase from "./components/Showcase/Showcase";
import About from "./components/About/About";
import Faqs from "./components/Faqs/Faqs";

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
        <section className="container-s standout flow">
          <h1 style={{ display: "none" }}>mattwritesart - Home</h1>
          <p>
            <strong>Hi! I&apos;m matt and I write art.</strong>
          </p>
          <p>
            I form words into images, exploring the power of negative space and
            the illusion of distance.
          </p>
        </section>
        <section>
          <CtaGroup>
            <LinkButton href="/commissions" level="secondary">
              Commissions
            </LinkButton>
            <LinkButton href="/art">Browse & Buy</LinkButton>
          </CtaGroup>
        </section>
        <Showcase />
        <About />
        <Faqs />
        <section>
          <CtaGroup>
            <LinkButton href="/commissions" level="secondary">
              Commissions
            </LinkButton>
            <LinkButton href="/art">Browse & Buy</LinkButton>
          </CtaGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
