import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("HomePage", () => {
  it("renders the heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("This is the homepage");
  });

  it("renders the description", () => {
    render(<Home />);
    const description = screen.getByText(/This is the homepage/i);
    expect(description).toBeInTheDocument();
  });
});
