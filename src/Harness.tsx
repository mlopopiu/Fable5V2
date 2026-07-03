import { Suspense, lazy, useMemo } from 'react'

const registry: Record<string, React.LazyExoticComponent<React.ComponentType<Record<string, unknown>>>> = {
  Hero: lazy(() => import('./framer/Hero.js')),
  HeaderBar: lazy(() => import('./framer/HeaderBar.js')),
  Intro: lazy(() => import('./framer/Intro.js')),
  Projects: lazy(() => import('./framer/Projects.js')),
  Service: lazy(() => import('./framer/Service.js')),
  PricingTable: lazy(() => import('./framer/PricingTable.js')),
  Award: lazy(() => import('./framer/Award.js')),
  Stats: lazy(() => import('./framer/Stats.js')),
  Team: lazy(() => import('./framer/Team.js')),
  Faq: lazy(() => import('./framer/Faq.js')),
  Blog: lazy(() => import('./framer/Blog.js')),
  Cta: lazy(() => import('./framer/Cta.js')),
  Footer: lazy(() => import('./framer/Footer.js')),
  Navbar: lazy(() => import('./framer/Navbar.js')),
  Spacer: lazy(() => import('./framer/SpacerSameHightAs.js')),
  TeamCard: lazy(() => import('./framer/TeamCard.js')),
  TeamIntroCard: lazy(() => import('./framer/TeamIntroCard.js')),
  SmoothScroll: lazy(() => import('./framer/SmoothscrollProd.js')),
}

export default function Harness() {
  const params = useMemo(() => new URLSearchParams(window.location.search), [])
  const name = params.get('c') ?? 'Hero'
  const variant = params.get('v') ?? undefined
  const title = params.get('title') ?? undefined
  const Comp = registry[name]
  if (!Comp) return <div style={{ color: 'white' }}>Unknown component: {name}</div>
  const props: Record<string, unknown> = {}
  if (variant) props.variant = variant
  if (title) props.title = title
  return (
    <Suspense fallback={<div style={{ color: 'white' }}>loading…</div>}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Comp {...props} />
      </div>
    </Suspense>
  )
}
