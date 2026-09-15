import type { Lang, PageContent, PageId } from '../content'
import { NavPills } from '../components/NavPills'
import { LanguageToggle } from '../components/LanguageToggle'
import { MobileHeader } from '../components/MobileHeader'
import { Sidebar } from '../components/Sidebar'

interface HomeProps {
  content: PageContent
  lang: Lang
  onLangChange: (lang: Lang) => void
  onNavigate: (page: PageId) => void
}

export function Home({ content, lang, onLangChange, onNavigate }: HomeProps) {
  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-cover bg-center text-cream-50 bg-gergo">
      {/* Full-bleed portrait */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* Mobile top bar */}
      <div className="relative z-20">
        <MobileHeader
          content={content}
          current="home"
          onNavigate={onNavigate}
          lang={lang}
          onLangChange={onLangChange}
          variant="onPhoto"
        />
      </div>

      <Sidebar
        content={content}
        current="home"
        onNavigate={onNavigate}
        lang={lang}
      />

      {/* Desktop language toggle bottom-right */}
      <div className="absolute bottom-10 right-10 z-10 hidden text-forest-800 lg:block">
        <LanguageToggle lang={lang} onChange={onLangChange} />
      </div>

      {/* Mobile nav bottom */}
      <div className="absolute inset-x-0 bottom-8 z-10 px-6 hidden">
        <NavPills
          content={content}
          current="home"
          onNavigate={onNavigate}
          lang={lang}
          orientation="horizontal"
        />
      </div>
    </div>
  )
}
