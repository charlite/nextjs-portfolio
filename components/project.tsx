"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FaApple, FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  featured?: boolean;
  isFocused?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  appStoreUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  screenshotUrl,
  url,
  appStoreUrl,
  githubUrl,
  accent,
  glow,
  index,
  featured = false,
  isFocused = false,
  onHoverStart,
  onHoverEnd,
}: ProjectProps) {
  const focusShadow = glow.replace("group-hover:", "");

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={featured ? "lg:col-span-2" : undefined}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div
        className={clsx(
          "group relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none",
          glow,
          isFocused && ["-translate-y-1", "shadow-2xl", focusShadow]
        )}
      >
        <div
          className={clsx(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100",
            accent,
            isFocused && "opacity-100"
          )}
        />

        <div
          className={`relative flex h-full ${featured ? "flex-col lg:flex-row" : "flex-col"}`}
        >
          <div
            className={`relative overflow-hidden ${
              featured ? "h-56 lg:h-auto lg:w-[42%] lg:min-h-[20rem]" : "h-52"
            }`}
          >
            <Image
              src={screenshotUrl}
              alt={`${title} screenshot`}
              fill
              quality={95}
              sizes={featured ? "(max-width: 1024px) 100vw, 420px" : "320px"}
              className={clsx(
                "object-cover object-top transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100",
                isFocused ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
              )}
            />

            <div
              className={clsx(
                "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)] transition-opacity duration-500 group-hover:opacity-0 dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]",
                isFocused && "opacity-0"
              )}
            />

            <div
              className={clsx(
                "absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:scale-95 group-hover:opacity-0",
                isFocused ? "scale-95 opacity-0" : "opacity-100"
              )}
            >
              <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                <Image
                  src={imageUrl}
                  alt={`${title} icon`}
                  fill
                  quality={95}
                  sizes={featured ? "(max-width: 1024px) 100vw, 320px" : "256px"}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <span className="absolute left-5 top-5 z-10 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold tracking-widest text-gray-600 backdrop-blur-md dark:border-white/10 dark:bg-black/30 dark:text-white/70">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div
            className={`relative flex flex-1 flex-col ${
              featured ? "p-7 sm:p-9 lg:p-10" : "p-6 sm:p-7"
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3
                className={`font-semibold tracking-tight text-gray-900 dark:text-white ${
                  featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                }`}
              >
                {title}
              </h3>
              <HiArrowUpRight
                className={clsx(
                  "mt-1 h-5 w-5 shrink-0 text-gray-400 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-700 dark:group-hover:text-white",
                  isFocused && "translate-x-0.5 -translate-y-0.5 text-gray-700 dark:text-white"
                )}
              />
            </div>

            <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-white/70 sm:text-[0.95rem]">
              {description}
            </p>

            <ul className="mb-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.03] hover:bg-gray-950 active:scale-[0.98] dark:bg-white dark:text-gray-900 dark:hover:bg-white/90"
              >
                Website
                <HiArrowUpRight className="h-4 w-4" />
              </a>
              {appStoreUrl ? (
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-sm font-medium text-gray-800 transition hover:scale-[1.03] hover:bg-white active:scale-[0.98] dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  <FaApple className="h-4 w-4" />
                  App Store
                </a>
              ) : null}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-sm font-medium text-gray-800 transition hover:scale-[1.03] hover:bg-white active:scale-[0.98] dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
