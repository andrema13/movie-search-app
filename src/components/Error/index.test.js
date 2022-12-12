import React from "react";
import { render, screen } from "@testing-library/react";
import Error from ".";

describe("Error", () => {
  it("shows an error message", () => {
    // Arrange
    render(<Error error="some error" />);

    // Assert
    expect(screen.getByText(/some error/i)).toBeInTheDocument();
  });
});
