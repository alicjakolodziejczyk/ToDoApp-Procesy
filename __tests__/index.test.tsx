/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
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

  it("adds a todo", () => {
    render(<Home />);

    const inputElement = screen.getByPlaceholderText("Your todo here");
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    const todoText = "Drink coffe";
    fireEvent.change(inputElement, { target: { value: todoText } });
    fireEvent.click(buttonElement);

    // Check if the todo is added to the list
    expect(screen.getByText(todoText)).toBeInTheDocument();
  });
  it("adds multiple todos", () => {
    render(<Home />);

    const inputElement = screen.getByPlaceholderText("Your todo here");
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    const todoTexts = ["Learn React", "Learn GraphQL"];
    todoTexts.forEach((todoText) => {
      fireEvent.change(inputElement, { target: { value: todoText } });
      fireEvent.click(buttonElement);
    });

    // Check if the todos are added to the list
    todoTexts.forEach((todoText) => {
      expect(screen.getByText(todoText)).toBeInTheDocument();
    });
  });
  it("deletes a todo", async () => {
    render(<Home />);
    const inputElement = screen.getByPlaceholderText("Your todo here");
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    const todoText = "Prep a project";
    
    // Add a todo
    await waitFor(() => {
      fireEvent.change(inputElement, { target: { value: todoText } });
      fireEvent.click(buttonElement);
    });
  
    // Check if the todo is added to the list
    await waitFor(() => {
      expect(screen.getByText(todoText)).toBeInTheDocument();
    });
  
    // Delete the todo
    const liElement = screen.getByText(todoText).closest("li"); // Find the parent li element
    if(liElement === null) { throw new Error("liElement is null") }
    const deleteButton = within(liElement).getByRole("button", { name: /Delete/i }); // Find the delete button within the li
    fireEvent.click(deleteButton);
  
    // Check if the todo is removed from the list
    await waitFor(() => {
      expect(screen.queryByText(todoText)).toBeNull();
    });
  });
  
})
