export default function getAvailabilityText(
  original: number | null,
  prints: number | null
) {
  if (original && prints) return "Original & prints";
  if (original) return "Original";
  if (prints) return "Prints";
  return "Unavailable";
}
