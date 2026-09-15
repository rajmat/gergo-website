import type { Lang } from '../content'

interface LanguageToggleProps {
  lang: Lang
  onChange: (lang: Lang) => void
  className?: string
}

export function LanguageToggle({ lang, onChange, className = '' }: LanguageToggleProps) {
  return (
    <div
      className={`flex items-center gap-1 text-sm font-bold tracking-widest ${className}`}
      role="group"
      aria-label="Nyelvválasztó / Language switch"
    >
      <button
        type="button"
        onClick={() => onChange('hu')}
        aria-pressed={lang === 'hu'}
        className={`pill-brush px-6 py-2.5 text-sm font-bold tracking-widest transition-all duration-200 cursor-pointer
              ${lang === 'hu'
            ? 'bg-forest-500 text-cream-50 ring-2 ring-cream-100/60'
            : 'bg-forest-700 text-cream-100 hover:bg-forest-600 hover:-translate-y-0.5'
          }`}
      >
        HU
      </button>
      <button
        type="button"
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}
        className={`pill-brush px-6 py-2.5 text-sm font-bold tracking-widest transition-all duration-200 cursor-pointer
              ${lang === 'en'
            ? 'bg-forest-500 text-cream-50 ring-2 ring-cream-100/60'
            : 'bg-forest-700 text-cream-100 hover:bg-forest-600 hover:-translate-y-0.5'
          }`}
      >
        EN
      </button>
    </div>
  )
}
