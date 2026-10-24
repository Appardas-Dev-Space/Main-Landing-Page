import { Container } from "@/components/layout/Container";

/**
 * Contact Us section page (LP-08).
 *
 * Contact Us page Lives at `/contact` so that the home page only shows intro + About story.
 */
export default function ContactPage() {
  return (
    <section
      id="contact"
      className="border-t border-line bg-canvas py-section-y md:py-section-y-lg"
    >
      <Container className="max-w-prose">
        <h2 className="text-2xl font-bold md:text-3xl">Contact Us</h2>
        <p className="mt-4 text-ink-muted">
          Inquiry and project kickoff placeholder (scheduled for LP-08).
        </p>
        <div className="mt-6">
          <a
            href="mailto:contact@appardas.com"
            className="focus-ring-inset inline-flex rounded-md bg-action px-5 py-3 text-sm font-semibold text-action-text shadow-sm transition-colors hover:bg-action-hover"
          >
            Send an Inquiry
          </a>
        </div>
      </Container>
    </section>
  );
}
