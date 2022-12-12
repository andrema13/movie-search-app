import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from ".";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
  useLocation: jest.fn().mockImplementation(() => ({
    state: {
      item: {
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
      config: {
        images: {
          secure_base_url: "url",
          poster_sizes: ["w1", "w2"],
        },
      },
    },
  })),
}));

describe("MovieDetails", () => {
  it("shows the back button and works as expected", () => {
    // Arrange
    render(<MovieDetails />);
    const backButton = screen.getByRole("button");

    // Assert
    expect(backButton).toBeInTheDocument();
    userEvent.click(backButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(-1);
  });

  it("shows the correct movie details", () => {
    // Arrange
    render(<MovieDetails />);

    // Assert
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /black adam/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /black adam/i })
    ).toBeInTheDocument();
    expect(screen.getByTitle(/release date/i)).toBeInTheDocument();
    expect(screen.getByTitle(/popularity/i)).toBeInTheDocument();
    expect(screen.getByTitle(/vote count/i)).toBeInTheDocument();
    expect(screen.getByTitle(/vote average/i)).toBeInTheDocument();
    expect(screen.getByTitle(/overview/i)).toBeInTheDocument();
  });
});
