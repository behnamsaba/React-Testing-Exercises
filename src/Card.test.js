import React from "react";
import { render, asFragment } from "@testing-library/react";
import Card from "./Card";


test("render without crashing", function () {
    render( < Card />);
});


test("match snapshot", () => {
    const { asFragment } = render(< Card />);
    expect( asFragment()).toMatchSnapshot();
})