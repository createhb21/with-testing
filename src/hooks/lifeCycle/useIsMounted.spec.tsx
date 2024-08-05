import { renderHook } from '@testing-library/react-hooks';

import { useIsMounted } from './useIsMounted';

describe('useIsMounted', () => {
  it('should return "true" when mounted', () => {
    const { result } = renderHook(() => useIsMounted());

    expect(result.current).toBe(true);
  });
});
