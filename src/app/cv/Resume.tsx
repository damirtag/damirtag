import { resumes } from "./content";

const sectionTitle = "mb-4 text-xs text-phos-300 sm:text-sm";

export function Resume({ lang }: { lang: keyof typeof resumes }) {
  const cv = resumes[lang];

  return (
    <main lang={lang} className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
      <nav
        aria-label={cv.navigation}
        className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xl"
      >
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Keep CV navigation free of client components. */}
        <a href="/" className="text-phos-300 hover:underline">
          ← damir.top
        </a>
        <div className="flex gap-1 border border-phos-700 bg-ink-900 p-1">
          {(["en", "ru"] as const).map((language) => (
            <a
              key={language}
              href={language === "en" ? "/cv" : "/cv/ru"}
              hrefLang={language}
              aria-current={lang === language ? "page" : undefined}
              className={
                lang === language
                  ? "bg-phos-300 px-3 text-ink-950"
                  : "px-3 text-phos-300 hover:bg-ink-800"
              }
            >
              {language.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      <article
        className={
          lang === "ru"
            ? "px-box [font-family:ui-monospace,monospace] text-base leading-relaxed"
            : "px-box"
        }
      >
        <header className="border-b-2 border-ink-700 px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
            <h1 className="text-lg uppercase text-neutral-100 sm:text-2xl">
              {cv.name}
            </h1>
            <a
              href={cv.pdf}
              download
              className="px-box px-3 py-1 text-lg text-phos-300"
            >
              <span aria-hidden="true">↓ </span>
              {cv.download} PDF
            </a>
          </div>
          <p className="mt-4 text-lg text-phos-300 sm:text-xl">
            {cv.role} · Go / Node.js / Python
          </p>
          <p className="mt-1 text-neutral-300">{cv.location}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xl text-phos-200">
            <a
              className="break-all underline underline-offset-4"
              href="mailto:damirtagilbayev17@gmail.com"
            >
              damirtagilbayev17@gmail.com
            </a>
            <a
              className="underline underline-offset-4"
              href="https://github.com/damirtag"
            >
              GitHub
            </a>
            <a
              className="underline underline-offset-4"
              href="https://www.linkedin.com/in/damirtag/"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <div className="space-y-8 px-5 py-6 text-neutral-200 sm:px-8 sm:py-8">
          <section>
            <h2 className={sectionTitle}>{cv.summaryTitle}</h2>
            <p>{cv.summary}</p>
          </section>

          <section>
            <h2 className={sectionTitle}>{cv.experienceTitle}</h2>
            <div className="divide-y divide-dashed divide-ink-700">
              {cv.experience.map(
                ({ role, company, context, dates, points }) => (
                  <div key={company} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-5">
                      <h3 className="text-sm text-neutral-100 sm:text-base">
                        {company}
                      </h3>
                      <p className="text-neutral-300">{dates}</p>
                    </div>
                    <p className="mt-1 text-phos-200">
                      {role} · {context}
                    </p>
                    <ul className="mt-3 list-[square] space-y-1 pl-5 marker:text-phos-400">
                      {points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </section>

          <section className="border-t-2 border-ink-700 pt-6">
            <h2 className={sectionTitle}>{cv.skillsTitle}</h2>
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {cv.skills.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-phos-200">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="border-t-2 border-ink-700 pt-6">
            <h2 className={sectionTitle}>{cv.educationTitle}</h2>
            <ul className="space-y-1">
              {cv.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
