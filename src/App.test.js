// import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
test('test', () => { })
// describe('TEST BLOCK 1', () => {
//   test('test 1', () => {
//     render(<App />)
//     const title = screen.getByText(/title/i)
//     const button = screen.getByRole('button')
//     const input = screen.getByPlaceholderText(/username/i)
//     const link = screen.getByTestId('link')
//     expect(title).toBeInTheDocument()
//     expect(button).toContainHTML('Кнопка')
//     expect(input).toMatchSnapshot()
//     expect(link).toHaveClass('link')
//     //screen.debug()
//   });

//   test('test 2', async () => {
//     render(<App />)
//     const tab = screen.queryByTestId('tab')
//     const data = await screen.findByTestId('data')
//     expect(tab).not.toBeInTheDocument()
//     expect(data).toBeInTheDocument()
//   })

//   test('test 3', () => {
//     render(<App />)
//     const button = screen.getByRole('button')
//     const tab = screen.queryByTestId('tab')
//     expect(tab).not.toBeInTheDocument()
//     fireEvent.click(button)
//     expect(screen.queryByTestId('tab')).toBeInTheDocument()
//     fireEvent.click(button)
//     expect(screen.queryByTestId('tab')).toBeNull()
//   })

//   test('test 4', () => {
//     render(<App />)
//     const input = screen.getByPlaceholderText(/username/i)
//     expect(screen.getByTestId('value')).toContainHTML('')
//     act(() => {
//       userEvent.type(input, 'Name')
//     })
//     expect(screen.getByTestId('value')).toContainHTML('Name')
//   });
// });