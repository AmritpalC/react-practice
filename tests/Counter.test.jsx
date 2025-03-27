import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter";

describe("Counter component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  // Initial state
  test("renders with initial value of 0", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("0");
  });

  // Increment
  test("renders with new value of 3 after 3 increment clicks", async () => {
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));
    await userEvent.click(screen.getByText("Increment"));

    expect(screen.getByRole("heading")).toHaveTextContent("3");
  });

  // Decrement
  test("renders with new value of -2 after 2 decrement clicks", async () => {
    await userEvent.click(screen.getByText("Decrement"));
    await userEvent.click(screen.getByText("Decrement"));

    expect(screen.getByRole("heading")).toHaveTextContent("-2");
  });
});
