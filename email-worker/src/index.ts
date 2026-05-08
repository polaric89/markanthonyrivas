import { EmailMessage } from 'cloudflare:email'

interface Env {
  SEND_EMAIL: SendEmail
}

interface ContactPayload {
  name: string
  email: string
  company?: string
  budget?: string
  timeline?: string
  message: string
}

function isAllowed(origin: string | null): boolean {
  if (!origin) return false
  return (
    origin === 'https://markanthonyrivas.site' ||
    origin.endsWith('.markanthonyrivas.pages.dev') ||
    origin === 'https://markanthonyrivas.pages.dev'
  )
}

function getCORS(origin: string | null) {
  const allow = isAllowed(origin) ? origin! : 'https://markanthonyrivas.site'
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
    'Content-Type': 'application/json',
  }
}

function respond(data: unknown, status = 200, origin?: string | null) {
  return new Response(JSON.stringify(data), { status, headers: getCORS(origin ?? null) })
}

function buildMime(from: string, to: string, subject: string, html: string): string {
  const boundary = `----=_Part_${Math.random().toString(36).slice(2)}`
  const encode = (s: string) => {
    try { return `=?utf-8?B?${btoa(unescape(encodeURIComponent(s)))}?=` } catch { return s }
  }
  return [
    `From: Portfolio Contact Form <${from}>`,
    `To: ${to}`,
    `Subject: ${encode(subject)}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/html; charset=utf-8',
    'Content-Transfer-Encoding: 7bit',
    '',
    html,
    '',
    `--${boundary}--`,
  ].join('\r\n')
}

function buildHtml(p: ContactPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">` +
    `<span style="color:#94a3b8;font-size:12px;display:block;margin-bottom:2px;">${label}</span>` +
    `<span style="color:#0f172a;font-size:15px;">${value}</span></td></tr>`

  const rows = [
    row('From', `<strong>${p.name}</strong>`),
    row('Reply to', `<a href="mailto:${p.email}" style="color:#00d4ff;text-decoration:none;">${p.email}</a>`),
    p.company ? row('Company', p.company) : '',
    p.budget ? row('Budget', `<strong>${p.budget}</strong>`) : '',
    p.timeline ? row('Timeline', p.timeline) : '',
  ].filter(Boolean).join('\n')

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">
  <tr><td style="background:linear-gradient(135deg,#050b18,#0d1630);padding:32px 40px;">
    <p style="margin:0;color:#00d4ff;font-size:11px;letter-spacing:.15em;text-transform:uppercase;font-weight:600;">markanthonyrivas.site</p>
    <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:700;">New Project Proposal</h1>
  </td></tr>
  <tr><td style="padding:36px 40px;">
    <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    <h2 style="color:#0f172a;font-size:13px;font-weight:700;margin:24px 0 10px;text-transform:uppercase;letter-spacing:.08em;">Project Details</h2>
    <div style="background:#f8fafc;border-left:3px solid #00d4ff;border-radius:0 8px 8px 0;padding:16px 20px;">
      <p style="margin:0;color:#334155;font-size:15px;line-height:1.75;">${p.message.replace(/\n/g, '<br/>')}</p>
    </div>
  </td></tr>
  <tr><td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;">
    <p style="margin:0;color:#94a3b8;font-size:12px;">Via <a href="https://markanthonyrivas.site" style="color:#00d4ff;text-decoration:none;">markanthonyrivas.site</a></p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin')
    const cors = getCORS(origin)
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })
    if (request.method !== 'POST') return respond({ error: 'Method not allowed' }, 405, origin)

    let payload: ContactPayload
    try { payload = await request.json() as ContactPayload }
    catch { return respond({ error: 'Invalid JSON' }, 400, origin) }

    const { name, email, message } = payload
    if (!name?.trim() || !email?.trim() || !message?.trim())
      return respond({ error: 'Name, email, and message are required.' }, 400, origin)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return respond({ error: 'Invalid email address.' }, 400, origin)

    const FROM = 'noreply@markanthonyrivas.site'
    const TO = 'mark.anthony.rivas89@gmail.com'
    const subject = `New proposal from ${name}${payload.company ? ` · ${payload.company}` : ''}`

    try {
      const raw = buildMime(FROM, TO, subject, buildHtml(payload))
      const msg = new EmailMessage(FROM, TO, raw)
      await env.SEND_EMAIL.send(msg)
      return respond({ success: true }, 200, origin)
    } catch (err) {
      console.error(err)
      return respond({ error: 'Failed to send. Please email directly.' }, 500, origin)
    }
  },
}
