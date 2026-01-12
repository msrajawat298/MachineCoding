export function throttle(fn, wait = 300) {
  let last = 0;
  let timeoutId = null;
  return function (...args) {
    const ctx = this;
    const now = Date.now();
    const remaining = wait - (now - last);
    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      last = now;
      fn.apply(ctx, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        last = Date.now();
        timeoutId = null;
        fn.apply(ctx, args);
      }, remaining);
    }
  };
}

export default throttle;
