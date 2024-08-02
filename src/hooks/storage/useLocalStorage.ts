import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;

        if (nextValue === null) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(nextValue));
        }

        return nextValue;
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
