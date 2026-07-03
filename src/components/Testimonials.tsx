import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Person = {
  name: string
  role: string
  quote: string
  photo: string
}

const PEOPLE: Person[] = [
  {
    name: 'Julian Cross',
    role: 'CEO at Pulse',
    quote:
      '"Our SEO ranking was non-existent. The strategic overhaul and content restructure took us from invisible to the front page for our core keywords."',
    photo: 'https://framerusercontent.com/images/w13IY0Gu624pWlG7oTSwErEPwjk.jpg',
  },
  {
    name: 'Marcus Chen',
    role: 'CMO at Nexus AI',
    quote:
      '"Moving to Framer was a game changer. The team delivered a blazing fast site that my marketing team can actually update without needing to call a developer every time."',
    photo: 'https://framerusercontent.com/images/2NVL3jMblmzeXR7Nqe34dLAcFFw.jpg',
  },
  {
    name: 'Mia Thompson',
    role: 'Director at Velocity',
    quote:
      '"Professional, fast, and technically flawless. The new e-commerce experience is converting at twice the rate of our old platform."',
    photo: 'https://framerusercontent.com/images/zcLXbZeU5WlsuHErj9p04kprU.jpg',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Product Lead at Orbit',
    quote:
      '"Our churn rate was high because users found our dashboard confusing. This team simplified complex data into an intuitive UI that our customers actually love using."',
    photo: 'https://framerusercontent.com/images/MVkmnfNy2HTTjQh0RjZgtnMSBxk.jpg',
  },
]

const AUTO_ADVANCE_MS = 4000
const spring = { type: 'spring', stiffness: 200, damping: 30 } as const

function QuoteCard({ person, align }: { person: Person; align: 'left' | 'right' }) {
  return (
    <motion.div
      key={person.name}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={spring}
      style={{
        background: 'rgb(20, 20, 20)',
        borderRadius: 20,
        padding: 'clamp(20px, 2.2vw, 32px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(20px, 2.4vw, 36px)',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
      data-align={align}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <img
          src={`${person.photo}?scale-down-to=512`}
          alt={person.name}
          style={{ width: 46, height: 46, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ color: 'rgb(255, 255, 255)', fontSize: 16, fontWeight: 600, lineHeight: 1.3 }}>{person.name}</span>
          <span style={{ color: 'rgb(153, 153, 153)', fontSize: 14, fontWeight: 500, lineHeight: 1.3 }}>{person.role}</span>
        </div>
      </div>
      <p
        style={{
          margin: 0,
          color: 'rgb(153, 153, 153)',
          fontSize: 'clamp(16px, 1.45vw, 21px)',
          lineHeight: 1.5,
          fontWeight: 500,
          letterSpacing: '-0.01em',
        }}
      >
        {person.quote}
      </p>
    </motion.div>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => setIndex((i) => (i + 1) % PEOPLE.length), AUTO_ADVANCE_MS)
  }, [])

  useEffect(() => {
    restart()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [restart])

  const center = PEOPLE[index]
  const left = PEOPLE[(index + PEOPLE.length - 1) % PEOPLE.length]
  const right = PEOPLE[(index + 1) % PEOPLE.length]

  return (
    <section
      style={{
        width: '100%',
        background: 'rgb(3, 3, 3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        padding: 'clamp(40px, 4.4vw, 64px) 0 clamp(56px, 8.3vw, 120px)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1184, padding: '0 20px', boxSizing: 'border-box' }}>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(64px, 9.7vw, 144px)',
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: '-0.04em',
            color: 'rgb(255, 255, 255)',
          }}
        >
          Testimonials.
        </h2>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: 1184,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.18fr) minmax(0, 1fr)',
          gap: 'clamp(16px, 2vw, 28px)',
          alignItems: 'stretch',
          marginTop: 'clamp(40px, 6.7vw, 96px)',
          padding: '0 20px',
          boxSizing: 'border-box',
        }}
        className="testimonials-grid"
      >
        <div style={{ position: 'relative', minHeight: 260, maxHeight: 440 }}>
          <AnimatePresence mode="popLayout" initial={false}>
            <QuoteCard person={left} align="left" />
          </AnimatePresence>
        </div>

        <div
          style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            aspectRatio: '0.845 / 1',
            maxHeight: 440,
            background: 'rgb(15, 128, 84)',
          }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={center.photo}
              src={`${center.photo}?scale-down-to=1024`}
              alt={center.name}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={spring}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
          <div
            style={{
              position: 'absolute',
              bottom: 18,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 10,
              alignItems: 'center',
              background: 'rgb(15, 128, 84)',
              borderRadius: 100,
              padding: '10px 14px',
            }}
          >
            {PEOPLE.map((p, i) => (
              <button
                key={p.name}
                aria-label={`Show testimonial from ${p.name}`}
                onClick={() => {
                  setIndex(i)
                  restart()
                }}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: i === index ? 'rgb(3, 3, 3)' : 'rgba(255, 255, 255, 0.45)',
                  transition: 'background 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: 260, maxHeight: 440 }}>
          <AnimatePresence mode="popLayout" initial={false}>
            <QuoteCard person={right} align="right" />
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .testimonials-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
