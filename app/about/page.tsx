import Link from "next/link";
import { shared } from "../strings";
import { aboutStrings } from "./strings";
import { T, msg, useMessages } from 'gt-next';

const values = [
  { title: msg("Transparency"), description: msg("We build in the open and share what we learn.") },
  { title: msg("Craft"), description: msg("Every detail matters, from code quality to user experience.") },
  { title: msg("Speed"), description: msg("Ship fast, iterate often, and learn from real usage.") },
  { title: msg("Empathy"), description: msg("We design for people, not just systems.") },
];

export default function About() {
  const m = useMessages();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <nav className="absolute top-8 flex gap-6 text-sm font-medium text-gray-500">
        <Link href="/" className="hover:text-black">{m(shared.navHome)}</Link>
        <Link href="/about" className="text-black">{m(shared.navAbout)}</Link>
        <Link href="/contact" className="hover:text-black">{m(shared.navContact)}</Link>
      </nav>

      <h1 className="text-4xl font-bold mb-4">{aboutStrings.heading}</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-md text-center">
        {aboutStrings.intro}
      </p>

      <div className="grid grid-cols-1 gap-8 max-w-lg w-full mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-2">{aboutStrings.missionLabel}</h2>
          <p className="text-gray-600">{aboutStrings.missionText}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">{aboutStrings.teamLabel}</h2>
          <p className="text-gray-600">{aboutStrings.teamText}</p>
        </div>
      </div>

      <div className="max-w-lg w-full">
        <T>
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
        </T>
        <T>
          <p className="text-gray-600 mb-6">
            These are the principles that guide every decision we make as a team.
            They are not just words on a page — they shape how we work day to day.
          </p>
        </T>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value) => (
            <div key={value.title} className="border rounded-xl p-4">
              <h3 className="font-semibold mb-1">{m(value.title)}</h3>
              <p className="text-sm text-gray-500">{m(value.description)}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="absolute bottom-8 text-sm text-gray-400">
        {m(shared.copyright)}
      </footer>
    </main>
  );
}
