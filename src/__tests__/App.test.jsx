import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "../App";

describe("Test for App", () => {
  it("First test", () => {
    let a = "a";

    render(<App />);
    const text = screen.getByText("App");
    expect(text).toBeInTheDocument();
  });
});
