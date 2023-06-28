import counter, { increment, decrement } from "./counter";

describe('Counter Reducer Test Block', () => {
  test('increment', () => {
    expect(counter({ value: 0 }, increment)).toEqual({ value: 1 })
  });

  test('decrement', () => {
    expect(counter({ value: 0 }, decrement)).toEqual({ value: -1 })
  });

  test('empty state', () => {
    expect(counter(undefined, increment)).toEqual({ value: 1 })
    expect(counter(undefined, decrement)).toEqual({ value: -1 })
  });
});