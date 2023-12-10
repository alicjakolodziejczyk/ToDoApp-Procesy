/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole("heading", { name: /Todo App/i });
    expect(heading).toBeInTheDocument();
  })

  it("renders an input", () => {
    render(<Home />)
    const input = screen.getByPlaceholderText(/Your todo here/i);
    expect(input).toBeInTheDocument();
  })

  it("renders a button with text", () => {
    render(<Home />)
    const button = screen.getByRole("button", { name: /Add/i });
    expect(button).toBeInTheDocument();
  })

})
