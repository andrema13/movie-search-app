import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

describe("App", () => {
  it("displays a heading", () => {
    // Arrange
    render(<App />);

    // Act
    const heading = screen.getByRole("heading", { name: /movies app/i });

    // Assert
    expect(heading).toBeInTheDocument();
  });
});
