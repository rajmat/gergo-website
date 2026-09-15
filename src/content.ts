export type Lang = 'hu' | 'en'
export type PageId = 'home' | 'about' | 'praxis' | 'groups' | 'contact'

export interface DetailLink {
  label: string
  href: string
}

/** A paragraph that may end with an inline link. */
export interface DetailBlock {
  text: string
  link?: DetailLink
}

export interface GroupLeader {
  name: string
  role: string
  link?: DetailLink
}

/**
 * A single row in the "Keretek" (framework) panel. Rendered as a bullet by
 * default, or as a plain paragraph when `paragraph` is true.
 */
export interface FrameworkItem {
  label?: string
  text?: string
  link?: DetailLink
  paragraph?: boolean
}

export interface GroupDetail {
  title: string
  paragraphs: DetailBlock[]
  leadersHeading?: string
  leaders?: GroupLeader[]
  frameworkHeading: string
  framework: FrameworkItem[]
  scheduleHeading?: string
  scheduleSubtitle?: string
  scheduleDates?: string[]
}

export interface GroupCard {
  title: string
  body: string
  cta?: string
  detail?: GroupDetail
}

export interface PageContent {
  nav: Record<Exclude<PageId, 'home'>, string>
  brand: {
    name: string
    role: string
  }
  home: {
    tagline: string
    enter: string
  }
  about: {
    title: string
    paragraphs: string[]
  }
  praxis: {
    title: string
    paragraphs: string[]
    quote: string
    quoteAuthor: string
  }
  groups: {
    title: string
    tabCurrent: string
    tabPast: string
    interested: string
    back: string
    current: GroupCard[]
    past: GroupCard[]
  }
  contact: {
    title: string
    email: string
    phone: string
    priceHeading: string
    prices: { label: string; value: string }[]
    discountHeading: string
    discountBody: string
    note: string
  }
}

