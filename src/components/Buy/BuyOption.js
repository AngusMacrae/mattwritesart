export default function BuyOption({ name, caption, selected, handleChange, artworkSlug, artworkDesc = '', dimensions = null, medium = null, price }) {
  return (
    <div className={`buy__option ${selected ? 'selected' : ''}`}>
      <input type='radio' id={`buy-option-${name}`} value={name} checked={selected} onChange={handleChange} />
      <label htmlFor={`buy-option-${name}`}></label>
      <span className='buy__option--selected'>Selected</span>
      <div className='buy__option--img-container'>
        <img src={`/art-images/${artworkSlug}.webp`} alt={artworkDesc} className='shadow' />
      </div>
      <div className='buy__option--info-container'>
        <h3>{caption}</h3>
        <table>
          <tbody>
            {dimensions && (
              <tr>
                <th>Dimensions</th>
                <td>{dimensions}</td>
              </tr>
            )}
            {medium && (
              <tr>
                <th>Medium</th>
                <td>{medium}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className='buy__option--price'>£{price}</div>
    </div>
  );
}
