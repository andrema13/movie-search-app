import React from "react";
import { render, screen } from "@testing-library/react";
import MoviesList from ".";

jest.mock("../ListItem", () => jest.fn((props) => <div {...props}>Item</div>));
jest.mock("../ConfigHOC", () => () => (Component) => (props) => (
  <Component {...props} />
));

describe("MoviesList", () => {
  it("shows the expected components when the list is empty", () => {
    // Arrange
    const title = "title";
    const list = [];
    render(<MoviesList title={title} list={list} />);

    // Assert
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.queryAllByText(/item/i)).toHaveLength(0);
  });

  it.skip("shows the expected components when the list is NOT empty", () => {
    // Arrange
    const title = "title";
    const list = [
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
      {
        adult: false,
        backdrop_path: "/path3.jpg",
        id: 2,
        original_title: "Black Tony",
        overview: "overview",
        popularity: 2000,
        poster_path: "/path4.jpg",
        release_date: "2022-10-19",
        title: "Black Tony",
        video: false,
        vote_average: 7.5,
        vote_count: 3000,
      },
    ];
    render(<MoviesList title={title} list={list} />);

    // Assert
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.queryAllByText(/item/i)).toHaveLength(2);
  });
});
