import Image from "next/image";

import { Container } from "@/components/layout/Container";
import about from "@/content/about.json";

/** Heading level to token-based type style, so the content file stays the
 * single place that controls both copy and heading hierarchy. */
const HEADING_STYLES: Readonly<Record<number, string>> = {
  1: "text-3xl font-bold md:text-4xl",
  2: "text-2xl font-bold md:text-3xl",
  3: "text-xl font-bold",
};

/**
 * About Us section (LP-05).
 *
 * Two-column layout on desktop (story copy + supporting image), stacked on
 * mobile. The column order is copy-first / image-second.
 *
 * Eyebrow, heading (level + text) and paragraphs are loaded from
 * `@/content/about.json` so the CONTENT-01 pass only ever edits the content
 * file - no markup changes are needed when the real story lands. Placeholder
 * copy is in place until then.
 */
export function AboutUs() {
  const { eyebrow, heading, paragraphs } = about;
  const headingStyle = HEADING_STYLES[heading.level] ?? HEADING_STYLES[2];

  return (
    <section
      id="about"
      className="border-t border-line bg-surface py-section-y md:py-section-y-lg"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Story copy */}
          <div>
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-wide text-link">
                {eyebrow}
              </p>
            ) : null}
            {heading.level === 1 ? (
              <h1 className={headingStyle}>{heading.text}</h1>
            ) : heading.level === 2 ? (
              <h2 className={headingStyle}>{heading.text}</h2>
            ) : (
              <h3 className={headingStyle}>{heading.text}</h3>
            )}
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-ink-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Supporting image */}
          <div>
            <Image
              src="/appardas-logo.png"
              alt="Appardas team"
              width={1476}
              height={938}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
