import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import ListItem from ".";
import MovieDetails from "../../pages/MovieDetails";

describe("ListItem", () => {
  const item = {
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
  };

  const imgConfig = {
    images: {
      base_url: "http://image.tmdb.org/t/p/",
      secure_base_url: "https://image.tmdb.org/t/p/",
      backdrop_sizes: ["w300", "w780", "w1280", "original"],
      logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
      poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
      profile_sizes: ["w45", "w185", "h632", "original"],
      still_sizes: ["w92", "w185", "w300", "original"],
    },
  };

  it("renders the List Item", () => {
    // Arrange
    render(<ListItem item={item} config={imgConfig} />, {
      wrapper: BrowserRouter,
    });

    // Assert
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTitle(/black tony/i)).toBeInTheDocument();
    expect(screen.getByTitle(/popularity/i)).toBeInTheDocument();
    expect(screen.getByTitle(/vote average/i)).toBeInTheDocument();
  });

  it("when clicked it links to a specific page", async () => {
    // Arrange

    render(
      <MemoryRouter initialEntries={["/discover"]}>
        <ListItem item={item} config={imgConfig} />
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </MemoryRouter>
    );

    console.log(location);

    // Act
    await userEvent.click(screen.getByRole("img"));

    // Assert
    expect(screen.getByText(/overview/i)).toBeInTheDocument();
  });
});
