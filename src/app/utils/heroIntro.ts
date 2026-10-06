// Lets the header wait for the hero's greeting animation to finish before showing,
// and remembers that the intro was seen so it only plays on the first visit.

const DONE_EVENT = "herointro:done";

/** localStorage key; also read by the inline script in layout.tsx before first paint */
export const INTRO_SEEN_KEY = "heroIntroSeen";

// Storage can throw (private mode, blocked site data); then the intro just plays again
export const hasSeenHeroIntro = () => {
  try {
    return localStorage.getItem(INTRO_SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

export const markHeroIntroSeen = () => {
  try {
    localStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {}
};

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
