import { act, renderHook } from '@testing-library/react-hooks';
import useLocalStorage from './useLocalStorage';

const STORAGE_KEY = 'storage_key';

describe('useLocalStorage', () => {
  test('Check initial value return', () => {
    const initialState = { a: 'foo', b: 'bar' };
    const { result } = renderHook(() => useLocalStorage(STORAGE_KEY, initialState));

    expect(result.current[0]).toEqual(initialState);
  });

  test('Verify that the initial value is correctly saved in localStorage', () => {
    const initialState = { a: 'foo', b: 'bar' };
    const { result } = renderHook(() => useLocalStorage(STORAGE_KEY, { a: 'foo', b: 'bar' }));

    act(() => {
      result.current[1](initialState);
    });

    expect(localStorage.getItem(STORAGE_KEY)).toEqual(JSON.stringify(initialState));
  });

  test('Reset localStorage with a new value', () => {
    const initialState = { a: 'foo', b: 'bar' };
    const { result } = renderHook(() => useLocalStorage(STORAGE_KEY, initialState));
    const newValue = { a: 'baz', b: 'qux' };
    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toEqual(newValue);
    expect(localStorage.getItem(STORAGE_KEY)).toEqual(JSON.stringify(newValue));
  });

  test('Verify that localStorage setItem is called once', () => {
    const spyStorage = jest.spyOn(Storage.prototype, 'setItem');

    const initialState = { a: 'foo', b: 'bar' };
    const { result } = renderHook(() => useLocalStorage(STORAGE_KEY, initialState));
    const newValue = { a: 'baz', b: 'qux' };
    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toEqual(newValue);
    expect(spyStorage).toHaveBeenCalledTimes(1);
    spyStorage.mockReset();
  });
});
