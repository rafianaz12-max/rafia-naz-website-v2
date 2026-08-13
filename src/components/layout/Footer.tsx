import Link from "next/link";
import { Linkedin, Instagram, Music2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { socialLinks } from "@/data/social";
import { personalInfo } from "@/data/personal";

const iconMap = { Linkedin, Instagram, Music2 };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-border">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link
            href="/"
            className="font-display text-lg font-bold text-foreground"
          >
            Rafia<span className="text-gradient">Naz</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-foreground-muted">
            {personalInfo.tagline}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Navigate
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Connect
          </h3>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass transition-transform hover:-translate-y-1 hover:shadow-glow-sm"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-4 block text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            className="mt-1 block text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {personalInfo.phone}
          </a>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-foreground-muted md:flex-row">
          <p>© {year} Rafia Naz. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Framer Motion.</p>
        </Container>
      </div>
    </footer>
  );
}
