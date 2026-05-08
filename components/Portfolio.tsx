'use client'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Category } from '@/data/projects'

const filters: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'Shopify', value: 'shopify' },
  { label: 'React / Next.js', value: 'react' },
  { label: 'Web3', value: 'web3' },
  { label: 'Mobile', value: 'mobile' },
]

const toolColor = (tool: string) => {
  const t = tool.toLowerCase()
  if (t.includes('react native')) return 'text-pink-400 bg-pink-500/8 border-pink-500/15'
  if (t.includes('next') || t.includes('react')) return 'text-[#00d4ff] bg-[#00d4ff]/8 border-[#00d4ff]/15'
  if (t.includes('solidity') || t.includes('wagmi') || t.includes('web3')) return 'text-purple-400 bg-purple-500/8 border-purple-500/15'
  if (t.includes('typescript') || t.includes('node')) return 'text-blue-400 bg-blue-500/8 border-blue-500/15'
  if (t.includes('tailwind')) return 'text-cyan-400 bg-cyan-500/8 border-cyan-500/15'
  if (t.includes('shopify')) return 'text-emerald-400 bg-emerald-500/8 border-emerald-500/15'
  if (t.includes('wordpress') || t.includes('woocommerce')) return 'text-indigo-300 bg-indigo-500/8 border-indigo-500/15'
  if (t.includes('aws') || t.includes('docker')) return 'text-orange-400 bg-orange-500/8 border-orange-500/15'
  return 'text-slate-400 bg-white/[0.04] border-white/[0.08]'
}

const getDayLabel = (days: number | string) => {
  if (days === 'Ongoing') return { label: 'Ongoing', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' }
  if (typeof days === 'number' && days >= 180) return { label: `${days}d`, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' }
  return { label: `${days}d`, color: 'text-slate-400 bg-white/[0.04] border-white/[0.08]' }
}

export default function Portfolio() {
  const [active, setActive] = useState<Category>('all')

  const filtered = useMemo(
    () =>
      active === 'all' ? projects : projects.filter((p) => p.categories.includes(active as Exclude<Category, 'all'>)),
    [active]
  )

  return (
    <section id="portfolio" className="py-28 sm:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase mb-4 block">
            // 03 — Portfolio
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Selected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
              Work
            </span>
          </h2>
          <p className="text-slate-500 text-sm max-w-sm mx-auto">
            50+ projects delivered across WordPress, Shopify, React, and Web3 ecosystems.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                active === f.value
                  ? 'bg-[#00d4ff]/10 border-[#00d4ff]/40 text-[#00d4ff] shadow-[0_0_16px_rgba(0,212,255,0.15)]'
                  : 'border-white/[0.07] text-slate-400 hover:text-slate-200 hover:border-white/15 bg-white/[0.02]'
              }`}
            >
              {f.label}
              {active === f.value && (
                <motion.div
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl bg-[#00d4ff]/5"
                  transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const badge = getDayLabel(project.days)
              const toolList = project.tools.split(',').map((t) => t.trim()).slice(0, 3)

              return (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 10 }}
                  transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-[#0d1630] rounded-2xl border border-white/[0.06] p-5 hover:border-[#00d4ff]/20 hover:shadow-[0_0_40px_rgba(0,212,255,0.06),0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-400 flex flex-col gap-4 overflow-hidden"
                >
                  {/* Card gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                  {/* Featured accent */}
                  {project.featured && (
                    <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-[#00d4ff]/40 to-transparent" />
                  )}

                  <div className="flex items-start justify-between gap-2 relative">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-white text-base leading-tight mb-1 group-hover:text-[#00d4ff] transition-colors duration-200 truncate">
                        {project.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {project.desc}
                      </p>
                    </div>
                    <span className={`shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-full border ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>

                  {/* Tool badges */}
                  <div className="flex flex-wrap gap-1.5 relative">
                    {toolList.map((tool) => (
                      <span
                        key={tool}
                        className={`text-[10px] font-mono px-2 py-1 rounded-lg border ${toolColor(tool)}`}
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.split(',').length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-1 rounded-lg border text-slate-500 bg-white/[0.03] border-white/[0.06]">
                        +{project.tools.split(',').length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between relative pt-3 border-t border-white/[0.04]">
                    <div className="flex gap-1">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-[9px] uppercase tracking-wider text-slate-600 font-mono"
                        >
                          #{cat}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#00d4ff] transition-colors duration-200 group/link font-medium"
                      aria-label={`View ${project.name} live site`}
                    >
                      Live
                      <svg
                        className="w-3 h-3 group-hover/link:translate-x-px group-hover/link:-translate-y-px transition-transform duration-150"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-700 text-xs font-mono mt-8"
        >
          Showing {filtered.length} of {projects.length} projects
        </motion.p>
      </div>
    </section>
  )
}
