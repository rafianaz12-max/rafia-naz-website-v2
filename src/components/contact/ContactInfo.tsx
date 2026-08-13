import { Mail, MapPin, GraduationCap, Phone } from "lucide-react";
import { personalInfo } from "@/data/personal";
import GlassCard from "@/components/ui/GlassCard";
import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <GlassCard hover={false}>
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-foreground-muted">Phone</p>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="text-sm font-medium text-foreground hover:text-primary-text"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </GlassCard>

      <GlassCard hover={false}>
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-foreground-muted">Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm font-medium text-foreground hover:text-primary-text"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </GlassCard>

      <GlassCard hover={false}>
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-foreground-muted">Location</p>
            <p className="text-sm font-medium text-foreground">
              {personalInfo.location}
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard hover={false}>
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-foreground-muted">University</p>
            <p className="text-sm font-medium text-foreground">
              {personalInfo.university}
            </p>
          </div>
        </div>
      </GlassCard>

      <div>
        <p className="mb-3 text-sm font-medium text-foreground-muted">
          Find me elsewhere
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}
