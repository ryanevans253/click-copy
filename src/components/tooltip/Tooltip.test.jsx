import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip test", () => {
  it("renders the button.", () => {
    render(<Tooltip />);

    const button = screen.getByRole("button", { name: "Tooltip" });
    expect(button).toBeInTheDocument();
  });
});
