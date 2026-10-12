'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚛️',
    color: '#0ea5c0',
    gradient: 'from-[#0ea5c0]/10 to-[#0ea5c0]/5',
    border: 'border-[#0ea5c0]/15',
    glow: 'rgba(14,165,192,0.12)',
    skills: ['React', 'Next.js', 'TypeScript', 'React Native', 'Redux', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion', 'Accessibility'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#4f46e5',
    gradient: 'from-[#4f46e5]/10 to-[#4f46e5]/5',
    border: 'border-[#4f46e5]/15',
    glow: 'rgba(79,70,229,0.12)',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Microservices', 'Authentication', 'API Design'],
  },
  {
    category: 'Web3 & Blockchain',
    icon: '🔗',
    color: '#9333ea',
    gradient: 'from-[#9333ea]/10 to-[#9333ea]/5',
    border: 'border-[#9333ea]/15',
    glow: 'rgba(147,51,234,0.12)',
    skills: ['Solidity', 'ERC-20 / 721 / 1155', 'Web3.js', 'Ethers.js', 'Wagmi / Viem', 'MetaMask', 'WalletConnect', 'NFT Marketplaces', 'Smart Contracts'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#059669',
    gradient: 'from-[#059669]/10 to-[#059669]/5',
    border: 'border-[#059669]/15',
    glow: 'rgba(5,150,105,0.12)',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization', 'Data Modeling'],
  },
  {
    category: 'E-commerce',
    icon: '🛒',
    color: '#ea580c',
    gradient: 'from-[#ea580c]/10 to-[#ea580c]/5',
    border: 'border-[#ea580c]/15',
    glow: 'rgba(234,88,12,0.12)',
    skills: ['Shopify', 'Liquid', 'Storefront API', 'WooCommerce', 'Builder.io', 'Payment Gateways', 'Conversion Optimization'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    color: '#0284c7',
    gradient: 'from-[#0284c7]/10 to-[#0284c7]/5',
    border: 'border-[#0284c7]/15',
    glow: 'rgba(2,132,199,0.12)',
    skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'Vercel', 'Cloudflare', 'CI/CD Pipelines', 'Performance Optimization'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 sm:py-36 relative bg-[#f0eef9]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-900/[0.06] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-900/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-mono text-[#0ea5c0] tracking-[0.2em] uppercase mb-4 block">
            // 02 — Tech Stack
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5c0] to-[#7c3aed]">
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
              className={`relative bg-white rounded-2xl border ${group.border} p-6 hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500 group overflow-hidden`}
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
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-900/[0.04] border border-slate-900/[0.08] text-slate-600 font-mono hover:text-slate-900 hover:border-slate-900/20 transition-colors duration-200 cursor-default"
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
