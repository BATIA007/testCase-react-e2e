import { counterSelector } from "./selector";

describe('Counter Selectors Block', () => {
  test('Default', () => {
    expect(counterSelector({ counter: { value: 150 } })).toBe(150)
  });

  test('Empty', () => {
    expect(counterSelector({})).toBe(0)
  });
});