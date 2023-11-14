import { render, screen } from "@testing-library/react";

import { HelloWorld } from "./HelloWorld";

describe("Hello World", () => {
  it("should render a HelloWorld-component", () => {
    render(<HelloWorld />);

    const textContent = screen.getByRole("article");

    //expect(screen.getByText(/Kul/)).toBeInTheDocument();
    expect(textContent).toHaveTextContent(/^Hello World$/);

    screen.debug();
  });
});
