/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from 'react';




const LazyImage = ({ imgUrl }) => {
  const [inView, setInView] = useState(false);

  const ref = useRef();

  const cb = (entries) => {
    entries.forEach((entry) => {
      // If the element is visible (in the viewport) set the state to true
      entry.isIntersecting && setInView(true);
    });
  };

  useEffect(() => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(cb, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    // Start observing the target node for configured mutations (in this case, when the element is visible)
    ref?.current && observer.observe(ref.current);

    // Clean up function to remove the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return inView ? (
    <img
      ref={ref}
      src={imgUrl}
      alt=""
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  ) : (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    ></div>
  );
};

export default LazyImage;
