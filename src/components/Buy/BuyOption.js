export default function BuyOption({ value, caption, selected, handleChange, artworkSlug, artworkDesc, dimensions, medium, price }) {
  return (
    <div className={`buy__option ${selected ? 'selected' : ''}`}>
      <input type='radio' name='order' id={`buy-option-${value}`} value={value} checked={selected} onChange={handleChange} />
      <label htmlFor={`buy-option-${value}`}></label>
      <span className='buy__option--selected'>Selected</span>
      <div className='buy__option--img-container'>
        <img src={`/art-images/${artworkSlug}.jpg`} alt={artworkDesc} className='shadow' />
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
