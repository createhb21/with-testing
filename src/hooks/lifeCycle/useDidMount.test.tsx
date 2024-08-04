import { useState } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { cleanup, fireEvent, render, screen } from '@/utils/test/testUtils';
import { useDidMount } from './useDidMount';

describe('hooks/lifeCycle/useDidMount', () => {
  test('정의되어 있어야 한다', () => {
    expect(useDidMount).toBeDefined();
  });

  test('effectCallback이 실행되어야 한다', () => {
    const effectCallback = jest.fn();
    renderHook(() => useDidMount(effectCallback));
    expect(effectCallback).toHaveBeenCalled();
  });

  test('rerender시 1번 실행되어야 한다', () => {
    const effectCallback = jest.fn();
    const { rerender } = renderHook(() => useDidMount(effectCallback));
    rerender();
    expect(effectCallback).toHaveBeenCalledTimes(1);
  });

  describe('useDidMount Component', () => {
    const BUTTON_TEXT = 'change';
    const mockCallback = jest.fn();

    function App() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, setState] = useState(0);

      const onClickButton = () => setState((prev) => prev + 1);

      useDidMount(mockCallback);

      return (
        <div>
          <button type="button" onClick={onClickButton}>
            {BUTTON_TEXT}
          </button>
        </div>
      );
    }

    afterEach(() => {
      jest.clearAllMocks();
      cleanup();
    });

    test('mockCallback이 실행되어야 한다', () => {
      render(<App />);
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });

    test('mockCallback은 상태가 변해도 1번만 실행되어야 한다', () => {
      render(<App />);
      expect(mockCallback).toHaveBeenCalledTimes(1);

      const button = screen.getByText(BUTTON_TEXT);
      fireEvent.click(button);
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
