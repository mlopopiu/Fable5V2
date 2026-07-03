import { useEffect, useRef, useState } from 'react'

import Harness from './Harness'
import SmoothScroll from './framer/SmoothscrollProd.js'
import Navbar from './framer/Navbar.js'
import Hero from './framer/Hero.js'
import HeaderBar from './framer/HeaderBar.js'
import Intro from './framer/Intro.js'
import HeaderBar2 from './framer/HeaderBar2.js'
import Projects from './framer/Projects.js'
import HeaderBar3 from './framer/HeaderBar3.js'
import Service from './framer/Service.js'
import HeaderBar4 from './framer/HeaderBar4.js'
import PricingTable from './framer/PricingTable.js'
import HeaderBar5 from './framer/HeaderBar5.js'
import Award from './framer/Award.js'
import HeaderBar6 from './framer/HeaderBar6.js'
import Stats from './framer/Stats.js'
import HeaderBar7 from './framer/HeaderBar7.js'
import Team from './framer/Team.js'
import HeaderBar8 from './framer/HeaderBar8.js'
import Faq from './framer/Faq.js'
import HeaderBar9 from './framer/HeaderBar9.js'
import HeaderBar10 from './framer/HeaderBar10.js'
import Blog from './framer/Blog.js'
import Cta from './framer/Cta.js'
import Footer from './framer/Footer.js'
import Spacer from './framer/SpacerSameHightAs.js'
import Testimonials from './components/Testimonials'

type Breakpoint = 'phone' | 'tablet' | 'desktop'

function useBreakpoint(): Breakpoint {
  const get = (): Breakpoint => {
    if (typeof window === 'undefined') return 'desktop'
    const w = window.innerWidth
    if (w < 810) return 'phone'
    if (w < 1200) return 'tablet'
    return 'desktop'
  }
  const [bp, setBp] = useState<Breakpoint>(get)
  useEffect(() => {
    const onResize = () => setBp(get())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return bp
}

function useScrolled(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false)
  const raf = useRef(0)
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => setScrolled(window.scrollY > threshold))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])
  return scrolled
}

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {children}
    </section>
  )
}

const FULL_WIDTH = { width: '100%' } as const

// Canvas heights per breakpoint recovered from the reference design.
// The standalone exports use auto-height roots with fill children, so the
// page-level section heights must be reapplied explicitly.
const SECTION_HEIGHTS: Record<string, Record<Breakpoint, number>> = {
  stats: { desktop: 901, tablet: 1086, phone: 1404 },
  team: { desktop: 977, tablet: 829, phone: 2393 },
  intro: { desktop: 841, tablet: 695, phone: 636 },
}

function Bar({ children }: { children: React.ReactNode }) {
  return <div style={{ width: '100%', padding: '10px 0' }}>{children}</div>
}

export default function App() {
  const bp = useBreakpoint()
  const scrolled = useScrolled(80)
  const [navHovered, setNavHovered] = useState(false)
  const isHarness = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('c')

  const responsive = bp === 'phone' ? 'Phone' : bp === 'tablet' ? 'Tablet' : 'Desktop'
  const navVariant =
    bp === 'phone' ? 'Mobile Closed' : scrolled && !navHovered ? 'Nav Closed' : 'Nav Default'
  const statsH = SECTION_HEIGHTS.stats[bp]
  const teamH = SECTION_HEIGHTS.team[bp]
  const introH = SECTION_HEIGHTS.intro[bp]
  const sidePad = bp === 'phone' ? 8 : 16

  if (isHarness) return <Harness />

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <SmoothScroll intensity={10} />

      {/* Fixed footer, revealed behind the page content */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 0, height: '100vh', display: 'flex', justifyContent: 'center' }}>
        <Footer variant={responsive} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Page content */}
      <main style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', background: 'rgb(20, 20, 20)', padding: `0 ${sidePad}px` }}>
        <Section id="hero">
          <Hero style={{ width: '100%', height: '100vh' }} />
        </Section>

        <Section id="studio">
          <Bar><HeaderBar bxqAmDYWN="(About Us)" style={FULL_WIDTH} /></Bar>
          <Intro style={{ width: '100%', height: introH }} />
        </Section>

        <Section id="projects">
          <Bar><HeaderBar2 bxqAmDYWN="(Portfolio)" style={FULL_WIDTH} /></Bar>
          <Projects style={FULL_WIDTH} />
        </Section>

        <Section id="services">
          <Bar><HeaderBar3 bxqAmDYWN="(services)" style={FULL_WIDTH} /></Bar>
          <Service style={FULL_WIDTH} />
        </Section>

        <Section id="pricing">
          <Bar><HeaderBar4 bxqAmDYWN="(Pricing)" style={FULL_WIDTH} /></Bar>
          <PricingTable style={FULL_WIDTH} />
        </Section>

        <Section id="testimonials">
          <Bar><HeaderBar5 bxqAmDYWN="(Testimonial)" style={FULL_WIDTH} /></Bar>
          <Testimonials />
        </Section>

        <Section id="awards">
          <Bar><HeaderBar6 bxqAmDYWN="(Awards)" style={FULL_WIDTH} /></Bar>
          <Award style={FULL_WIDTH} />
        </Section>

        <Section id="stats">
          <Bar><HeaderBar7 bxqAmDYWN="(Stats)" style={FULL_WIDTH} /></Bar>
          <Stats style={{ width: '100%', height: statsH }} />
        </Section>

        <Section id="team">
          <Bar><HeaderBar8 bxqAmDYWN="(Team)" style={FULL_WIDTH} /></Bar>
          <Team style={{ width: '100%', height: teamH }} />
        </Section>

        <Section id="faq">
          <Bar><HeaderBar9 bxqAmDYWN="(FAQ)" style={FULL_WIDTH} /></Bar>
          <Faq style={FULL_WIDTH} />
        </Section>

        <Section id="blog">
          <Bar><HeaderBar10 bxqAmDYWN="(Blogs)" style={FULL_WIDTH} /></Bar>
          <Blog variant={responsive} style={FULL_WIDTH} />
        </Section>

        <Section id="contact">
          <Cta style={{ width: '100%', height: '100vh' }} />
        </Section>
      </main>

      {/* Transparent spacer with the footer's height so the fixed footer is revealed */}
      <Spacer variant={responsive} style={{ width: '100%', height: '100vh', pointerEvents: 'none' }} />

      {/* Fixed navbar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
        <div
          style={{ pointerEvents: 'auto', display: 'flex', justifyContent: 'center' }}
          onMouseEnter={() => setNavHovered(true)}
          onMouseLeave={() => setNavHovered(false)}
        >
          <Navbar variant={navVariant} />
        </div>
      </div>
    </div>
  )
}
