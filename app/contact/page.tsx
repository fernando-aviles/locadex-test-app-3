import Link from "next/link";
import { shared } from "../strings";
import { contactStrings } from "./strings";

const faqs = [
  { question: "What is your typical response time?", answer: "We usually reply within 24 hours on business days." },
  { question: "Do you offer phone support?", answer: "Not at this time. Email is the fastest way to reach us." },
  { question: "Can I schedule a demo?", answer: "Absolutely — just send us a message and we will set one up." },
];

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <nav className="absolute top-8 flex gap-6 text-sm font-medium text-gray-500">
        <Link href="/" className="hover:text-black">{shared.navHome}</Link>
        <Link href="/about" className="hover:text-black">{shared.navAbout}</Link>
        <Link href="/contact" className="text-black">{shared.navContact}</Link>
      </nav>

      <h1 className="text-4xl font-bold mb-4">{contactStrings.heading}</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-md text-center">
        {contactStrings.intro}
      </p>

      <div className="grid grid-cols-1 gap-6 max-w-md w-full">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">{contactStrings.emailLabel}</h2>
          <p className="text-gray-800">{contactStrings.emailValue}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">{contactStrings.locationLabel}</h2>
          <p className="text-gray-800">{contactStrings.locationValue}</p>
        </div>

        <form className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder={contactStrings.formNamePlaceholder}
            className="border rounded-lg px-4 py-2 text-sm"
          />
          <input
            type="email"
            placeholder={contactStrings.formEmailPlaceholder}
            className="border rounded-lg px-4 py-2 text-sm"
          />
          <textarea
            placeholder={contactStrings.formMessagePlaceholder}
            rows={4}
            className="border rounded-lg px-4 py-2 text-sm"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-full py-2 px-6 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            {contactStrings.formSubmitButton}
          </button>
        </form>
      </div>

      <div className="max-w-md w-full mt-12">
        <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
        <p className="text-sm text-gray-500 mb-4">
          Here are some common questions we get. If yours is not listed, feel
          free to reach out using the form above.
        </p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="border rounded-xl p-4">
              <h3 className="font-semibold mb-1">{faq.question}</h3>
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="absolute bottom-8 text-sm text-gray-400">
        {shared.copyright}
      </footer>
    </main>
  );
}
