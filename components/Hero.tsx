'use client'
import { motion } from 'framer-motion'

const techBadges = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Solidity', 'Web3', 'AWS', 'Docker']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg noise-overlay"
    >
      {/* Background ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#00d4ff]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] bg-[#7c3aed]/[0.06] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#00d4ff]/[0.025] rounded-full blur-[120px]" />

        {/* Grid corners highlight */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00d4ff]/[0.05] to-transparent" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#7c3aed]/[0.05] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-8 cursor-default"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-emerald-400 text-xs font-medium tracking-wide">
            Open to Work — Remote · Full-Time · Contract · Freelance
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold leading-[0.95] tracking-[-0.03em] mb-5"
        >
          <span className="block text-5xl sm:text-7xl lg:text-[88px] text-white mb-2">
            Mark Anthony
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#38bdf8] to-[#7c3aed] glow-text">
            Rivas
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-slate-400 text-base sm:text-lg font-body mb-3 tracking-wide"
        >
          Senior Full-Stack Developer · React · Next.js · Node.js · Web3
        </motion.p>

        {/* Location + availability */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-slate-600 text-sm mb-10 flex items-center justify-center gap-1.5 flex-wrap"
        >
          <svg className="w-3.5 h-3.5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Dubai, UAE (GMT+4) · EU overlap 5–9 hrs · US East overlap 8–11 hrs
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14"
        >
          <a
            href="#portfolio"
            className="group relative px-8 py-3.5 rounded-xl bg-[#00d4ff] text-[#050b18] font-heading font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all duration-200 glow-accent active:scale-[0.97] inline-flex items-center gap-2"
          >
            View Work
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl border border-white/10 text-slate-300 font-heading font-semibold text-sm hover:bg-white/[0.05] hover:border-white/20 hover:text-white transition-all duration-200 active:scale-[0.97] inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {techBadges.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 font-mono tracking-wide hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-colors duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] text-slate-700 tracking-[0.2em] uppercase font-mono">Scroll</span>
        <div className="relative w-px h-12 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-[#00d4ff]/40 to-transparent animate-[scan_2s_linear_infinite]" />
          <div className="w-px h-full bg-white/5" />
        </div>
      </motion.div>
    </section>
  )
}
