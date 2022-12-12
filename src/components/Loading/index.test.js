import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from ".";

describe("Loading", () => {
  it("shows a loading message", () => {
    // Arrange
    render(<Loading />);

    // Assert
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
