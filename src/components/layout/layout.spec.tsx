/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from ".";

describe("Layout", () => {
  it("renders the page title successfully", () => {
    render(<Layout pageTitle="Home" />);

    const siteTitle = screen.getByTestId("site-title");

    expect(siteTitle).toHaveAttribute("title", "Home");
  });
});
