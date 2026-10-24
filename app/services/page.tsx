import { Container } from "@/components/layout/Container";

/**
 * Services section page (LP-06).
 *
 * Placeholder content — the real services grid lands with LP-06. Lives at
 * `/services` so the home page stays focused on the intro + About story.
 */
export default function ServicesPage() {
  return (
    <section
      id="services"
      className="border-t border-line bg-canvas py-section-y md:py-section-y-lg"
    >
      <Container className="max-w-prose">
        <h2 className="text-2xl font-bold md:text-3xl">Services</h2>
        <p className="mt-4 text-ink-muted">
          Services grid placeholder (scheduled for LP-06). Covers digital
          transformation, software engineering, and automation solutions.
        </p>
      </Container>
    </section>
  );
}
