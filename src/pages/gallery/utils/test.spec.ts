import getAvailabilityText from "./getAvailabilityText";

describe("getAvailabilityText", () => {
  test("should pass", () => {
    expect(1).toBe(1);
  });

  test.todo(
    `should return string "Original & prints" if both original and prints are available`
  );

  test.todo(`should return string "Original" if only original is available`);

  test.todo(`should return string "Prints" if only original is available`);

  test.todo(
    `should return string "Unavailable" if neither original nor prints are available`
  );
});
