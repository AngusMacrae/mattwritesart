export default function ShowcaseItem({ artwork }) {
  return (
    <div className='showcase-item'>
      <h2>{artwork.name}</h2>
      <div className='showcase-item__chips'>
        {!artwork.original ? <span>Sold!</span> : null}
        {artwork.prints ? <span>Prints available</span> : null}
        <button>Details</button>
      </div>
      <img src={`/art-images/${artwork.slug}.png`} alt='' />
      {/* <img src={placeholder} alt='' /> */}
    </div>
  );
}
