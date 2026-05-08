'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const budgetOptions = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Let\'s discuss',
]

const timelineOptions = [
  'ASAP',
  '1 – 2 weeks',
  '1 month',
  '2 – 3 months',
  '3 – 6 months',
  'Flexible',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', timeline: '', message: '' })
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (state === 'sending') return
    setState('sending')
    setErrorMsg('')

    try {
      const res = await fetch('https://markanthonyrivas-contact.mark-anthony-rivas89.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json() as { success?: boolean; error?: string }
      if (!res.ok || !data.success) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setState('error')
      } else {
        setState('success')
        setForm({ name: '', email: '', company: '', budget: '', timeline: '', message: '' })
      }
    } catch {
      setErrorMsg('Network error. Please try again or email directly.')
      setState('error')
    }
  }

  const inputBase =
    'w-full bg-[#0a1428] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00d4ff]/40 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all duration-200'

  return (
    <section id="contact" className="py-28 sm:py-36 relative bg-[#080f1f]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00d4ff]/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase mb-4 block">
            // 06 — Contact
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
              Great
            </span>
          </h2>
          <p className="text-slate-400 text-[15px] max-w-lg mx-auto leading-relaxed">
            Available for remote full-time, contract, and freelance engagements. Strong overlap
            with EU and US East timezones. Drop a proposal below.
          </p>
        </motion.div>

        {/* Availability + Email cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
        >
          {/* Availability */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-500/[0.07] border border-emerald-500/20 justify-center">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 text-sm font-medium">Currently available</span>
          </div>

          {/* Business email */}
          <a
            href="mailto:contact.me@markanthonyrivas.site"
            className="group flex items-center gap-3 bg-[#0d1630] border border-white/[0.06] rounded-2xl px-5 py-3 hover:border-[#00d4ff]/25 hover:shadow-[0_0_20px_rgba(0,212,255,0.06)] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-[#00d4ff]/60 font-mono mb-0.5">Business</div>
              <div className="text-xs text-slate-300 group-hover:text-[#00d4ff] transition-colors font-mono truncate">contact.me@markanthonyrivas.site</div>
            </div>
          </a>

          {/* Personal email */}
          <a
            href="mailto:mark.anthony.rivas89@gmail.com"
            className="group flex items-center gap-3 bg-[#0d1630] border border-white/[0.06] rounded-2xl px-5 py-3 hover:border-slate-500/25 hover:shadow-[0_0_20px_rgba(100,116,139,0.06)] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-mono mb-0.5">Personal</div>
              <div className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors font-mono">mark.anthony.rivas89@gmail.com</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/971589879416"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#0d1630] border border-white/[0.06] rounded-2xl px-5 py-3 hover:border-emerald-500/25 hover:shadow-[0_0_20px_rgba(52,211,153,0.06)] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-emerald-500/60 font-mono mb-0.5">WhatsApp</div>
              <div className="text-xs text-slate-400 group-hover:text-emerald-400 transition-colors font-mono">+971 589 879 416</div>
            </div>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0d1630] rounded-2xl border border-white/[0.06] p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" aria-hidden="true" />

          <div className="relative mb-6">
            <h3 className="font-heading font-semibold text-white text-lg mb-1">Project Proposal</h3>
            <p className="text-slate-500 text-sm">Tell me about your project and I&apos;ll get back to you within 24 hours.</p>
          </div>

          {state === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-white text-lg mb-2">Message sent!</h4>
              <p className="text-slate-400 text-sm mb-6">Thanks for reaching out. I&apos;ll reply to your email within 24 hours.</p>
              <button
                onClick={() => setState('idle')}
                className="text-xs text-[#00d4ff] border border-[#00d4ff]/25 px-4 py-2 rounded-lg hover:bg-[#00d4ff]/10 transition-colors"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-mono" htmlFor="cf-name">
                    Name <span className="text-[#00d4ff]">*</span>
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={set('name')}
                    required
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-mono" htmlFor="cf-email">
                    Email <span className="text-[#00d4ff]">*</span>
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={set('email')}
                    required
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-mono" htmlFor="cf-company">
                    Company / Organization
                  </label>
                  <input
                    id="cf-company"
                    type="text"
                    placeholder="Acme Inc. (optional)"
                    value={form.company}
                    onChange={set('company')}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-mono" htmlFor="cf-budget">
                    Budget Range
                  </label>
                  <select
                    id="cf-budget"
                    value={form.budget}
                    onChange={set('budget')}
                    className={`${inputBase} appearance-none`}
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-mono" htmlFor="cf-timeline">
                    Timeline
                  </label>
                  <select
                    id="cf-timeline"
                    value={form.timeline}
                    onChange={set('timeline')}
                    className={`${inputBase} appearance-none`}
                  >
                    <option value="">Select a timeline</option>
                    {timelineOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs text-slate-500 mb-1.5 font-mono" htmlFor="cf-message">
                  Project Details <span className="text-[#00d4ff]">*</span>
                </label>
                <textarea
                  id="cf-message"
                  rows={5}
                  placeholder="Describe your project — what you need built, tech preferences, key features, anything relevant..."
                  value={form.message}
                  onChange={set('message')}
                  required
                  className={`${inputBase} resize-none`}
                />
              </div>

              {state === 'error' && (
                <div className="mb-4 flex items-start gap-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3">
                  <svg className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-rose-400 text-xs">{errorMsg}</span>
                </div>
              )}

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <p className="text-slate-600 text-xs font-mono">
                  Delivered to <span className="text-slate-500">contact.me@markanthonyrivas.site</span>
                </p>
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#00d4ff] text-[#050b18] font-heading font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all duration-200 glow-accent active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {state === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Proposal
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Location / timezone details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-600"
        >
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            </svg>
            Dubai, UAE (GMT+4)
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            EU overlap 5–9 hrs · US East 8–11 hrs
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Remote · Full-Time · Contract · Freelance
          </div>
        </motion.div>
      </div>
    </section>
  )
}
