import { track } from "@vercel/analytics";

type Placement = "header" | "hero" | "experience" | "contact";
type ContactChannel = "email" | "phone" | "whatsapp" | "cta";

export const trackResumeClick = (placement: Placement) =>
  track("resume_click", { placement });

export const trackSocialClick = (network: string, placement: Placement) =>
  track("social_click", { network: network.toLowerCase(), placement });

export const trackContactClick = (channel: ContactChannel, placement: Placement) =>
  track("contact_click", { channel, placement });
