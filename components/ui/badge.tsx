"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default: "theme-badge",
        secondary:
          "bg-secondary text-secondary-foreground border border-border",
        outline: "border border-border text-foreground bg-transparent",
        gold: "bg-amber-500/15 border border-amber-500/40 text-amber-500 dark:text-amber-300",
        crimson: "bg-red-500/15 border border-red-500/40 text-red-500 dark:text-red-300",
        blue: "bg-blue-500/15 border border-blue-500/40 text-blue-500 dark:text-blue-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
