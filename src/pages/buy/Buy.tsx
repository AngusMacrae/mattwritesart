import Head from "next/head";
import * as ga from "../../lib/ga";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import Form from "../../common/components/Form/Form";
import MetaData from "../../common/components/MetaData/MetaData";
import BuyOption from "./components/BuyOption";
import useBuyOptions from "./hooks/useBuyOptions";
import getPrintDimensions from "./utils/getPrintDimensions";
import art from "../../data/art";

export default function Buy({ artwork }) {
  const {
    name,
    slug,
    original,
    prints,
    height,
    width,
    medium,
    description,
    buyOgCaption,
    buyPrtCaption,
  } = artwork;

  const defaultBuyOption = original ? "Original" : "Print";
  const [buyOption, handleBuyOptionChange] = useBuyOptions(defaultBuyOption);

  const printDimensions = getPrintDimensions(width, height, slug);
  const originalDimensions = `${width}"x${height}"`;

  const formSubject = `Order - ${slug}`;

  const recordPurchase = () => {
    ga.event({
      action: "purchase",
      params: {
        piece: name,
        type: buyOption,
        price: buyOption === "print" ? prints : original,
      },
    });
  };

  return (
    <>
      <Head>
        <MetaData
          title={`${name} - mattwritesart`}
          description={description}
          url={`/art/${slug}`}
          image={`/art-images/${slug}.jpg`}
        />
      </Head>
      <Header />
      <main className="buy">
        <section className="container-thin flow">
          <h1>{name}</h1>
          <Form name="buy" subject={formSubject}>
            <fieldset className="buy__options">
              {prints ? (
                <BuyOption
                  value="print"
                  caption={buyPrtCaption}
                  selected={buyOption === "print"}
                  handleChange={handleBuyOptionChange}
                  slug={slug}
                  description={description}
                  dimensions={printDimensions}
                  price={prints}
                />
              ) : null}
              {original ? (
                <BuyOption
                  value="original"
                  caption={buyOgCaption}
                  selected={buyOption === "original"}
                  handleChange={handleBuyOptionChange}
                  slug={slug}
                  description={description}
                  dimensions={originalDimensions}
                  medium={medium}
                  price={original}
                />
              ) : null}
            </fieldset>
            <p>
              To purchase, please fill in your details below. I&apos;ll get back
              to you ASAP with payment details and to arrange shipping.
            </p>
            <p>Thanks so much!</p>
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message (optional)"
              rows={5}
            ></textarea>
            <button type="submit" className="btn" onClick={recordPurchase}>
              Send!
            </button>
          </Form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = art.map((artwork) => {
    return { params: { slug: artwork.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const artwork = art.find((item) => item.slug === params.slug);

  return {
    props: {
      artwork,
    },
  };
}
