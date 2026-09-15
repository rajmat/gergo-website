import { useEffect, useState } from 'react'
import {
  content as siteContent,
  type GroupDetail as GroupDetailData,
  type Lang,
  type PageId,
} from './content'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Praxis } from './pages/Praxis'
import { Groups } from './pages/Groups'
import { GroupDetail } from './pages/GroupDetail'
import { Contact } from './pages/Contact'
import { Shell } from './components/Shell'

function App() {
  const [lang, setLang] = useState<Lang>('hu')
  const [page, setPage] = useState<PageId>('home')
  const [groupDetail, setGroupDetail] = useState<GroupDetailData | null>(null)

  const content = siteContent[lang]

  // Keep the document language in sync for accessibility / SEO.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Scroll the content column back to the top on navigation.
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [page, groupDetail])

  const navigate = (next: PageId) => {
    setGroupDetail(null)
    setPage(next)
  }

  if (page === 'home') {
    return (
      <Home
        content={content}
        lang={lang}
        onLangChange={setLang}
        onNavigate={navigate}
      />
    )
  }

  return (
    <Shell
      content={content}
      current={page}
      onNavigate={navigate}
      lang={lang}
      onLangChange={setLang}
    >
      {page === 'about' && <About content={content} />}
      {page === 'praxis' && <Praxis content={content} />}
      {page === 'groups' &&
        (groupDetail ? (
          <GroupDetail
            content={content}
            detail={groupDetail}
            onBack={() => setGroupDetail(null)}
          />
        ) : (
          <Groups content={content} onOpenDetail={setGroupDetail} />
        ))}
      {page === 'contact' && <Contact content={content} />}
    </Shell>
  )
}

export default App
