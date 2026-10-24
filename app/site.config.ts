/**
 * Site configuration — who this build is for.
 *
 * Deliberately separate from app/theme.css. That file is the *visual* tone
 * (colour, type, spacing); this one is *identity* (names, links, legal text).
 * Splitting them means a copy change never risks a palette change, and a
 * rebrand can swap one without touching the other.
 *
 * Onboarding a new client is a two-file edit:
 *   app/theme.css     — their colours, fonts, rhythm
 *   app/site.config.ts — their name, links, legal details
 */

export type SocialPlatform = "linkedin" | "x" | "github" | "youtube";

export interface SocialLink {
  /** Visible-to-AT label. Do not rely on the icon alone to convey this. */
  readonly label: string;
  readonly href: string;
  readonly platform: SocialPlatform;
}

export interface SiteConfig {
  /** Wordmark text, rendered in lowercase to match the existing logo. */
  readonly name: string;
  /** Copyright holder in the footer. Use the registered legal entity name. */
  readonly legalName: string;
  readonly tagline: string;
  /** Absolute site URL, used for metadata and social preview images. */
  readonly url: string;
  readonly privacy: {
    readonly label: string;
    readonly href: string;
  };
  readonly social: readonly SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "appardas",
  legalName: "Appardas",
  tagline: "SME Digitalization Solutions",
  url: "https://appardas.com",
  privacy: {
    label: "Privacy Notice",
    href: "/privacy",
  },
  social: [
    {
      label: "Appardas on LinkedIn",
      href: "https://www.linkedin.com/company/appardas",
      platform: "linkedin",
    },
    {
      label: "Appardas on X",
      href: "https://x.com/appardas",
      platform: "x",
    },
    {
      /* The current hyperlink points to the Appardas Dev Space GitHub repository */
      label: "Appardas on GitHub",
      href: "https://github.com/Appardas-Dev-Space",
      platform: "github",
    },
  ],
};
