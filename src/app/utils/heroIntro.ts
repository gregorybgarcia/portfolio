// Lets the header wait for the hero's greeting animation to finish before showing.

const DONE_EVENT = "herointro:done";

declare global {
  interface Window {
    __heroIntroDone?: boolean;
  }
}

export const markHeroIntroDone = () => {
  if (window.__heroIntroDone) return;
  window.__heroIntroDone = true;
  window.dispatchEvent(new Event(DONE_EVENT));
};

/** Calls `callback` once the intro is done (immediately if it already is). Returns a cleanup. */
export const onHeroIntroDone = (callback: () => void, fallbackMs = 10000) => {
  if (window.__heroIntroDone) {
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
