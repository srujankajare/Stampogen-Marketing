"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(({ className, type = "text", ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex-1 min-w-[220px] rounded-[4px] border border-paper/30 bg-paper/[0.06] px-4 py-3 text-[14.5px] text-charcoal placeholder:text-charcoal/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E0A24A]",
      className
    )}
    suppressHydrationWarning
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
