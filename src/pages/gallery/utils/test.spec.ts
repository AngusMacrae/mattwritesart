import getAvailabilityText from "./getAvailabilityText";

describe("getAvailabilityText", () => {
  test(`should return string "Original & prints" if both original and prints are available`, () => {
    const result = getAvailabilityText(65, 20);
    expect(result).toBe("Original & prints");
  });

  test(`should return string "Original" if only original is available`, () => {
    const result = getAvailabilityText(65, 0);
    expect(result).toBe("Original");
  });

  test(`should return string "Prints" if only prints are available`, () => {
    const result = getAvailabilityText(0, 20);
    expect(result).toBe("Prints");
  });

  test(`should return string "Unavailable" if neither original nor prints are available`, () => {
    const result = getAvailabilityText(0, 0);
    expect(result).toBe("Unavailable");
  });
});
