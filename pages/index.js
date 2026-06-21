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

        {/* ── Nav ── */} 
        
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
