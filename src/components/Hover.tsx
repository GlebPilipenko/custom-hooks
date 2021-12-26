import {useRef} from 'react';
import {useHover} from '../hooks/useHover';

export const Hover = () => {
  const divElement = useRef<any>();
  const useHovering = useHover(divElement);

  return (
    <div
      ref={divElement}
      style={{width: 300, height: 300, background: useHovering ? 'red' : 'green'}}
    />
  );
};