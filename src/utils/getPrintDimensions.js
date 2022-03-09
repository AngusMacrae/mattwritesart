export default function getPrintDimensions(width, height, slug) {
  if (slug === "four-brood") return '16.5"x11.7"';
  return width > height ? '11.7"x8.3"' : '8.3"x11.7"';
}
