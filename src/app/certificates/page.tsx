import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CertificateGallery from "@/components/certificates/CertificateGallery";

export const metadata: Metadata = buildMetadata({
  title: "Certificates",
  description:
    "Certificates earned by Rafia Naz in mechanical engineering, simulation tools, and data science.",
  path: "/certificates",
});

export default function CertificatesPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certificates"
          gradientWord="Certificates"
          description="Click any certificate to preview it in detail, verify the credential, or download a copy."
        />
        <CertificateGallery />
      </Container>
    </div>
  );
}
