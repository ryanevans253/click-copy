import { render, screen, fireEvent, act } from "@testing-library/react";
import Item from "./Item.jsx";

// Mock the copyText function
vi.mock("../../lib/copyText", () => ({
  default: vi.fn(),
}));

import copyText from "../../lib/copyText";

describe("Item component", () => {
  const onDeleteMock = vi.fn();
  const initialText = "test link";
  const index = 0;

  test("renders in edit mode with input field", () => {
    render(
      <Item
        editMode={true}
        initialText={initialText}
        onDelete={onDeleteMock}
        index={index}
      />
    );

    const input = screen.getByPlaceholderText(/Enter Link/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(initialText);
  });
});
