import { render, screen } from "@testing-library/react";
import Recipe from "../src/components/Recipe";

// describe - beforeEach - render
// test - expect - assert

describe("Recipe component", () => {
  beforeEach(() => {
    render(
      <Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />
    );
  });
  test("renders with correct title", () => {
    expect(
      screen.getByRole("heading", { name: "Finnish cinnamon buns" })
    ).toBeInTheDocument();
  });

  test("renders with correct food type", () => {
    expect(screen.getByText("dessert")).toBeInTheDocument();
  });

  test("renders with correct duration", () => {
    expect(screen.getByText("60")).toBeInTheDocument();
  });
});
