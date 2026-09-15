import { useEffect, useState } from 'react'
import type { Lang, PageContent, PageId } from '../content'
import { Brand } from './Brand'
import { NavPills } from './NavPills'
import { LanguageToggle } from './LanguageToggle'

interface MobileHeaderProps {
  content: PageContent
  current: PageId
  onNavigate: (page: PageId) => void
  lang: Lang
  onLangChange: (lang: Lang) => void
  /** Colour scheme of the bar: dark text on light, or light text on photo. */
  variant?: 'light' | 'onPhoto'
}

/** Top bar + slide-in drawer shown below the `lg` breakpoint. */
export function MobileHeader({
  content,
  current,
  onNavigate,
  lang,
  onLangChange,
  variant = 'light',
}: MobileHeaderProps) {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const barText = variant === 'onPhoto' ? 'text-cream-50' : 'text-forest-800'

  const go = (page: PageId) => {
    onNavigate(page)
    setOpen(false)
  }

  return (
    <header className="lg:hidden">
      <div
        className={`flex items-center justify-between px-5 py-4 ${barText} ${
          variant === 'onPhoto' ? '' : 'bg-cream-texture'
        }`}
      >
        <Brand
          content={content}
          onClick={() => go('home')}
          logoClassName="h-10 w-10"
        />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menü megnyitása"
          aria-expanded={open}
          className="pill-brush flex h-11 w-11 items-center justify-center bg-forest-700 text-cream-50"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div
          className={`bg-forest-texture absolute right-0 top-0 flex h-full w-4/5 max-w-xs flex-col px-7 py-8 text-cream-50 shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <LanguageToggle lang={lang} onChange={onLangChange} className="text-cream-50" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menü bezárása"
              className="pill-brush flex h-10 w-10 items-center justify-center bg-forest-600"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <NavPills
            content={content}
            current={current}
            onNavigate={go}
            lang={lang}
          />
        </div>
      </div>
    </header>
  )
}
