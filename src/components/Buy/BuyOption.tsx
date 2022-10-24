import clsx from "clsx";

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
    <div className={clsx("buy__option", selected && "selected")}>
      <input
        type="radio"
        name="order"
        id={inputId}
        value={value}
        checked={selected}
        onChange={handleChange}
      />
      <label htmlFor={inputId}></label>
      <span className="buy__option--selected">Selected</span>
      <div className="buy__option--img-container">
        <picture>
          <source
            srcSet={`/art-images/${slug}.webp`}
            type="image/webp"
          />
          <img
            className="shadow"
            src={`/art-images/${slug}.jpg`}
            alt={description}
          />
        </picture>
      </div>
      <div className="buy__option--info-container">
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
      <div className="buy__option--price">£{price}</div>
    </div>
  );
}
