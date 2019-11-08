// test.js or spec.js both workimport
import React from "react";
import { Input } from "./Input";
import { render } from "@testing-library/react";

describe("Input", () => {
  it("should tie the label to the input via htmlFor", () => {
    // arrange
    // act
    const { getByLabelText, debug } = render(
      <Input id="test" label="test" onChange={() => {}} value="" />
    );
    debug(); // displays syntax highlighted JSX to the terminal
    // assert
    getByLabelText("test");
  });
});
