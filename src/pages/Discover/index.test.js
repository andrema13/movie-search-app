import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Discover from ".";
// import SearchMovies from "../../components/PopularMovies";

jest.mock("../../components/SearchBox", () =>
  jest.fn(() => {
    // const handleQueryMock = jest.fn().mockReturnValue("my");
    return <div role={"searchbox"}>SearchBox</div>;
  })
);
jest.mock("../../components/SearchMovies", () =>
  jest.fn(() => <div role={"list"}>SearchMovies</div>)
);
jest.mock("../../components/PopularMovies", () =>
  jest.fn(() => <div role={"list"}>PopularMovies</div>)
);

describe("Discover", () => {
  it("shows the expected components when the query is empty", () => {
    // Arrange
    render(<Discover />);

    // Assert
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByText(/PopularMovies/i)).toBeInTheDocument();
    expect(screen.queryByText(/SearchMovies/i)).not.toBeInTheDocument();
  });
  // TODO:
  // it("shows the expected components when the query is NOT empty", async () => {
  //   // Arrange
  //   render(<Discover />);
  //   const input = screen.getByRole("searchbox");

  //   // Assert
  //   expect(input).toBeInTheDocument();
  // });
});
