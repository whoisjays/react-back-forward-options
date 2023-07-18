import { render, screen } from "@testing-library/react";
import React from "react";
import { BackForward } from "./index";

describe("<BackForward/>", () => {
  it("should render back forward", () => {
    render(<BackForward />);

    expect(screen.getByText("BackForward")).toBeVisible();
  });
});
