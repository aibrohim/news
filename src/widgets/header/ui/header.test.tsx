import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Header } from "widgets/header";

describe("Header", () => {
  test("basic implementation", () => {
    renderWithTranslation(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
