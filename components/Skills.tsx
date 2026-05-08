'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚛️',
    color: '#00d4ff',
    gradient: 'from-[#00d4ff]/10 to-[#00d4ff]/5',
    border: 'border-[#00d4ff]/15',
    glow: 'rgba(0,212,255,0.12)',
    skills: ['React', 'Next.js', 'TypeScript', 'React Native', 'Redux', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion', 'Accessibility'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#818cf8',
    gradient: 'from-[#818cf8]/10 to-[#818cf8]/5',
    border: 'border-[#818cf8]/15',
    glow: 'rgba(129,140,248,0.12)',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Microservices', 'Authentication', 'API Design'],
  },
  {
    category: 'Web3 & Blockchain',
    icon: '🔗',
    color: '#a855f7',
    gradient: 'from-[#a855f7]/10 to-[#a855f7]/5',
    border: 'border-[#a855f7]/15',
    glow: 'rgba(168,85,247,0.12)',
    skills: ['Solidity', 'ERC-20 / 721 / 1155', 'Web3.js', 'Ethers.js', 'Wagmi / Viem', 'MetaMask', 'WalletConnect', 'NFT Marketplaces', 'Smart Contracts'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#34d399',
    gradient: 'from-[#34d399]/10 to-[#34d399]/5',
    border: 'border-[#34d399]/15',
    glow: 'rgba(52,211,153,0.12)',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization', 'Data Modeling'],
  },
  {
    category: 'E-commerce',
    icon: '🛒',
    color: '#fb923c',
    gradient: 'from-[#fb923c]/10 to-[#fb923c]/5',
    border: 'border-[#fb923c]/15',
    glow: 'rgba(251,146,60,0.12)',
    skills: ['Shopify', 'Liquid', 'Storefront API', 'WooCommerce', 'Builder.io', 'Payment Gateways', 'Conversion Optimization'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    color: '#38bdf8',
    gradient: 'from-[#38bdf8]/10 to-[#38bdf8]/5',
    border: 'border-[#38bdf8]/15',
    glow: 'rgba(56,189,248,0.12)',
    skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'Vercel', 'Cloudflare', 'CI/CD Pipelines', 'Performance Optimization'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 sm:py-36 relative bg-[#080f1f]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase mb-4 block">
            // 02 — Tech Stack
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
              Expertise
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            A decade of building with modern stacks — from pixel-perfect frontends to production smart contracts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative bg-[#0d1630] rounded-2xl border ${group.border} p-6 hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500 group overflow-hidden`}
              style={{ '--glow': group.glow } as React.CSSProperties}
            >
              {/* Card bg gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} aria-hidden="true" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                    style={{ background: `${group.color}15`, border: `1px solid ${group.color}25` }}
                  >
                    {group.icon}
                  </div>
                  <h3
                    className="font-heading font-semibold text-sm tracking-wide"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.08 + j * 0.03 + 0.2 }}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-400 font-mono hover:text-slate-200 hover:border-white/15 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
