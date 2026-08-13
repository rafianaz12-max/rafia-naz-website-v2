import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactInfo from "@/components/contact/ContactInfo";
import MapEmbed from "@/components/contact/MapEmbed";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Rafia Naz for web development, agentic AI, or mechanical engineering collaboration opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeading
          eyebrow="Say Hello"
          title="Get In Touch"
          gradientWord="Touch"
          description="Have a project, internship opportunity, or just want to talk about AI and frontend? Send a message."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Left Side - Map */}
          <div>
            <MapEmbed />
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-6">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </div>
  );
}