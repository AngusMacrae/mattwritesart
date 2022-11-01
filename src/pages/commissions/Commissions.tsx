import Head from "next/head";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import SampleImages from "./components/SampleImages/SampleImages";
import LinkButton from "../../common/components/LinkButton/LinkButton";
import CtaGroup from "../../common/components/CtaGroup/CtaGroup";

import styles from "./styles.module.scss";

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
      <main>
        <SampleImages />
        <section className="container-s flow">
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
        <section className={styles.commissionsCtasContainer}>
          <CtaGroup>
            <LinkButton href="/art" level="secondary">
              View More Art
            </LinkButton>
            <LinkButton href="/contact">Commission Original Art</LinkButton>
          </CtaGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
