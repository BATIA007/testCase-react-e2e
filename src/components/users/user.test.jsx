import { act, render, screen } from "@testing-library/react";
import { User } from "./user.jsx";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../helpers/renderWithRouter";
import axios from "axios";

jest.mock('axios')

describe('Users fetching test block', () => {
  let response
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 1,
          "name": "Leanne Graham",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
        },
      ]
    }
  })

  test('default fetch', async () => {
    axios.get.mockReturnValue(response)
    renderWithRouter(<User />)
    // screen.debug()
    const elems = await screen.findAllByTestId('user-link')
    expect(elems.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
    // screen.debug()
  });

  test('fetch + link', async () => {
    axios.get.mockReturnValue(response)
    renderWithRouter(<User />)
    // screen.debug()
    const elems = await screen.findAllByTestId('user-link')
    expect(elems.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
    await act(() => {
      userEvent.click(elems[1])
    })
    expect(screen.getByText(/user page/i))
    // screen.debug()
  });

  afterEach(() => {
    jest.clearAllMocks()
  })
});