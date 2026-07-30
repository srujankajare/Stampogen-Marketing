"use client";

import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-navy",
  {
    variants: {
      variant: {
        primary:
          "bg-ink-red text-paper shadow-stamp hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#262220]",
        ghost:
          "bg-transparent border-[1.5px] border-charcoal text-charcoal hover:bg-charcoal hover:text-paper",
        navy: "bg-ink-navy text-paper hover:bg-[#16283f]",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = forwardRef(({ className, variant, size, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    suppressHydrationWarning
    {...props}
  />
));
Button.displayName = "Button";

export { Button, buttonVariants };
