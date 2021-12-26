import {useCallback, useEffect, useState} from 'react';

export const useHover = (ref: any): boolean => {
  const [isHovering, setIsHovering] = useState(false);

  const handleSetIsHovering = useCallback((newValue: boolean) => setIsHovering(newValue), []);

  const onHover = () => handleSetIsHovering(true);

  const onNotHover = () => handleSetIsHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;

    node.addEventListener('mousemove', onHover);
    node.addEventListener('mouseenter', onHover);
    node.addEventListener('mouseleave', onNotHover);

    return () => {
      node.removeEventListener('mousemove', onHover);
      node.removeEventListener('mouseenter', onHover);
      node.removeEventListener('mouseleave', onNotHover);
    };
  });

  return isHovering;
};
