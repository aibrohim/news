import { classNames } from "./classNames";

describe("className", () => {
  test("basic implementation", () => {
    expect(classNames("class")).toBe("class");
  });

  test("with mods", () => {
    expect(
      classNames("class", {
        hoverable: true,
        mouseout: false,
        clicked: undefined,
      })
    ).toBe("class hoverable");
  });

  test("with additional class", () => {
    expect(classNames("class", {}, ["additionalClass"])).toBe(
      "class additionalClass"
    );
  });

  test("full implementation", () => {
    expect(
      classNames(
        "class",
        { hoverable: true, mouseout: false, clicked: undefined },
        ["additionalClass"]
      )
    ).toBe("class additionalClass hoverable");
  });
});
