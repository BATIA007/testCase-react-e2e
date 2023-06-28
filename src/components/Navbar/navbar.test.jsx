import { Navbar } from "./navbar";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../helpers/renderWithRouter";
import { act, screen } from "@testing-library/react";

describe('NavbarTests', () => {
  test('MainPage', async () => {
    renderWithRouter(<Navbar />)
    const link = screen.getByTestId('main-link')
    await act(() => {
      userEvent.click(link)
    })
    expect(screen.getByText(/main page/i)).toBeInTheDocument()
  });

  test('UsersPage', async () => {
    renderWithRouter(<Navbar />)
    const link = screen.getByTestId('users-link')
    await act(() => {
      userEvent.click(link)
    })
    expect(screen.getByText(/users page/i)).toBeInTheDocument()
  });

  test('AboutPage', async () => {
    renderWithRouter(<Navbar />)
    const link = screen.getByTestId('about-link')
    await act(() => {
      userEvent.click(link)
    })
    expect(screen.getByText(/about page/i)).toBeInTheDocument()
  });
});