import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Frontend development, responsive design, Next.js builds, AI integration, performance optimization, and UI development services offered by Rafia Naz.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeading
          eyebrow="What I Offer"
          title="Services"
          gradientWord="Services"
          description="Focused on frontend craft and AI integration — from a single component to a full production build."
        />
        <ServicesGrid />
      </Container>
    </div>
  );
}
