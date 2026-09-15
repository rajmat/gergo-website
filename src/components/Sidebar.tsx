import type { Lang, PageContent, PageId } from '../content'
import { Brand } from './Brand'
import { NavPills } from './NavPills'

interface SidebarProps {
  content: PageContent
  current: PageId
  onNavigate: (page: PageId) => void
  lang: Lang
}

/**
 * Desktop-only left rail: cream textured column with the brand mark at the
 * top, a full-bleed grayscale nature photo in the middle and the navigation
 * pills anchored to the bottom.
 */
export function Sidebar({ content, current, onNavigate, lang }: SidebarProps) {
  return (
    <aside className="relative hidden flex-col justify-between h-auto overflow-hidden text-forest-800 lg:flex h-screen w-78">
      {/* Brand */}
      <div className="relative z-10 px-8 pt-8">
        <Brand
          content={content}
          onClick={() => onNavigate('home')}
          logoClassName="h-14 w-14 text-forest-700"
        />
      </div>

      {/* Nature photo fills the free space */}
      <div className="relative my-6 flex-1">
        <div
          className="absolute inset-0"
          role="img"
          aria-label="Természetfotó – mező és domboldal"
        />
      </div>

      {/* Navigation */}
      <div className="relative z-10 px-8 pb-10">
        <NavPills
          content={content}
          current={current}
          onNavigate={onNavigate}
          lang={lang}
        />
      </div>
    </aside>
  )
}
