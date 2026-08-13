"use client";

import { usePathname } from "next/navigation";

/**
 * Returns whether a given nav href matches the current route,
 * treating "/" as an exact match and other routes as prefix matches.
 */
export function useActiveSection() {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return { pathname, isActive };
}
