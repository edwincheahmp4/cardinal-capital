import Head from 'next/head'
import Link from 'next/link'
import issues from '../data/issues.json'

const ACCENT = '#C8102E'
const BORDER = '#E8E8E8'
const GRAY = '#888888'
const FONT_SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
const FONT_SERIF = "Georgia, 'Times New Roman', serif"

export default function Home() {
  const latest = issues[0]

  return (
    <>
      <Head>
        <title>Cardinal &amp; Capital</title>
        <meta name="description" content="A weekly market digest for students and curious minds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: FONT_SANS }}>

        {/* ── Nav ── 
        
         <nav style={{
          background: '#fff', borderBottom: `1px solid ${BORDER}`,
          height: '52px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 28px',
        }}>
          <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.3px' }}>
            Cardinal <span style={{ color: ACCENT }}>&amp;</span> Capital
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <Link href="/archive" style={{ fontSize: '13px', fontWeight: 500, color: GRAY, textDecoration: 'none' }}>
              Archive
            </Link>
          </div>
        </nav>
        
        */} 

        {/* ── Issue header ── */}
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 28px 24px', width: '100%' }}>
          <p style={{
            margin: '0 0 10px',
            fontFamily: FONT_SANS,
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: ACCENT,
          }}>
            {latest.volume} &nbsp;·&nbsp; {latest.date} &nbsp;·&nbsp; Latest Issue
          </p>
          <h1 style={{
            margin: '0 0 14px',
            fontFamily: FONT_SANS,
            fontSize: '28px', fontWeight: 800,
            lineHeight: 1.2, letterSpacing: '-0.5px',
            color: '#1A1A1A',
          }}>
            {latest.headline}
          </h1>
          <p style={{
            margin: '0 0 20px',
            fontFamily: FONT_SERIF,
            fontSize: '16px', lineHeight: 1.6, color: '#6B6B6B',
          }}>
            {latest.summary}
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a
              href={latest.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', fontWeight: 600, color: ACCENT, textDecoration: 'none' }}
            >
              Open in new tab →
            </a>
            <Link href="/archive" style={{ fontSize: '13px', color: GRAY, textDecoration: 'none' }}>
              Past issues
            </Link>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ borderTop: `1px solid ${BORDER}`, margin: '0 28px' }} />

        {/* ── Newsletter iframe ── */}
        <iframe
          src={latest.file}
          style={{ width: '100%', flex: 1, minHeight: '85vh', border: 'none', display: 'block' }}
          title={latest.headline}
        />

        {/* ── Footer ── */}
        <footer style={{
          borderTop: `2px solid #1A1A1A`,
          padding: '20px 28px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: '14px', fontWeight: 800 }}>
            Cardinal <span style={{ color: ACCENT }}>&amp;</span> Capital
          </span>
          <Link href="/archive" style={{ fontSize: '13px', color: GRAY, textDecoration: 'none' }}>
            View all issues →
          </Link>
        </footer>

      </div>
    </>
  )
}
