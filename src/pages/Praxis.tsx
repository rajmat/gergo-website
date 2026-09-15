import type { PageContent } from '../content'

interface PraxisProps {
  content: PageContent
}

export function Praxis({ content }: PraxisProps) {
  return (
    <article>
      {/* <h1 className="mb-8 font-brand text-3xl font-semibold tracking-tight text-cream-50 sm:text-4xl">
        {content.praxis.title}
      </h1> */}

      <div className="rounded-[2rem] bg-card p-7 text-forest-800 shadow-xl sm:p-10">
        <div className="space-y-5 text-[0.95rem] leading-relaxed sm:text-base">
          {content.praxis.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <figure className="mt-8 rounded-[2rem] border border-cream-100/20 bg-forest-700/50 p-7 sm:p-10">
        <blockquote className="font-brand text-lg italic leading-relaxed text-cream-50 sm:text-xl">
          „{content.praxis.quote}"
        </blockquote>
        <figcaption className="mt-4 text-sm font-bold tracking-widest text-cream-100/80">
          — {content.praxis.quoteAuthor}
        </figcaption>
      </figure>
    </article>
  )
}
