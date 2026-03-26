import Image from "next/image";
import Link from "next/link";
import { LocaleSelector } from "gt-next";
import { shared } from "./strings";

const features = [
  "Shared string imports across pages",
  "Local page-specific string constants",
  "Inline hardcoded copy in JSX",
  "Array-driven rendered content",
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full items-center justify-between">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link href="/" className="text-black dark:text-white">{shared.navHome}</Link>
            <Link href="/about" className="hover:text-black dark:hover:text-white">{shared.navAbout}</Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white">{shared.navContact}</Link>
            <LocaleSelector />
          </nav>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to {shared.appName}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This demo app showcases different patterns for managing strings in a
            Next.js application. Each page pulls text from multiple sources.
          </p>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">
            What this demo covers
          </h2>
          <ul className="flex flex-col gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-black dark:bg-zinc-400 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <footer className="text-sm text-gray-400">
          {shared.copyright}
        </footer>
      </main>
    </div>
  );
}
