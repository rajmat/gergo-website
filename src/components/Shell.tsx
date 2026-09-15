import type { ReactNode } from 'react'
import type { Lang, PageContent, PageId } from '../content'
import { Sidebar } from './Sidebar'
import { MobileHeader } from './MobileHeader'

interface ShellProps {
  content: PageContent
  current: PageId
  onNavigate: (page: PageId) => void
  lang: Lang
  onLangChange: (lang: Lang) => void
  children: ReactNode
}

/** Sidebar + textured main column used by every content page. */
export function Shell({
  content,
  current,
  onNavigate,
  lang,
  onLangChange,
  children,
}: ShellProps) {
  return (
    <div className="flex min-h-svh w-full flex-col lg:flex-row">
      <MobileHeader
        content={content}
        current={current}
        onNavigate={onNavigate}
        lang={lang}
        onLangChange={onLangChange}
      />
      <Sidebar
        content={content}
        current={current}
        onNavigate={onNavigate}
        lang={lang}
      />
      <main className="bg-forest-texture scroll-slim relative flex-1 overflow-y-auto text-cream-50 lg:h-svh p-10">
        <div key={current} className="animate-view-in mx-auto w-full max-w-4xl p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
