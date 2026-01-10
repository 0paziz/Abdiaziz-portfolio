import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <a
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex group">
        <div className="flex-none">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 overflow-hidden">
            <img
              alt={altText}
              className="object-contain h-full w-full"
              src={logoUrl}
            />
          </span>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group-hover:-translate-y-[2px] transition-all duration-300 ease-out">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {badges && (
                <span className="inline-flex gap-x-1 ml-2">
                  {badges.map((badge, index) => (
                    <div
                      className="align-middle text-xs text-zinc-500 font-normal border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-2 py-0.5 rounded-full"
                      key={index}
                    >
                      {badge}
                    </div>
                  ))}
                </span>
              )}
              <ChevronRight
                className={cn(
                  "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right text-zinc-500">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs text-zinc-500 mt-1">{subtitle}</div>}
        </div>
      </div>
      {description && (
        <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{
             opacity: isExpanded ? 1 : 0,
             height: isExpanded ? "auto" : 0,
           }}
           transition={{
             duration: 0.7,
             ease: [0.16, 1, 0.3, 1],
           }}
           className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 pl-[3.25rem]"
        >
          {description}
        </motion.div>
      )}
    </a>
  );
}
