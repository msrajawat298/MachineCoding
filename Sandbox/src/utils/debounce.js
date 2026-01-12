export function debounce(fn, wait = 300) {
  let timeoutId;
  return function (...args) {
    const ctx = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(ctx, args), wait);
  };
}

export default debounce;
