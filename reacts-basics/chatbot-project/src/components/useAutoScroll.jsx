import { useEffect, useRef } from 'react';


// To use a function as a hook, the function name must
// start with "use".
export function useAutoScroll(dependencies) {
  // It's highly recommend to rename this to something
  // more generic like containerRef. This will make the
  // code make more sense if we ever reuse this code in
  // other components.
  const containerRef = useRef(null);
  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return containerRef;
}
