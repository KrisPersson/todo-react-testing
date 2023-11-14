import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("On/off button", () => {
  it("should render a Button-component with text 'On'", () => {
    render(<Button />);

    const button = screen.getByRole("button");
    // fireEvent.click(button);

    expect(button).toHaveTextContent(/^On$/);

    screen.debug();
  });

  it("should render a Button-component with text 'Off'", () => {
    render(<Button />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(button).toHaveTextContent(/^Off$/);

    screen.debug();
  });
});
