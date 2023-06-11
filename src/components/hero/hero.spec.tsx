/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";
import Hero from ".";

describe("Hero", () => {
  it("Renders succesfully", () => {
    const hero = render(<Hero />);

    expect(hero).toMatchSnapshot();
  });
});
