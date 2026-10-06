// Lets page sections start their entrance animations exactly when the
// full-screen loader starts fading out, instead of guessing with timers.

const DONE_EVENT = "pageloader:done";

declare global {
  interface Window {
    __pageLoaderDone?: boolean;
  }
}

export const markPageLoaderDone = () => {
  window.__pageLoaderDone = true;
  window.dispatchEvent(new Event(DONE_EVENT));
};

/** Calls `callback` once the loader is done (immediately if it already is). Returns a cleanup. */
export const onPageLoaderDone = (callback: () => void, fallbackMs = 2500) => {
  if (window.__pageLoaderDone) {
    callback();
    return () => {};
  }
  let called = false;
  const run = () => {
    if (called) return;
    called = true;
    callback();
  };
  window.addEventListener(DONE_EVENT, run, { once: true });
  const fallback = window.setTimeout(run, fallbackMs);
  return () => {
    window.removeEventListener(DONE_EVENT, run);
    window.clearTimeout(fallback);
  };
};
