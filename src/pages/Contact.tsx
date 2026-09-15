import type { PageContent } from '../content'

interface ContactProps {
  content: PageContent
}

export function Contact({ content }: ContactProps) {
  const c = content.contact
  return (
    <article>
      {/* <h1 className="mb-8 font-brand text-3xl font-semibold tracking-tight text-cream-50 sm:text-4xl">
        {c.title}
      </h1> */}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Direct contact */}
        <div className="rounded-[2rem] bg-card p-7 text-forest-800 shadow-xl sm:p-9">
          <ul className="space-y-5">
            <li>
              <span className="mb-1 block text-xs font-bold tracking-widest opacity-60">
                E-MAIL
              </span>
              <a
                href={`mailto:${c.email}`}
                className="break-all font-brand text-lg font-semibold hover:underline"
              >
                {c.email}
              </a>
            </li>
            <li>
              <span className="mb-1 block text-xs font-bold tracking-widest opacity-60">
                TELEFON
              </span>
              <a
                href={`tel:${c.phone.replace(/\s+/g, '')}`}
                className="font-brand text-lg font-semibold hover:underline"
              >
                {c.phone}
              </a>
            </li>
          </ul>

          <p className="mt-7 border-t border-forest-800/15 pt-6 text-sm leading-relaxed">
            {c.note}
          </p>
        </div>

        {/* Prices & discounts */}
        <div className="rounded-[2rem] border border-cream-100/20 bg-forest-700 p-7 text-cream-50 sm:p-9">
          <h2 className="mb-4 font-brand text-xl font-semibold">{c.priceHeading}</h2>
          <ul className="space-y-3">
            {c.prices.map((p) => (
              <li
                key={p.label}
                className="flex items-baseline justify-between gap-4 border-b border-cream-100/15 pb-3 text-sm"
              >
                <span className="opacity-90">{p.label}</span>
                <span className="whitespace-nowrap font-bold">{p.value}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-7 mb-2 font-brand text-base font-semibold">
            {c.discountHeading}
          </h3>
          <p className="text-sm leading-relaxed opacity-90">{c.discountBody}</p>
        </div>
      </div>
    </article>
  )
}
