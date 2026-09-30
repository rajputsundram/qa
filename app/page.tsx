"use client";

import { useState } from "react";

const veryShortQuestions = [
  {
    q: "What is an app?",
    a: "An app (application) is a software program designed to perform a specific task on a computer or mobile device.",
  },
  {
    q: "Give one example of a mobile operating system.",
    a: "Android.",
  },
  {
    q: "Name one educational app.",
    a: "Google Classroom.",
  },
  {
    q: "What does a productivity app help with?",
    a: "It helps users complete tasks, manage information, and work efficiently.",
  },
  {
    q: "Which store is used for Android app installation?",
    a: "Google Play Store.",
  },
];

const shortQuestions = [
  {
    q: "Name the three types of applications.",
    a: (
      <ol className="list-decimal pl-5 space-y-1">
        <li>Native apps</li>
        <li>Web apps</li>
        <li>Hybrid apps</li>
      </ol>
    ),
  },
  {
    q: "What are native apps? Give one example.",
    a: (
      <>
        <p>
          Native apps are applications developed specifically for a particular
          operating system, such as Android or iOS.
        </p>
        <p className="mt-2">
          <strong>Example:</strong> Android Camera app.
        </p>
      </>
    ),
  },
  {
    q: "How are hybrid apps different from native apps?",
    a: (
      <p>
        A native app is developed specifically for one operating system,
        whereas a hybrid app combines features of web and native applications
        and can work on different platforms using a common codebase.
      </p>
    ),
  },
  {
    q: "What kind of apps help with school learning?",
    a: (
      <>
        <p>
          Educational apps help students with school learning. They provide
          lessons, videos, quizzes, notes, and other learning materials.
        </p>
        <p className="mt-2">
          <strong>Examples:</strong> Google Classroom and Khan Academy.
        </p>
      </>
    ),
  },
  {
    q: "List any two websites used for making apps without coding.",
    a: (
      <ol className="list-decimal pl-5 space-y-1">
        <li>AppMachine</li>
        <li>Thunkable</li>
      </ol>
    ),
  },
];

const longQuestions = [
  {
    q: "Explain the difference between mobile apps, desktop apps, and web apps.",
    a: (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] border-collapse text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-blue-400 p-3 text-left">
                Mobile Apps
              </th>
              <th className="border border-blue-400 p-3 text-left">
                Desktop Apps
              </th>
              <th className="border border-blue-400 p-3 text-left">
                Web Apps
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">
                Designed mainly for smartphones and tablets.
              </td>
              <td className="border p-3">
                Designed for computers and laptops.
              </td>
              <td className="border p-3">
                Run through a web browser.
              </td>
            </tr>

            <tr className="bg-slate-50">
              <td className="border p-3">
                Usually installed on a mobile device.
              </td>
              <td className="border p-3">
                Usually installed on a computer.
              </td>
              <td className="border p-3">
                Usually do not need installation.
              </td>
            </tr>

            <tr>
              <td className="border p-3">
                Can use features such as camera and GPS.
              </td>
              <td className="border p-3">
                Can use computer hardware and resources.
              </td>
              <td className="border p-3">
                Need a web browser and usually an internet connection.
              </td>
            </tr>

            <tr className="bg-slate-50">
              <td className="border p-3">Example: WhatsApp mobile app</td>
              <td className="border p-3">Example: Microsoft Word</td>
              <td className="border p-3">Example: Google Docs</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    q: "Describe the three types of mobile apps with examples.",
    a: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-blue-700">1. Native Apps</h4>
          <p>
            These apps are developed for a specific operating system. They
            provide good performance and can access device features.
          </p>
          <p className="mt-1">
            <strong>Example:</strong> Android Camera app.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-blue-700">2. Web Apps</h4>
          <p>
            These applications are accessed through a web browser. They do not
            usually need to be installed on the device.
          </p>
          <p className="mt-1">
            <strong>Example:</strong> Google Docs in a web browser.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-blue-700">3. Hybrid Apps</h4>
          <p>
            These apps combine features of native apps and web applications.
            They can work on more than one platform using common code.
          </p>
          <p className="mt-1">
            <strong>Example:</strong> Apps developed using Ionic or similar
            frameworks.
          </p>
        </div>
      </div>
    ),
  },

  {
    q: "Write step-by-step how to install an app on an Android phone.",
    a: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>Open the <strong>Google Play Store</strong>.</li>
        <li>Search for the required app.</li>
        <li>Select the app from the search results.</li>
        <li>Tap the <strong>Install</strong> button.</li>
        <li>Wait for the app to download and install.</li>
        <li>Tap <strong>Open</strong> to start using the app.</li>
      </ol>
    ),
  },

  {
    q: "Explain how to create an app using www.appmachine.com.",
    a: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>Open the AppMachine website.</li>
        <li>Create an account or log in.</li>
        <li>Choose an app template.</li>
        <li>Enter the name and basic information of the app.</li>
        <li>Add pages, images, text, and other content.</li>
        <li>Customize the design and appearance.</li>
        <li>Preview and test the app.</li>
        <li>Make necessary changes.</li>
        <li>Build or publish the app.</li>
      </ol>
    ),
  },
];

function QuestionCard({
  number,
  question,
  answer,
}: {
  number: number;
  question: string;
  answer: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-start gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
            {number}
          </span>

          <span className="pt-1 font-semibold text-slate-800">
            {question}
          </span>
        </div>

        <span className="text-2xl text-blue-600">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 pl-[4.5rem] leading-7 text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-sm">
            Class 6 • Computer
          </div>

          <h1 className="text-3xl font-extrabold md:text-5xl">
            Chapter 6 – Applications
          </h1>

          <p className="mt-3 max-w-2xl text-blue-100">
            Question & Answer notes for quick revision and exam preparation.
          </p>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-6xl px-5 py-8">
        {/* Quick navigation */}
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <a
            href="#very-short"
            className="rounded-xl bg-white p-4 text-center font-semibold shadow-sm transition hover:bg-blue-50"
          >
            Very Short Answers
          </a>

          <a
            href="#short"
            className="rounded-xl bg-white p-4 text-center font-semibold shadow-sm transition hover:bg-blue-50"
          >
            Short Answers
          </a>

          <a
            href="#long"
            className="rounded-xl bg-white p-4 text-center font-semibold shadow-sm transition hover:bg-blue-50"
          >
            Long Answers
          </a>
        </div>

        {/* Very Short */}
        <section id="very-short" className="mb-12 scroll-mt-6">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Section E
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Very Short Answer Questions
            </h2>
          </div>

          <div className="space-y-3">
            {veryShortQuestions.map((item, index) => (
              <QuestionCard
                key={item.q}
                number={index + 1}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </section>

        {/* Short */}
        <section id="short" className="mb-12 scroll-mt-6">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Section F
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Short Answer Questions
            </h2>
          </div>

          <div className="space-y-3">
            {shortQuestions.map((item, index) => (
              <QuestionCard
                key={item.q}
                number={index + 1}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </section>

        {/* Long */}
        <section id="long" className="scroll-mt-6">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Section G
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Long Answer Questions
            </h2>
          </div>

          <div className="space-y-3">
            {longQuestions.map((item, index) => (
              <QuestionCard
                key={item.q}
                number={index + 1}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 text-center text-sm text-slate-500">
          Class 6 Computer • Chapter 6 • Applications
        </div>
      </footer>
    </main>
  );
}