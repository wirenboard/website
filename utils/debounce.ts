export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  wait: number,
  immediate = false,
)  {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function <U>(this: U, ...args: Parameters<typeof callback>) {
    const context = this;
    const later = () => {
      timeout = null;

      if (!immediate) {
        callback.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;

    if (typeof timeout === "number") {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);

    if (callNow) {
      callback.apply(context, args);
    }
  };
}
