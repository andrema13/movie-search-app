import { render, screen } from "@testing-library/react";
import React, { Component } from "react";
import config from ".";

const mockData = {
  data: [
    {
      images: {
        base_url: "http://image.tmdb.org/t/p/",
        secure_base_url: "https://image.tmdb.org/t/p/",
        backdrop_sizes: ["w300", "w780", "w1280", "original"],
        logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
        poster_sizes: [
          "w92",
          "w154",
          "w185",
          "w342",
          "w500",
          "w780",
          "original",
        ],
        profile_sizes: ["w45", "w185", "h632", "original"],
        still_sizes: ["w92", "w185", "w300", "original"],
      },
    },
  ],
};

jest.mock("../../hooks/useFetch", () => {
  return jest.fn().mockResolvedValue(() => ({
    mockData,
  }));
});

describe("ConfigHOC", () => {
  it.skip("renders a new component", () => {
    // Arrange
    const component = <Component data-test-id={"hoc-mock"} />;
    const NewComponentMock = config(component);
    render(<NewComponentMock />);

    // Assert
    expect(screen.getAllByTestId("hoc-mock")).toBeInTheDocument();
  });
});
