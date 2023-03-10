import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

test("render without crashing", function() {
  render( < Carousel />);
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

test("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  
  //select right arrow
  const rightArrow = queryByTestId("right-arrow");

  //click on right to move forward
  fireEvent.click(rightArrow);
  
  //select left arrow
  const leftArrow = queryByTestId("left-arrow");

  //click on left to move backforward
  fireEvent.click(leftArrow);

  // expect first image to show
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
});


test("left arrow not avaliable when on first page", function() {
  const { queryByTestId, getByAltText } = render(<Carousel />);
  getByAltText("Photo by Richard Pasquarella on Unsplash")
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();

})

test("right arrow not avaliable when on last page", function() {
  const { queryByTestId } = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");

  // Keep clicking the right arrow button until it is disabled
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();

  


})