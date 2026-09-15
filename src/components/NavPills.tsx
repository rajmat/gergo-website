import type { Lang, PageContent, PageId } from '../content'
import { pageOrder } from '../content'

interface NavPillsProps {
  content: PageContent
  current: PageId
  onNavigate: (page: PageId) => void
  lang: Lang
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export function NavPills({
  content,
  current,
  onNavigate,
  orientation = 'vertical',
  className = '',
}: NavPillsProps) {
  return (
    <nav
      aria-label="Fő navigáció"
      className={`flex ${
        orientation === 'vertical' ? 'flex-col items-stretch' : 'flex-wrap justify-center'
      } gap-3 ${className}`}
    >
      {pageOrder.map((page) => {
        const active = current === page
        return (
          <button
            key={page}
            type="button"
            onClick={() => onNavigate(page)}
            aria-current={active ? 'page' : undefined}
            className={`pill-brush px-6 py-2.5 text-sm font-bold tracking-widest transition-all duration-200 cursor-pointer
              ${
                active
                  ? 'bg-forest-500 text-cream-50 ring-2 ring-cream-100/60'
                  : 'bg-forest-700 text-cream-100 hover:bg-forest-600 hover:-translate-y-0.5'
              }`}
          >
            {content.nav[page]}
          </button>
        )
      })}
    </nav>
  )
}
