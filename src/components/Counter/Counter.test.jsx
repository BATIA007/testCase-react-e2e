import { fireEvent, screen } from '@testing-library/react';
import { renderWithRedux } from '../../helpers/renderWithRedux'
import { Counter } from './Counter';

describe('Counter Component Test Block', () => {
  test('increment', async () => {
    const { getByTestId } = renderWithRedux(<Counter />)
    const btn = screen.getByTestId('inc-btn')
    expect(getByTestId('val')).toHaveTextContent('0')
    await fireEvent.click(btn)
    expect(getByTestId('val')).toHaveTextContent('1')
  });
});