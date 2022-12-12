import React from "react";
import { render, screen } from "@testing-library/react";
import SearchMovies from ".";

const mockData = {
  data: [],
  loading: false,
  error: "",
  revalidate: jest.fn(),
};

jest.mock("../../hooks/useFetch", () => {
  return jest.fn().mockResolvedValue(() => ({
    mockData,
  }));
});

jest.mock("../Error", () => jest.fn(() => <div>Error</div>));
jest.mock("../Loading", () => jest.fn(() => <div>Loading</div>));
jest.mock("../MoviesList", () => jest.fn(() => <div>Movies List</div>));

describe("SearchMovies", () => {
  it.skip("shows an error message if an error occurs", () => {
    // Arrange
    mockData.error = "error";
    render(<SearchMovies query="black" />);

    // Assert
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it.skip("shows a loading spinner if it's loading", () => {
    // Arrange
    mockData.error = "";
    mockData.loading = true;
    render(<SearchMovies query="black" />);

    // Assert
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it.skip("shows a movies list if has data", () => {
    // Arrange
    mockData.error = "";
    mockData.loading = false;
    mockData.data = [
      {
        adult: false,
        backdrop_path: "/path1.jpg",
        id: 1,
        original_title: "Black Adam",
        overview: "overview",
        popularity: 1000,
        poster_path: "/path2.jpg",
        release_date: "2022-10-19",
        title: "Black Adam",
        video: false,
        vote_average: 7.3,
        vote_count: 2000,
      },
    ];
    render(<SearchMovies query="black" />);

    // Assert
    expect(screen.getByText(/movies list/i)).toBeInTheDocument();
  });
});
