import { useState } from 'react'
import type { GroupCard, GroupDetail, PageContent } from '../content'

interface GroupsProps {
  content: PageContent
  onOpenDetail: (detail: GroupDetail) => void
}

export function Groups({ content, onOpenDetail }: GroupsProps) {
  const [tab, setTab] = useState<'current' | 'past'>('current')
  const cards = tab === 'current' ? content.groups.current : content.groups.past

  return (
    <article>
      {/* <h1 className="mb-8 font-brand text-3xl font-semibold tracking-tight text-cream-50 sm:text-4xl">
        {content.groups.title}
      </h1> */}

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap gap-3">
        <TabButton active={tab === 'current'} onClick={() => setTab('current')}>
          {content.groups.tabCurrent}
        </TabButton>
        <TabButton active={tab === 'past'} onClick={() => setTab('past')}>
          {content.groups.tabPast}
        </TabButton>
      </div>

      {/* Cards */}
      <div className="grid gap-6 h-auto sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, i) => (
          <Card
            key={i}
            card={card}
            interestedLabel={content.groups.interested}
            onInterested={() => card.detail && onOpenDetail(card.detail)}
          />
        ))}
      </div>
    </article>
  )
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`pill-brush px-6 py-2.5 text-sm font-bold tracking-widest transition-all ${
        active
          ? 'bg-cream-50 text-forest-800'
          : 'bg-forest-700/70 text-cream-100 hover:bg-forest-600'
      }`}
    >
      {children}
    </button>
  )
}

function Card({
  card,
  interestedLabel,
  onInterested,
}: {
  card: GroupCard
  interestedLabel: string
  onInterested: () => void
}) {
  return (
    <div className="flex flex-col rounded-[2rem] bg-card p-7 text-center text-forest-800 shadow-xl">
      <h2 className="mb-4 font-brand text-lg font-semibold leading-snug">{card.title}</h2>
      <p className="flex-1 text-sm leading-relaxed">{card.body}</p>
      {card.detail && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={onInterested}
            className="pill-brush bg-forest-700 px-7 py-2.5 text-sm font-bold tracking-widest text-cream-50 transition-all hover:-translate-y-0.5 hover:bg-forest-600"
          >
            {card.cta ?? interestedLabel}
          </button>
        </div>
      )}
    </div>
  )
}
