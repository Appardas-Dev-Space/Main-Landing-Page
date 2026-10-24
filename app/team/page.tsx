import { Container } from "@/components/layout/Container";

/**
 * Meet the Team section page (LP-07).
 *
 * Placeholder content — the team grid teaser lands with LP-07. Lives at
 * `/team` so the home page stays focused on the intro + About story.
 */
export default function TeamPage() {
  return (
    <section
      id="team"
      className="border-t border-line bg-surface py-section-y md:py-section-y-lg"
    >
      <Container className="max-w-prose">
        <h2 className="text-2xl font-bold md:text-3xl">Meet the Team</h2>
        <p className="mt-4 text-ink-muted">
          Team and staff digital ID teaser placeholder (scheduled for LP-07).
        </p>
      </Container>
    </section>
  );
}
