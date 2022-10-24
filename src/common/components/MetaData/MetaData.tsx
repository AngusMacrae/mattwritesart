const siteRootUrl = process.env.URL;

export default function MetaData({ title, description, url, image }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteRootUrl}${url}`} />
      <meta property="og:image" content={`${siteRootUrl}${image}`} />

      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={`${siteRootUrl}${url}`} />
      <meta property="twitter:image" content={`${siteRootUrl}${image}`} />
    </>
  );
}
