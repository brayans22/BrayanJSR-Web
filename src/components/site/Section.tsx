import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-24 sm:py-32",
        className,
      )}
    >
      <div className={cn("mx-auto max-w-7xl px-6", containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className="mb-14 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary/80">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl font-semibold leading-tight text-gradient sm:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}