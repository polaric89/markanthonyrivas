interface Env {
  RESEND_API_KEY: string
}

interface ContactPayload {
  name: string
  email: string
  company?: string
  budget?: string
  timeline?: string
  message: string
}

const JSON_HEADERS = { 'Content-Type': 'application/json' }

function buildHtml(p: ContactPayload): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:120px;vertical-align:top;color:#94a3b8;font-size:12px">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#0f172a;font-size:15px">${value}</td>
    </tr>`

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 20px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)">
  <tr><td style="background:linear-gradient(135deg,#050b18,#0d1630);padding:32px 40px">
    <p style="margin:0;color:#00d4ff;font-size:11px;letter-spacing:.15em;text-transform:uppercase;font-weight:600">markanthonyrivas.site</p>
    <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:700">New Project Proposal</h1>
  </td></tr>
  <tr><td style="padding:36px 40px">
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row('From', `<strong>${p.name}</strong>`)}
      ${row('Reply to', `<a href="mailto:${p.email}" style="color:#00d4ff;text-decoration:none">${p.email}</a>`)}
      ${p.company ? row('Company', p.company) : ''}
      ${p.budget ? row('Budget', `<strong>${p.budget}</strong>`) : ''}
      ${p.timeline ? row('Timeline', p.timeline) : ''}
    </table>
    <h2 style="color:#0f172a;font-size:13px;font-weight:700;margin:24px 0 10px;text-transform:uppercase;letter-spacing:.08em">Project Details</h2>
    <div style="background:#f8fafc;border-left:3px solid #00d4ff;border-radius:0 8px 8px 0;padding:16px 20px">
      <p style="margin:0;color:#334155;font-size:15px;line-height:1.75">${p.message
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br/>')}</p>
    </div>
  </td></tr>
  <tr><td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0">
    <p style="margin:0;color:#94a3b8;font-size:12px">Via <a href="https://markanthonyrivas.site" style="color:#00d4ff;text-decoration:none">markanthonyrivas.site</a></p>
  </td></tr>
</table></td></tr></table></body></html>`
}

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204 })

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let payload: ContactPayload
  try {
    payload = await context.request.json() as ContactPayload
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request.' }), { status: 400, headers: JSON_HEADERS })
  }

  const { name, email, message } = payload
  if (!name?.trim() || !email?.trim() || !message?.trim())
    return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), { status: 400, headers: JSON_HEADERS })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return new Response(JSON.stringify({ error: 'Invalid email address.' }), { status: 400, headers: JSON_HEADERS })

  if (!context.env.RESEND_API_KEY)
    return new Response(JSON.stringify({ error: 'Email service not configured.' }), { status: 503, headers: JSON_HEADERS })

  const subject = `New proposal from ${name}${payload.company ? ` · ${payload.company}` : ''}`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['mark.anthony.rivas89@gmail.com'],
        reply_to: email,
        subject,
        html: buildHtml(payload),
      }),
    })

    const data = await res.json() as { id?: string; name?: string; message?: string }

    if (!res.ok) {
      console.error('Resend error:', JSON.stringify(data))
      return new Response(JSON.stringify({ error: data.message || 'Email delivery failed.' }), { status: 500, headers: JSON_HEADERS })
    }

    return new Response(JSON.stringify({ success: true }), { headers: JSON_HEADERS })
  } catch (err) {
    console.error('Send error:', String(err))
    return new Response(JSON.stringify({ error: 'Failed to send. Please email directly.' }), { status: 500, headers: JSON_HEADERS })
  }
}
