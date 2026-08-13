import { GraduationCap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { personalInfo } from "@/data/personal";

export default function EducationCard() {
  return (
    <GlassCard hover={false}>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            {personalInfo.degree}
          </h3>
          <p className="mt-1 text-sm text-foreground-muted">
            {personalInfo.university}
          </p>
          <p className="mt-1 text-xs text-foreground-muted">
            {personalInfo.location}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
