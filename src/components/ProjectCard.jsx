import { cn } from "../lib/utils";

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 ease-out h-full rounded-lg bg-white dark:bg-zinc-900",
        className
      )}
    >
      <div className="block cursor-pointer">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto w-full h-auto aspect-video object-cover object-top"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-auto aspect-video overflow-hidden object-cover object-top"
          />
        )}
      </div>
      <div className="flex flex-col px-4 py-3">
        <div className="mt-1 space-y-1">
          <time className="font-sans text-xs text-zinc-500">{dates}</time>
          <h2 className="font-semibold text-base tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h2>
          <div className="prose max-w-full text-pretty font-sans text-xs text-zinc-500 dark:text-zinc-400">
            {description}
          </div>
        </div>
      </div>
      <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-4 py-3">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <div
                className="px-1 py-0.5 text-[10px] rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 px-4 py-3 border-t border-zinc-100 dark:border-zinc-800">
        {links &&
          links.length > 0 &&
          links.map((link, idx) => (
            <a
              href={link?.href}
              key={idx}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[10px] sm:text-xs font-medium px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {link.icon}
              {link.type}
            </a>
          ))}
      </div>
    </div>
  );
}
