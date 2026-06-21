export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const PUB_ID  = process.env.BEEHIIV_PUB_ID   // e.g. pub_xxxxxxxx
  const API_KEY = process.env.BEEHIIV_API_KEY   // e.g. beehiiv_...

  if (!PUB_ID || !API_KEY) {
    console.error('Missing BEEHIIV_PUB_ID or BEEHIIV_API_KEY env vars')
    return res.status(500).json({ error: 'Server misconfiguration.' })
  }

  try {
    const beehiivRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'website',
          utm_medium: 'subscribe_page',
        }),
      }
    )

    if (!beehiivRes.ok) {
      const err = await beehiivRes.json().catch(() => ({}))
      console.error('Beehiiv error:', err)
      return res.status(500).json({ error: 'Could not subscribe. Please try again.' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Fetch error:', err)
    return res.status(500).json({ error: 'Network error. Please try again.' })
  }
}
