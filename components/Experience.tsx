'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Steel Spear Media-FZCO',
    role: 'Senior Full-Stack Developer (Web3 Freelance)',
    period: 'Dec 2025 – Present',
    type: 'Current',
    color: '#00d4ff',
    bullets: [
      'Architected full-stack Web3 dApps with React, Next.js, Node.js, and Solidity — integrating smart contract logic with TypeScript front-ends.',
      'Deployed Solidity smart contracts on EVM-compatible chains including ERC-20 / ERC-721 token standards and staking mechanisms.',
      'Built responsive Next.js front-ends with wallet integrations (MetaMask, WalletConnect) for end-user onboarding.',
      'Developed REST and GraphQL APIs serving on-chain and off-chain data, with caching strategies and query optimization.',
    ],
  },
  {
    company: 'XFlame Tech Design LLC',
    role: 'Senior Front-End & Mobile Developer (Contract)',
    period: 'Apr 2025 – Nov 2025',
    type: 'Contract',
    color: '#818cf8',
    bullets: [
      'Architected a React Native mobile application deployed across multiple internal company products with shared component library.',
      'Led front-end development with React and Next.js, delivering performant, scalable, maintainable codebases across 6 casino platforms.',
      'Integrated front-end systems with Node.js APIs covering authentication, data flows, and error handling.',
      'Conducted code reviews and mentored junior developers across parallel project tracks.',
    ],
  },
  {
    company: 'Continental General Insurance Company',
    role: 'Senior Application Developer (Team Lead)',
    period: 'Jan 2023 – Mar 2025',
    type: 'Full-Time',
    color: '#34d399',
    bullets: [
      'Led design, development, and deployment of enterprise insurance applications serving thousands of policyholders.',
      'Owned architectural planning and translated complex business requirements into scalable technical solutions.',
      'Implemented automated testing and CI/CD pipelines, reducing deployment errors by ~30%.',
      'Collaborated across product, design, and back-end teams to ensure system reliability and security compliance.',
    ],
  },
  {
    company: 'Codebluedev',
    role: 'Senior Full-Stack Developer (Contract Lead)',
    period: 'Jan 2022 – Dec 2022',
    type: 'Contract',
    color: '#fb923c',
    bullets: [
      'Built full-stack applications using React, Node.js, and PHP for enterprise-level clients.',
      'Designed and optimized relational and NoSQL databases (MySQL, PostgreSQL, MongoDB) for high-traffic systems.',
      'Implemented microservices architecture with Docker for improved scalability.',
      'Integrated Stripe, PayPal, and multiple third-party APIs into production systems.',
    ],
  },
  {
    company: 'New Idea Web',
    role: 'Senior WordPress & Shopify Developer (Contract Lead)',
    period: 'Nov 2020 – Dec 2021',
    type: 'Contract',
    color: '#38bdf8',
    bullets: [
      'Built custom WordPress themes and plugins, and Shopify storefronts using Liquid and the Shopify APIs.',
      'Improved site performance by ~40% through caching, database optimization, and code refactoring.',
      'Implemented secure payment gateways and applied security hardening across client platforms.',
    ],
  },
  {
    company: 'SYSPLEX IT Solutions',
    role: 'Senior Blockchain Developer (Lead)',
    period: 'May 2019 – Sep 2020',
    type: 'Full-Time',
    color: '#a855f7',
    bullets: [
      'Designed and deployed NFT marketplaces, token contracts (ERC-20/721/1155), and staking mechanisms.',
      'Developed Solidity smart contracts with security-first practices, including audit readiness.',
      'Integrated Ethereum-based networks via JSON-RPC APIs and built on-chain reward systems.',
    ],
  },
  {
    company: 'Upwork & Direct Clients — Global',
    role: 'Independent Full-Stack Freelance',
    period: '2009 – Present',
    type: 'Freelance',
    color: '#fbbf24',
    bullets: [
      '50+ end-to-end web, mobile, and e-commerce projects across fintech, retail, and media.',
      'Stack across projects: React, Next.js, Node.js, WordPress, Shopify, with strong repeat-business and referrals.',
      'Earlier roles (2012–2021): Senior Developer, Lead Programmer, Blockchain Specialist, Systems Analyst across AU, PH, and global clients.',
    ],
  },
]

const typeColors: Record<string, string> = {
  Current: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Contract: 'text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/20',
  'Full-Time': 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Freelance: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-28 sm:py-36 relative bg-[#080f1f]" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase mb-4 block">
            // 04 — Experience
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Career{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
              Timeline
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/30 via-white/[0.06] to-transparent" aria-hidden="true" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[11px] sm:left-[18px] top-5 w-3 h-3 rounded-full border-2 border-[#050b18] timeline-dot shrink-0"
                  style={{ background: exp.color }}
                  aria-hidden="true"
                />

                <div className="bg-[#0d1630] rounded-2xl border border-white/[0.06] p-5 sm:p-6 hover:border-white/[0.1] transition-colors duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-heading font-semibold text-white text-base leading-tight">
                          {exp.role}
                        </h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${typeColors[exp.type]}`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-medium" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 font-mono shrink-0 sm:text-right pt-0.5 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mt-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: exp.color }} aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
