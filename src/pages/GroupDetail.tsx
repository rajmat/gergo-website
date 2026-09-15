import type {
  DetailBlock,
  DetailLink,
  FrameworkItem,
  GroupDetail as GroupDetailData,
  GroupLeader,
  PageContent,
} from '../content'

interface GroupDetailProps {
  content: PageContent
  detail: GroupDetailData
  onBack: () => void
}

export function GroupDetail({ content, detail, onBack }: GroupDetailProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="pill-brush mb-8 inline-flex items-center gap-2 bg-cream-50 px-6 py-2.5 text-sm font-bold tracking-widest text-forest-800 transition-transform hover:-translate-x-0.5"
      >
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
          <path
            d="M8 1 1 8l7 7M1 8h20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {content.groups.back}
      </button>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Description */}
        <article className="rounded-[2rem] bg-card p-7 text-forest-800 shadow-xl sm:p-10 lg:col-span-3">
          <h1 className="mb-6 font-brand text-2xl font-semibold leading-snug sm:text-3xl">
            {detail.title}
          </h1>

          <div className="space-y-5 text-[0.95rem] leading-relaxed sm:text-base">
            {detail.paragraphs.map((block, i) => (
              <Paragraph key={i} block={block} />
            ))}
          </div>

          {detail.leaders && detail.leaders.length > 0 && (
            <div className="mt-8 border-t border-forest-800/15 pt-6">
              {detail.leadersHeading && (
                <h2 className="mb-4 font-brand text-lg font-semibold">
                  {detail.leadersHeading}
                </h2>
              )}
              <ul className="space-y-4 text-sm sm:text-[0.95rem]">
                {detail.leaders.map((leader, i) => (
                  <LeaderRow key={i} leader={leader} />
                ))}
              </ul>
            </div>
          )}
        </article>

        {/* Framework / schedule */}
        <aside className="rounded-[2rem] bg-card p-7 text-forest-800 shadow-xl sm:p-10 lg:col-span-2">
          <h2 className="mb-6 font-brand text-xl font-semibold">
            {detail.frameworkHeading}
          </h2>

          <ul className="space-y-4 text-sm sm:text-[0.95rem]">
            {detail.framework.map((item, i) => (
              <FrameworkRow key={i} item={item} />
            ))}
          </ul>

          {detail.scheduleHeading && (
            <div className="mt-7 border-t border-forest-800/15 pt-6">
              <h3 className="font-brand text-base font-semibold">
                {detail.scheduleHeading}
              </h3>
              {detail.scheduleSubtitle && (
                <p className="mt-3 text-sm font-bold">{detail.scheduleSubtitle}</p>
              )}
              {detail.scheduleDates && detail.scheduleDates.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm">
                  {detail.scheduleDates.map((date) => (
                    <li key={date}>{date}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

function Anchor({ link }: { link: DetailLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-forest-600 underline decoration-forest-600/50 underline-offset-2 transition-colors hover:text-forest-800"
    >
      {link.label}
    </a>
  )
}

function Paragraph({ block }: { block: DetailBlock }) {
  return (
    <p>
      {block.text}
      {block.link && (
        <>
          {' '}
          <span className="break-all">
            <Anchor link={block.link} />
          </span>
        </>
      )}
    </p>
  )
}

function LeaderRow({ leader }: { leader: GroupLeader }) {
  return (
    <li>
      <span className="font-bold">{leader.name}</span>
      {leader.role && <span> – {leader.role}</span>}
      {leader.link && (
        <span className="mt-1 block break-all">
          <Anchor link={leader.link} />
        </span>
      )}
    </li>
  )
}

function FrameworkRow({ item }: { item: FrameworkItem }) {
  const body = (
    <>
      {item.label && <span className="block font-bold">{item.label}</span>}
      {item.text && <span className="block">{item.text}</span>}
      {item.link && (
        <span className="mt-1 block break-all">
          <Anchor link={item.link} />
        </span>
      )}
    </>
  )

  if (item.paragraph) {
    return <li className="leading-relaxed">{body}</li>
  }

  return (
    <li className="flex gap-3 leading-relaxed">
      <span
        aria-hidden
        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-700"
      />
      <span className="min-w-0 flex-1">{body}</span>
    </li>
  )
}
