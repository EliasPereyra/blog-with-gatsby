/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Seo from ".";

describe("Layout", () => {
  it("renders successfully", () => {
    const seo = render(<Seo title="Home" />);

    const title = screen.getByTitle("title");
    expect(title).toHaveTextContent("Home");
  });
});
