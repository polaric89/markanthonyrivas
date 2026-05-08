'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const codeLines = [
  { indent: 0, content: [{ color: 'text-purple-400', text: 'const ' }, { color: 'text-[#00d4ff]', text: 'developer' }, { color: 'text-slate-300', text: ' = {' }] },
  { indent: 1, content: [{ color: 'text-slate-500', text: 'name:    ' }, { color: 'text-emerald-400', text: "'Mark Anthony Rivas'" }, { color: 'text-slate-600', text: ',' }] },
  { indent: 1, content: [{ color: 'text-slate-500', text: 'role:    ' }, { color: 'text-emerald-400', text: "'Senior Full-Stack Dev'" }, { color: 'text-slate-600', text: ',' }] },
  { indent: 1, content: [{ color: 'text-slate-500', text: 'base:    ' }, { color: 'text-emerald-400', text: "'Dubai, UAE (GMT+4)'" }, { color: 'text-slate-600', text: ',' }] },
  { indent: 1, content: [{ color: 'text-slate-500', text: 'exp:     ' }, { color: 'text-orange-400', text: '10' }, { color: 'text-slate-600', text: ',' }] },
  { indent: 1, content: [{ color: 'text-slate-500', text: 'stack:   ' }, { color: 'text-yellow-400', text: '[' }] },
  { indent: 2, content: [{ color: 'text-emerald-400', text: "'React'" }, { color: 'text-slate-600', text: ', ' }, { color: 'text-emerald-400', text: "'Next.js'" }, { color: 'text-slate-600', text: ',' }] },
  { indent: 2, content: [{ color: 'text-emerald-400', text: "'Node.js'" }, { color: 'text-slate-600', text: ', ' }, { color: 'text-emerald-400', text: "'Solidity'" }, { color: 'text-slate-600', text: ',' }] },
  { indent: 2, content: [{ color: 'text-emerald-400', text: "'TypeScript'" }, { color: 'text-slate-600', text: ', ' }, { color: 'text-emerald-400', text: "'AWS'" }] },
  { indent: 1, content: [{ color: 'text-yellow-400', text: '],' }] },
  { indent: 1, content: [{ color: 'text-slate-500', text: 'available:' }, { color: 'text-orange-400', text: ' true' }] },
  { indent: 0, content: [{ color: 'text-slate-300', text: '};' }] },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 sm:py-36 relative" ref={ref}>
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase mb-4 block">
              // 01 — About Me
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Building the web,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
                one layer at a time
              </span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-[1.75] text-[15px]">
              <p>
                Senior full-stack developer with hands-on experience across React, Next.js, Node.js, and Web3
                stacks. Comfortable owning features end-to-end — from smart contract integration and API design
                through to TypeScript front-ends and accessible UI.
              </p>
              <p>
                10+ years delivering production web, mobile, and e-commerce solutions for global clients across
                fintech, insurance, blockchain, and enterprise sectors. Currently splitting time between contract
                Web3 work and front-end consulting.
              </p>
              <p>
                Strong timezone overlap with EU (5–9 hrs) and US East (8–11 hrs). Available for remote
                permanent, contract, or freelance engagements.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="text-sm text-[#00d4ff] border border-[#00d4ff]/25 px-5 py-2.5 rounded-lg hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 transition-all duration-200 font-medium"
              >
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="text-sm text-slate-400 hover:text-white transition-colors py-2.5 font-medium inline-flex items-center gap-1.5 group"
              >
                See Projects
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right — Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-[#0d1630] rounded-2xl border border-white/[0.06] p-6 shadow-[0_0_60px_rgba(0,212,255,0.04),0_24px_64px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="ml-2 text-slate-600 text-xs font-mono">developer.ts</span>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-1.5 leading-relaxed">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
                    style={{ paddingLeft: `${line.indent * 16}px` }}
                    className="flex"
                  >
                    {line.content.map((part, j) => (
                      <span key={j} className={part.color}>
                        {part.text}
                      </span>
                    ))}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="mt-5 pt-4 border-t border-white/[0.04] flex items-center gap-2 font-mono text-xs"
              >
                <span className="text-[#00d4ff]">▶</span>
                <span className="text-slate-600">Ready for your next project</span>
                <span className="animate-pulse text-[#00d4ff] text-base leading-none">_</span>
              </motion.div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/[0.02] to-[#7c3aed]/[0.03] pointer-events-none" />
            </div>

            {/* Floating stat badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute -top-5 -right-5 bg-[#0a1428] border border-[#00d4ff]/20 rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            >
              <div className="text-2xl font-bold font-heading text-[#00d4ff] leading-none">50+</div>
              <div className="text-xs text-slate-500 mt-1">Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-5 -left-5 bg-[#0a1428] border border-purple-500/20 rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            >
              <div className="text-2xl font-bold font-heading text-purple-400 leading-none">10+</div>
              <div className="text-xs text-slate-500 mt-1">Years Exp</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
