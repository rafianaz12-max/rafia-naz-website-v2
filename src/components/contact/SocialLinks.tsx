import {  Linkedin,  Instagram,  Music2,  } from "lucide-react";
import { socialLinks } from "@/data/social";

const iconMap = { Linkedin, Instagram, Music2, };

export default function SocialLinks() {
  return (
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
            className="flex h-11 w-11 items-center justify-center rounded-full glass transition-all hover:-translate-y-1 hover:shadow-glow-sm"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
