"use client";

import { Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function DownloadResumeButton() {
  return (
    <Button
      href="/resume/rafia_naz.pdf"
      external
      icon={Download}
      iconPosition="left"
    >
      Download Resume
    </Button>
  );
}
