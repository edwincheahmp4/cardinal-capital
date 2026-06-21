import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const ACCENT   = '#C8102E'
const BLACK    = '#1A1A1A'
const GRAY     = '#888888'
const BORDER   = '#E8E8E8'
const FONT_SANS   = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
const FONT_SERIF  = "Georgia, 'Times New Roman', serif"

export default function Subscribe() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [msg, setMsg]       = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setMsg(data.error || 'Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setMsg('Network error. Please try again.')
    }
  }

  return (
    <>
      <Head>
        <title>Subscribe — Cardinal &amp; Capital</title>
        <meta name="description" content="The week in markets, made readable. Free every Friday." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph — for Instagram link previews */}
        <meta property="og:title" content="Cardinal & Capital" />
        <meta property="og:description" content="The week in markets, made readable. Free every Friday." />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ minHeight: '100vh', fontFamily: FONT_SANS, background: '#fff' }}>

        {/* ── Slim top nav ── */}
        <nav style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 28px', height: '52px',
          borderBottom: `1px solid ${BORDER}`,
        }}>
          <Link href="/" style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.3px', textDecoration: 'none', color: BLACK }}>
            Cardinal <span style={{ color: ACCENT }}>&amp;</span> Capital
          </Link>
          <Link href="/" style={{ fontSize: '13px', color: GRAY, textDecoration: 'none' }}>
            Archive →
          </Link>
        </nav>

        {/* ── Hero ── */}
        <div style={{
          maxWidth: '560px', margin: '0 auto',
          padding: '80px 28px 64px',
          textAlign: 'center',
        }}>

          {/* Eyebrow */}
          <p style={{
            margin: '0 0 20px',
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: ACCENT,
          }}>
            Free &nbsp;·&nbsp; Every Friday
          </p>

          {/* Masthead */}
          <h1 style={{
            margin: '0 0 8px',
            fontSize: '52px', fontWeight: 800,
            letterSpacing: '-2px', lineHeight: 1,
            color: BLACK,
          }}>
            Cardinal <span style={{ color: ACCENT }}>&amp;</span> Capital
          </h1>

          {/* Tagline */}
          <p style={{
            margin: '0 0 36px',
            fontFamily: FONT_SERIF,
            fontSize: '20px', lineHeight: 1.5,
            color: '#444',
          }}>
            The week in markets, made readable.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div style={{
              background: '#F0FAF4', border: '1px solid #A8D5B5',
              borderRadius: '8px', padding: '24px 28px',
            }}>
              <p style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#1A7A3C' }}>
                You're in. 
              </p>
              <p style={{ margin: '6px 0 0', fontSize: '14px', color: '#444', fontFamily: FONT_SERIF }}>
                Next issue lands this Friday.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: '10px', maxWidth: '420px', margin: '0 auto' }}>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '14px 16px',
                    fontSize: '15px',
                    border: `1.5px solid ${status === 'error' ? ACCENT : '#D0D0D0'}`,
                    borderRadius: '6px',
                    outline: 'none',
                    fontFamily: FONT_SANS,
                    color: BLACK,
                  }}
                  onFocus={e => e.target.style.borderColor = BLACK}
                  onBlur={e => e.target.style.borderColor = status === 'error' ? ACCENT : '#D0D0D0'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    padding: '14px 22px',
                    fontSize: '14px', fontWeight: 700,
                    background: status === 'loading' ? '#888' : ACCENT,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    fontFamily: FONT_SANS,
                    whiteSpace: 'nowrap',
                    transition: 'background 0.15s',
                  }}
                >
                  {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
                </button>
              </div>
              {status === 'error' && (
                <p style={{ margin: '10px 0 0', fontSize: '13px', color: ACCENT }}>{msg}</p>
              )}
              <p style={{ margin: '14px 0 0', fontSize: '12px', color: GRAY }}>
                No spam. Unsubscribe any time.
              </p>
            </form>
          )}
        </div>

        {/* ── What you get ── */}
        <div style={{ borderTop: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', padding: '56px 28px' }}>

            <p style={{
              margin: '0 0 36px',
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: GRAY, textAlign: 'center',
            }}>
              Every issue includes
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                {
                  title: 'Top Stories',
                  desc: 'The 3 biggest market events of the week — explained clearly, without jargon.',
                },
                {
                  title: 'Market Snapshot',
                  desc: 'Equities, rates, FX, and commodities in one clean table. Week-to-date, every Friday.',
                },
                {
                  title: 'Stocks on the Move',
                  desc: 'What surged, what sank, and the specific catalyst behind each move.',
                },
                {
                  title: 'Portfolio Pulse',
                  desc: 'The macro themes and trade ideas Wall Street is watching heading into next week.',
                },
              ].map((item, i, arr) => (
                <div key={item.title} style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  padding: '24px 0',
                  borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : 'none',
                }}>
                  <span style={{
                    flexShrink: 0,
                    width: '28px', height: '28px',
                    background: ACCENT, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 800, color: '#fff',
                    marginTop: '2px',
                  }}>
                    {i + 1}
                  </span>
                  <div>
                    <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 800, color: BLACK }}>{item.title}</p>
                    <p style={{ margin: 0, fontFamily: FONT_SERIF, fontSize: '15px', lineHeight: 1.6, color: '#555' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Read a sample ── */}
        <div style={{ borderTop: `2px solid ${BLACK}`, background: '#FAFAFA' }}>
          <div style={{ maxWidth: '560px', margin: '0 auto', padding: '48px 28px', textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GRAY }}>
              See for yourself
            </p>
            <p style={{ margin: '0 0 24px', fontSize: '20px', fontWeight: 800, color: BLACK, letterSpacing: '-0.3px' }}>
              Read a past issue
            </p>
            <Link href="/" style={{
              display: 'inline-block',
              padding: '13px 28px',
              fontSize: '14px', fontWeight: 700,
              border: `2px solid ${BLACK}`,
              borderRadius: '6px',
              textDecoration: 'none',
              color: BLACK,
            }}>
              Browse the archive →
            </Link>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer style={{
          borderTop: `1px solid ${BORDER}`,
          padding: '20px 28px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: '13px', fontWeight: 800, color: BLACK }}>
            Cardinal <span style={{ color: ACCENT }}>&amp;</span> Capital
          </span>
          <span style={{ fontSize: '12px', color: GRAY }}>
            Free · Every Friday
          </span>
        </footer>

      </div>
    </>
  )
}
