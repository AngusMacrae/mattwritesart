export default function getAvailabilityText(original, prints) {
  if (original && prints) return "Original & prints";
  if (original) return "Original";
  if (prints) return "Prints";
  return "Unavailable";
}
