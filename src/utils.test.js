import { isValidEmail } from "./utils";

describe("utils", () => {
  it("should return true when passed w@w.com", () => {
    // arrange - don't have much here
    // act
    const isValid = isValidEmail("w@w.com");
    // assert
    expect(isValid).toBe(true);
  });

  it("should return false when passed ww.com", () => {
    // arrange - don't have much here
    // act
    const isValid = isValidEmail("ww.com");
    // assert
    expect(isValid).toBe(false);
  });

  it("should return false when passed empty string", () => {
    // arrange - don't have much here
    // act
    const isValid = isValidEmail("");
    // assert
    expect(isValid).toBe(false);
  });
});