export const content: Record<Lang, PageContent> = {
  hu: {
    nav: {
      about: 'RÓLAM',
      praxis: 'PRAXIS',
      groups: 'CSOPORTOK',
      contact: 'KAPCSOLAT',
    },
    brand: {
      name: 'Stomfai Gergő',
      role: 'pszichológus',
    },
    home: {
      tagline: 'Egyéni és csoportos önismereti munka.',
      enter: 'BELÉPÉS',
    },
    about: {
      title: 'Rólam',
      paragraphs: [
        'Stomfai Gergőnek hívnak, és a kilencvenes évek közepén születtem Óbudán. Budapesten élek, de Szentendrén nőttem fel. Alapfokú diplomámat a Károli Gáspár, pszichológusi mesterdiplomámat pedig a Műszaki Egyetemen szereztem meg.',
        'Az egyetemi képzésen túl a Magyar Szomato-pszichoterápiás Egyesület által szervezett „Fókuszolás" képzési útján járok, immáron harmadik éve. Egyéb szakmai és szakmán kívüli képzéseken pedig ad hoc jelleggel veszek részt (pl. mindfulness, tréningmódszertan, közösségfejlesztés, stresszcsökkentés, jóga, zen).',
        'Az egyetem elvégzése után egy szervezetfejlesztő vállalkozásban dolgoztam mint tanácsadó pszichológus és projektmenedzser. Ezt követően pedig egy kulturális központban dolgoztam közép-, később felsővezetői szerepben.',
        'A csoportokkal való foglalkozást több mint egy évtizede gyakorlom. Olyan közösségekben érzem jól magam, ahol emberi mivoltunkat helyezzük a figyelmünk középpontjába, ezáltal tanulunk magunkról, tipikus működéseinkről, egymásról és a kapcsolatainkról. Legyen az önkéntes vagy alkalmazott, ifjúsági vagy felnőtt, kötött vagy kötetlen, a közösségi lét engem mindig feltölt és formál.',
        'Szupervízió mellett, 2026-ban kezdtem meg felnőtteknek szóló magánpraxisomat egyéni és csoportos formában egyaránt.',
      ],
    },
    praxis: {
      title: 'Praxis',
      paragraphs: [
        'Praxisomban olyan teret biztosítok, ahol helye van a legkülönfélébb gondolatoknak, érzéseknek és érzelmeknek. A figyelem, az őszinteség és a tiszta megfigyelés eszközeivel közösen alakítjuk ki azt a légkört, ahol létrejöhet benned a mélyebb megértés, az elfogadás vagy a gyógyulás.',
        'Hiszek abban, hogy nem „kezelésre", hanem az igazság kimondására és a minket körülvevő valóság akkurátus meghatározására van szükségünk. Nincs mindenkire érvényes meghatározott módszerem vagy sémám, ebből adódóan nem helyezem szisztematikusan elméleti keretbe az élményeidet, és nem is diagnosztizállak. Helyette az együttérzés és az együtt gondolkodás adja a közös munkánk alapját.',
        'Az általam ismert „technikákat" az alkalmak keretein belül gyakorolhatod, amennyiben ezt igényled és jelzed. Ezek a fókuszolás, a meditáció és a figyelemalapú stresszcsökkentés. Munkámat rendszeres egyéni és csoportos szupervízió mellett végzem.',
      ],
      quote:
        'Az igazi beszélgetés az, amiben az igazság megmutatja magát. Egy jó dialógus szeretettel teli, amiben sem a másik nem tudja, mi a tuti, sem én, de ha jóindulatúak és őszinték vagyunk, megjelenik közöttünk az igazság. Nagy élmény.',
      quoteAuthor: 'Feldmár András',
    },
    groups: {
      title: 'Csoportok',
      tabCurrent: 'JELENLEGI CSOPORTOK',
      tabPast: 'KORÁBBI CSOPORTOK',
      interested: 'ÉRDEKEL',
      back: 'VISSZA',
      current: [
        {
          title: 'Nyitott (nem) önismereti csoport – hétfőnként',
          body: 'A csoport elnevezése arra az alapvetően kételkedő hozzáállásunkra utal, amivel a dogmák igazsága, illetve bizonyos narratívák és sokat használt szavak (például az önismeret szó) jelentése felé fordulunk.',
          cta: 'ÉRDEKEL',
          detail: {
            title: 'Nyitott (nem) önismereti csoport – hétfőnként',
            paragraphs: [
              {
                text: 'Csoportunk olyan hely, ahol lehet gyakorolni az őszinteséget, bátorságot, a szolidaritást, az érzelmek és gondolatok nyílt és cenzúrázatlan kifejezését, intenzív, esetlegesen kényelmetlen emberi interakciókat. Mi magunk is résztvevői vagyunk a csoportnak, a keretek megtartásán túl nem lépünk vezetői szerepbe. Mindemellett arra törekszünk, hogy a tér biztonságos maradjon, és hogy egymás személyének tiszteletben tartásával egy etikus légkörben lehessünk együtt, és elkerüljük egymás bántását.',
              },
              {
                text: 'Az alkalmaknak az alap kereteken túl - idő, körforma, csoporttitok – nincsen előre meghatározott struktúrája vagy témamegjelölése. Senkinek nem kell megnyilvánulnia, de a lehetőség mindenki számára mindig adott.',
              },
              {
                text: 'A csoportot Bodrogi Bálinttal tartom:',
                link: {
                  label: 'www.bodrogibalintpszicho.com',
                  href: 'https://www.bodrogibalintpszicho.com',
                },
              },
              { text: 'Csoportunk önismereti jellegű, nem pszichoterápiás csoport.' },
            ],
            frameworkHeading: 'Keretek',
            framework: [
              {
                text: 'Az alkalmakat heti rendszerességgel, hétfő esténként 18:00 - 20:00 között tartjuk.',
                paragraph: true,
              },
              {
                text: 'A csoport nyitott, elköteleződés nem szükséges, van lehetőség kipróbálni vagy hosszabban, rendszeresen is részt venni.',
                paragraph: true,
              },
              {
                text: 'Kérjük, hogy jelezd a részvételi szándékod az adott alkalom előtti vasárnap éjfélig:',
                link: {
                  label: 'https://forms.gle/vEutEg8Zo4nD8RLr9',
                  href: 'https://forms.gle/vEutEg8Zo4nD8RLr9',
                },
                paragraph: true,
              },
              {
                label: 'FB esemény:',
                link: {
                  label: 'https://fb.me/e/5AQIG1EzP',
                  href: 'https://fb.me/e/5AQIG1EzP',
                },
                paragraph: true,
              },
              {
                text: 'Egy alkalom ára ötezer forint. (Igény esetén lehetőség van kedvezményesen is részt venni.)',
                paragraph: true,
              },
            ],
          },
        },
        {
          title: 'Elköteleződéshez kötött (nem) önismereti csoport',
          body: 'Elköteleződéshez kötött, félig zárt önismereti csoport, amelyben az első alkalom nyitott, utána a részvétel elköteleződéshez kötött.',
          cta: 'ÉRDEKEL',
          detail: {
            title: 'Elköteleződéshez kötött (nem) önismereti csoport',
            paragraphs: [
              {
                text: 'Csoportunk olyan hely, ahol lehet gyakorolni az őszinteséget, bátorságot, a szolidaritást, az érzelmek és gondolatok nyílt és cenzúrázatlan kifejezését, intenzív, esetlegesen kényelmetlen emberi interakciókat. Mi magunk is résztvevői vagyunk a csoportnak, a keretek megtartásán túl nem lépünk vezető szerepbe. Mindemellett arra törekszünk, hogy a tér biztonságos maradjon, és hogy egymás személyének tiszteletben tartásával egy etikus légkörben lehessünk együtt, és elkerüljük egymás bántását.',
              },
              {
                text: 'Az alkalmaknak az alap kereteken túl - idő, körforma, csoporttitok – nincsen előre meghatározott struktúrája vagy témamegjelölése. Senkinek nem kell megnyilvánulnia, de a lehetőség mindenki számára mindig adott.',
              },
              { text: 'Csoportunk önismereti jellegű, nem pszichoterápiás csoport.' },
            ],
            leadersHeading: 'A csoportot (nem)vezetik:',
            leaders: [
              {
                name: 'Bodrogi Bálint',
                role: 'Pszichológus, Személyközpontú tanácsadó',
                link: {
                  label: 'https://www.bodrogibalintpszicho.com',
                  href: 'https://www.bodrogibalintpszicho.com',
                },
              },
              {
                name: 'Stomfai Gergő',
                role: 'Pszichológus, Képzésben lévő fókuszolás-kísérő',
              },
            ],
            frameworkHeading: 'Keretek',
            framework: [
              { text: 'kéthetente 3 óra (2x1,5 óra 15 perc szünettel)' },
              { text: '10 alkalom' },
              { text: 'minimum 5, maximum 12 fő' },
              { text: 'részvételi díj: 8000 forint/alkalom' },
              {
                text: 'Tíz alkalom, melyekből az első nyitott, utána elköteleződéshez kötött.',
                paragraph: true,
              },
            ],
            scheduleHeading: '2026-ban induló csoportok:',
            scheduleSubtitle: 'szombatonként',
            scheduleDates: [
              'február 14.',
              'február 28.',
              'március 14.',
              'március 28.',
              'április 11.',
              'április 25.',
              'május 9.',
              'május 23.',
              'június 6.',
              'június 20.',
            ],
          },
        },
        {
          title: 'Nyári két napos (nem) önismereti csoport',
          body: 'Részletek hamarosan!',
        },
        {
          title: 'Őszi kétnapos tapasztalati műhely fókuszolással',
          body: 'Részletek hamarosan!',
        },
      ],
      past: [
        {
          title: 'Korábbi tapasztalati műhelyek',
          body: 'A korábban lezajlott csoportok és műhelyek összefoglalója hamarosan elérhető lesz itt.',
        },
      ],
    },
    contact: {
      title: 'Kapcsolat',
      email: 'stomfaigergo@proton.me',
      phone: '+36 20 216 9707',
      priceHeading: 'Árak',
      prices: [
        { label: 'Egy alkalom (50 perc)', value: '14.000 Ft' },
        { label: 'Dupla alkalom (90 perc)', value: '25.000 Ft' },
        { label: 'Kedvezményes egy alkalom', value: '12.000 Ft' },
        { label: 'Kedvezményes dupla alkalom', value: '21.500 Ft' },
      ],
      discountHeading: 'Kedvezményesen fogadok',
      discountBody:
        'pedagógusokat, nappali tagozatos diákokat, szociális vagy civil szférában dolgozókat, egészségügyi szakdolgozókat, megváltozott anyagi helyzetűeket, illetve szükség szerint bárkit.',
      note: 'Az első találkozó mindig személyesen történik, a továbbiakban rugalmas vagyok.',
    },
  },

  en: {
    nav: {
      about: 'ABOUT',
      praxis: 'PRACTICE',
      groups: 'GROUPS',
      contact: 'CONTACT',
    },
    brand: {
      name: 'Gergő Stomfai',
      role: 'psychologist',
    },
    home: {
      tagline: 'Individual and group self-awareness work.',
      enter: 'ENTER',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'My name is Gergő Stomfai and I was born in the mid-nineties in Óbuda. I live in Budapest, but grew up in Szentendre. I earned my undergraduate degree at Károli Gáspár University and my master\u2019s degree in psychology at the Budapest University of Technology.',
        'Beyond my university studies, I have been training in “Focusing" — organised by the Hungarian Somato-psychotherapy Association — for the third year now. I also take part in various professional and non-professional trainings on an ad hoc basis (e.g. mindfulness, training methodology, community development, stress reduction, yoga, zen).',
        'After graduating, I worked as a counselling psychologist and project manager at an organisational-development company. Later I worked at a cultural centre in middle- and then senior-management roles.',
        'I have been working with groups for over a decade. I feel at home in communities where we place our shared humanity at the centre of attention — learning about ourselves, our typical patterns, one another and our relationships. Whether voluntary or employed, youth or adult, structured or free-form, community life always recharges and shapes me.',
        'Alongside supervision, I began my private practice for adults in 2026, offering both individual and group formats.',
      ],
    },
    praxis: {
      title: 'Practice',
      paragraphs: [
        'In my practice I provide a space where the most diverse thoughts, feelings and emotions all have a place. Using attention, honesty and clear observation, we shape together an atmosphere in which deeper understanding, acceptance or healing can arise within you.',
        'I believe that we do not need “treatment", but rather to speak the truth and to define the reality around us accurately. I have no universally valid method or scheme; therefore I do not systematically place your experiences into a theoretical frame, nor do I diagnose you. Instead, compassion and thinking together form the basis of our shared work.',
        'You can practise the “techniques" I know within the sessions, whenever you need and indicate it. These are focusing, meditation and attention-based stress reduction. I carry out my work alongside regular individual and group supervision.',
      ],
      quote:
        'True conversation is one in which the truth reveals itself. A good dialogue is full of love, in which neither the other person nor I knows the definitive answer — but if we are well-meaning and honest, the truth appears between us. It is a great experience.',
      quoteAuthor: 'András Feldmár',
    },
    groups: {
      title: 'Groups',
      tabCurrent: 'CURRENT GROUPS',
      tabPast: 'PAST GROUPS',
      interested: 'I\u2019M INTERESTED',
      back: 'BACK',
      current: [
        {
          title: 'Open (non) self-awareness group – on Mondays',
          body: 'The name of the group refers to our fundamentally questioning attitude, with which we turn towards the truth of dogmas, and towards the meaning of certain narratives and often-used words (such as the word “self-awareness").',
          cta: 'I\u2019M INTERESTED',
          detail: {
            title: 'Open (non) self-awareness group – on Mondays',
            paragraphs: [
              {
                text: 'Our group is a place where you can practise honesty, courage, solidarity, the open and uncensored expression of emotions and thoughts, and intense, occasionally uncomfortable human interactions. We are participants of the group ourselves; beyond holding the framework we do not step into a leading role. At the same time, we strive to keep the space safe, to be together in an ethical atmosphere that respects each person, and to avoid hurting one another.',
              },
              {
                text: 'Beyond the basic framework — time, circle form, group confidentiality — the sessions have no predefined structure or topic. No one has to speak up, but the opportunity is always there for everyone.',
              },
              {
                text: 'I hold the group together with Bálint Bodrogi:',
                link: {
                  label: 'www.bodrogibalintpszicho.com',
                  href: 'https://www.bodrogibalintpszicho.com',
                },
              },
              { text: 'Our group is self-awareness oriented, not a psychotherapy group.' },
            ],
            frameworkHeading: 'Framework',
            framework: [
              {
                text: 'We hold the sessions weekly, on Monday evenings between 18:00 and 20:00.',
                paragraph: true,
              },
              {
                text: 'The group is open, commitment is not required; you can try it out or take part for a longer time, regularly.',
                paragraph: true,
              },
              {
                text: 'Please indicate your intention to attend by midnight on the Sunday before the given session:',
                link: {
                  label: 'https://forms.gle/vEutEg8Zo4nD8RLr9',
                  href: 'https://forms.gle/vEutEg8Zo4nD8RLr9',
                },
                paragraph: true,
              },
              {
                label: 'FB event:',
                link: {
                  label: 'https://fb.me/e/5AQIG1EzP',
                  href: 'https://fb.me/e/5AQIG1EzP',
                },
                paragraph: true,
              },
              {
                text: 'One session costs five thousand forints. (Reduced participation is available on request.)',
                paragraph: true,
              },
            ],
          },
        },
        {
          title: 'Commitment-based (non) self-awareness group',
          body: 'A commitment-based, semi-closed self-awareness group whose first session is open; afterwards participation is commitment-based.',
          cta: 'I\u2019M INTERESTED',
          detail: {
            title: 'Commitment-based (non) self-awareness group',
            paragraphs: [
              {
                text: 'Our group is a place where you can practise honesty, courage, solidarity, the open and uncensored expression of emotions and thoughts, and intense, occasionally uncomfortable human interactions. We are participants of the group ourselves; beyond holding the framework we do not step into a leading role. At the same time, we strive to keep the space safe, to be together in an ethical atmosphere that respects each person, and to avoid hurting one another.',
              },
              {
                text: 'Beyond the basic framework — time, circle form, group confidentiality — the sessions have no predefined structure or topic. No one has to speak up, but the opportunity is always there for everyone.',
              },
              { text: 'Our group is self-awareness oriented, not a psychotherapy group.' },
            ],
            leadersHeading: 'The group is (non)led by:',
            leaders: [
              {
                name: 'Bálint Bodrogi',
                role: 'Psychologist, Person-centred counsellor',
                link: {
                  label: 'https://www.bodrogibalintpszicho.com',
                  href: 'https://www.bodrogibalintpszicho.com',
                },
              },
              {
                name: 'Gergő Stomfai',
                role: 'Psychologist, Focusing companion in training',
              },
            ],
            frameworkHeading: 'Framework',
            framework: [
              { text: '3 hours every two weeks (2×1.5 hours with a 15-minute break)' },
              { text: '10 sessions' },
              { text: 'minimum 5, maximum 12 people' },
              { text: 'participation fee: 8,000 forints / session' },
              {
                text: 'Ten sessions, the first of which is open, after which it becomes commitment-based.',
                paragraph: true,
              },
            ],
            scheduleHeading: 'Groups starting in 2026:',
            scheduleSubtitle: 'on Saturdays',
            scheduleDates: [
              '14 February',
              '28 February',
              '14 March',
              '28 March',
              '11 April',
              '25 April',
              '9 May',
              '23 May',
              '6 June',
              '20 June',
            ],
          },
        },
        {
          title: 'Summer two-day (non) self-awareness group',
          body: 'Details coming soon!',
        },
        {
          title: 'Autumn two-day experiential workshop with focusing',
          body: 'Details coming soon!',
        },
      ],
      past: [
        {
          title: 'Previous experiential workshops',
          body: 'A summary of the groups and workshops held previously will be available here soon.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      email: 'stomfaigergo@proton.me',
      phone: '+36 20 216 9707',
      priceHeading: 'Prices',
      prices: [
        { label: 'Single session (50 min)', value: '14,000 HUF' },
        { label: 'Double session (90 min)', value: '25,000 HUF' },
        { label: 'Reduced single session', value: '12,000 HUF' },
        { label: 'Reduced double session', value: '21,500 HUF' },
      ],
      discountHeading: 'I offer reduced rates for',
      discountBody:
        'teachers, full-time students, people working in the social or civil sector, healthcare workers, those in changed financial circumstances, and anyone else in need.',
      note: 'The first meeting always takes place in person; afterwards I am flexible.',
    },
  },
}

export const pageOrder: Exclude<PageId, 'home'>[] = [
  'about',
  'praxis',
  'groups',
  'contact',
]
