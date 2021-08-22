import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, loading, cb) => {

  const observer = useRef();

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    let callback = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        cb();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(ref.current);
  }, [loading]);
}