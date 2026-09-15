import type { PageContent } from '../content'

interface AboutProps {
  content: PageContent
}

export function About({ content }: AboutProps) {
  return (
    <article>
      <div className="rounded-[2rem] bg-card p-7 text-forest-800 shadow-xl sm:p-10">
        <div className="space-y-5 text-[0.95rem] leading-relaxed sm:text-base">
          {content.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  )
}
