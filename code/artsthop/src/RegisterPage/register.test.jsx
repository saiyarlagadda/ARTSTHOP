import { render, screen } from "@testing-library/react";
import Register from "./RegisterPage";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";


describe("Register component", () => {


  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.getByRole("heading")
    expect(element).toBeInTheDocument();
  });

});


it("Show error if the form has no button", async () => {
  render(<Register />);
  const buttonElement = screen.getByRole("button");
  await userEvent.click(buttonElement);
});

it("To see the DOM structure", async () => {
  render(<Register />);
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);
  screen.debug();
});


