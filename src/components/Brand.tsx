import { Logo } from './Logo'
import type { PageContent } from '../content'

interface BrandProps {
  content: PageContent
  onClick?: () => void
  className?: string
  logoClassName?: string
  compact?: boolean
}

export function Brand({
  content,
  onClick,
  compact = false,
}: BrandProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex items-center gap-3 text-left cursor-pointer`}
      aria-label={`${content.brand.name} – ${content.brand.role}`}
    >
      <Logo className={`shrink-0 transition-transform group-hover:-rotate-6`} />
      {!compact && (
        <span className="leading-tight">
          <span className="block font-brand text-xl font-semibold tracking-tight text-current">
            {content.brand.name}
          </span>
          <span className="block font-brand text-sm italic opacity-70">
            {content.brand.role}
          </span>
        </span>
      )}
    </button>
  )
}
