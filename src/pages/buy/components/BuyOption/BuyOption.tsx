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
    <div className={clsx(styles["buy__option"], selected && styles.selected)}>
      <input
        type="radio"
        name="order"
        id={inputId}
        value={value}
        checked={selected}
        onChange={handleChange}
      />
      <label htmlFor={inputId}></label>
      <span className={styles["buy__option--selected"]}>Selected</span>
      <div className={styles["buy__option--img-container"]}>
        <picture>
          <source srcSet={`/art-images/${slug}.webp`} type="image/webp" />
          <img
            className="shadow"
            src={`/art-images/${slug}.jpg`}
            alt={description}
          />
        </picture>
      </div>
      <div className={styles["buy__option--info-container"]}>
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
      <div className={styles["buy__option--price"]}>£{price}</div>
    </div>
  );
}
