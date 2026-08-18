import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Frontend Development",
    icon: "Code2",
    description:
      "Building fast, accessible, component-driven interfaces with React, Next.js, and TypeScript.",
    features: [
      "Component architecture & design systems",
      "State management & data fetching",
      "Type-safe codebases",
    ],
  },
  {
    id: "svc-2",
    title: "Responsive Design",
    icon: "Smartphone",
    description:
      "Interfaces that adapt cleanly from mobile to ultra-wide, tested across real breakpoints.",
    features: [
      "Mobile first layout systems",
      "Cross device QA",
      "Fluid typography & spacing",
    ],
  },
  {
    id: "svc-3",
    title: "Next.js Development",
    icon: "Layers",
    description:
      "Production grade Next.js apps using the App Router, server components, and SEO best practices.",
    features: [
      "App Router architecture",
      "SEO metadata & sitemaps",
      "Performance-optimized rendering",
    ],
  },
  
  
  {
    id: "svc-4",
    title: "UI Development",
    icon: "PenTool",
    description:
      "Translating designs (or design intent) into polished, animated, production-ready UI.",
    features: [
      "Motion design with Framer Motion",
      "Glassmorphism & modern visual systems",
      "Design-to-code fidelity",
    ],
  },
];
