import { Button } from "shared/ui/button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("basic implementation", () => {
    const testMsg = "HELLO";
    render(<Button>{testMsg}</Button>);
    expect(screen.getByText(testMsg)).toBeInTheDocument();
  });
});
