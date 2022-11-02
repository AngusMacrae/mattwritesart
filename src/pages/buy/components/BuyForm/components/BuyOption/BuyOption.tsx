import clsx from "clsx";

import styles from "./styles.module.scss";

export default function BuyOption({
  value,
  caption,
  selected,
  handleChange,
  slug,
  description,
  dimensions = null,
  medium = null,
  price,
}) {
  const inputId = `buy-option-${value}`;

  return (
    <div className={clsx(styles.buyOptionRadio, selected && styles.selected)}>
      <input
        type="radio"
        name="order"
        id={inputId}
        value={value}
        checked={selected}
        onChange={handleChange}
      />
      <label htmlFor={inputId}></label>
      {selected ? <span className={styles.selectedText}>Selected</span> : null}
      <div className={styles.imgContainer}>
        <picture>
          <source srcSet={`/art-images/${slug}.webp`} type="image/webp" />
          <img src={`/art-images/${slug}.jpg`} alt={description} />
        </picture>
      </div>
      <div className={styles.infoContainer}>
        <h2>{caption}</h2>
        <table>
          <tbody>
            {dimensions ? (
              <tr>
                <th>Dimensions</th>
                <td>{dimensions}</td>
              </tr>
            ) : null}
            {medium ? (
              <tr>
                <th>Medium</th>
                <td>{medium}</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <div className={styles.price}>£{price}</div>
    </div>
  );
}
