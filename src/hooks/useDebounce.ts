import {useCallback, useRef} from 'react';

export const useDebounce = (callback: any, delay: any) => {
  const timer = useRef();

  const debouncedCallback = useCallback((...args) => {

    if (timer.current) {
      clearTimeout(timer.current);
    }

    // @ts-ignore
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};