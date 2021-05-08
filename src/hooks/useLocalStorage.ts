import { useState } from 'react';

const useLocalStorage = (
  key: string,
  initialValue?: any,
): [any, (value: any) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: any): void => {
    setStoredValue(value);

    console.log(value);
    console.log(JSON.stringify(value));
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
