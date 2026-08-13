import { Metadata } from "next";

const siteUrl = "https://rafianaz.com"; // Replace with your actual site URL

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/og-image.png",
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Rafia Naz Portfolio",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
