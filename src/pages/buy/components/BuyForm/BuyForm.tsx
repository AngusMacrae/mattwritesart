import * as ga from "@/lib/ga";
import NetlifyContactForm from "@/common/components/NetlifyContactForm/NetlifyContactForm";
import Button from "@/common/components/Button/Button";

import useBuyOptions from "../../hooks/useBuyOptions";
import getPrintDimensions from "../../utils/getPrintDimensions";

import BuyOption from "./components/BuyOption/BuyOption";

import styles from "./styles.module.scss";

export default function BuyForm({ artwork }) {
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

  const printDimensions = getPrintDimensions(width, height, slug);
  const originalDimensions = `${width}"x${height}"`;

  const formSubject = `Order - ${slug}`;

  const [buyOption, handleBuyOptionChange] = useBuyOptions(defaultBuyOption);

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
    <NetlifyContactForm name="buy" subject={formSubject}>
      <fieldset className={styles.buyOptions}>
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
      <div className={styles.instructions}>
        <p>
          To purchase, please fill in your details below. I&apos;ll get back to
          you ASAP with payment details and to arrange shipping.
        </p>
        <p>Thanks so much!</p>
      </div>
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea
        name="message"
        placeholder="Your message (optional)"
        rows={5}
      ></textarea>
      <Button type="submit" onClick={recordPurchase}>
        Send!
      </Button>
    </NetlifyContactForm>
  );
}
