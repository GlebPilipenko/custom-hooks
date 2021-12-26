import {useEffect, useRef} from 'react';

export const useScroll = (parentRef: any, childRef: any, callback: any) => {
  const observer = useRef<any>();

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0,
    };

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('Work');
        callback();
      }
    }, options);

    observer.current.observe(childRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.current.unobserve(childRef.current);
    };
  }, [callback]);
};
