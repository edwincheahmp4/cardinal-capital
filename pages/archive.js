import Head from 'next/head'
import Link from 'next/link'
import issues from '../data/issues.json'

const ACCENT = '#C8102E'
const BORDER = '#E8E8E8'
const GRAY = '#888888'
const FONT_SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
const FONT_SERIF = "Georgia, 'Times New Roman', serif"

export default function Archive() {
  return (
    <>
      <Head>
        <title>Archive — Cardinal &amp; Capital</title>
        <meta name="description" content="Every issue of Cardinal & Capital, from the beginning." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: FONT_SANS }}>

        {/* ── Nav ── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: '#fff', borderBottom: `1px solid ${BORDER}`,
          height: '52px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 28px',
        }}>
          <Link href="/" style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.3px', textDecoration: 'none', color: '#1A1A1A' }}>
            Cardinal <span style={{ color: ACCENT }}>&amp;</span> Capital
          </Link>
          <Link href="/archive" style={{ fontSize: '13px', fontWeight: 700, color: '#1A1A1A', textDecoration: 'none' }}>
            Archive
          </Link>
        </nav>

        {/* ── Header ── */}
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '48px 28px 0', width: '100%' }}>
          <h1 style={{
            margin: '0 0 8px',
            fontSize: '36px', fontWeight: 800,
            letterSpacing: '-0.5px', color: '#1A1A1A',
          }}>
            Archive
          </h1>
          <p style={{ margin: '0 0 40px', fontSize: '14px', color: GRAY }}>
            {issues.length} {issues.length === 1 ? 'issue' : 'issues'} published.
          </p>

          {/* ── Issue list ── */}
          <div style={{ borderTop: `2px solid #1A1A1A` }}>
            {issues.map((issue) => (
              <a
                key={issue.slug}
                href={issue.file}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '20px',
                  padding: '28px 0',
                  borderBottom: `1px solid ${BORDER}`,
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {/* Left: metadata + headline + summary */}
                <div style={{ flex: 1 }}>
                  <p style={{
                    margin: '0 0 8px',
                    fontSize: '11px', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: ACCENT,
                  }}>
                    {issue.volume} &nbsp;·&nbsp; {issue.date}
                  </p>
                  <h2 style={{
                    margin: '0 0 10px',
                    fontSize: '20px', fontWeight: 800,
                    lineHeight: 1.25, letterSpacing: '-0.3px',
                    color: '#1A1A1A',
                  }}>
                    {issue.headline}
                  </h2>
                  <p style={{
                    margin: 0,
                    fontFamily: FONT_SERIF,
                    fontSize: '14px', lineHeight: 1.65,
                    color: '#6B6B6B',
                  }}>
                    {issue.summary}
                  </p>
                </div>

                {/* Right: arrow */}
                <span style={{ fontSize: '20px', color: ACCENT, flexShrink: 0, paddingTop: '22px' }}>
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, minHeight: '60px' }} />

        {/* ── Footer ── */}
        <footer style={{
          borderTop: `2px solid #1A1A1A`,
          padding: '20px 28px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: '14px', fontWeight: 800 }}>
            Cardinal <span style={{ color: ACCENT }}>&amp;</span> Capital
          </span>
          <Link href="/" style={{ fontSize: '13px', color: GRAY, textDecoration: 'none' }}>
            ← Latest issue
          </Link>
        </footer>

      </div>
    </>
  )
}
