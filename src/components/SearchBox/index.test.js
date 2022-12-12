import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./index";

describe("SearchBox", () => {
  it("shows the right search value", async () => {
    // Arrange
    const mockHandleQuery = jest.fn();
    render(<SearchBox handleQuery={mockHandleQuery} />);

    // Act
    const input = screen.getByRole("searchbox");

    // Assert
    expect(input.value).toBe("");
    userEvent.type(input, "my search");
    await waitFor(
      () => {
        expect(mockHandleQuery).toHaveBeenCalledWith("my search");
      },
      {
        interval: 500,
      }
    );
    expect(input.value).toBe("my search");
  });
});
