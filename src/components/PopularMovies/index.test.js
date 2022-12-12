import React from "react";
import { render, screen } from "@testing-library/react";
import PopularMovies from ".";

const mockData = {
  data: [
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
  ],
  loading: false,
  error: "",
};

jest.mock("../../hooks/useFetch", () => {
  return jest.fn().mockResolvedValue(() => ({
    mockData,
  }));
});

jest.mock("../Error", () => jest.fn(() => <div>Error</div>));
jest.mock("../Loading", () => jest.fn(() => <div>Loading</div>));
jest.mock("../MoviesList", () => jest.fn(() => <div>Movies List</div>));

describe.skip("PopularMovies", () => {
  it("renders an error message if an error occurs", () => {
    // Arrange
    mockData.error = "error";
    render(<PopularMovies />);

    // Assert
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("renders a loading spinner if it's loading", () => {
    // Arrange
    mockData.error = "";
    mockData.loading = true;

    console.log(mockData);
    render(<PopularMovies />);

    // Assert
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders a movies list if has data", () => {
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
    render(<PopularMovies />);

    // Assert
    expect(screen.getByText(/movies list/i)).toBeInTheDocument();
  });
});
