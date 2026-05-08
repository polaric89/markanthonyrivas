'use client'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
    desc: 'End-to-end web, mobile, and e-commerce projects across 10+ years',
    color: '#00d4ff',
    gradient: 'from-[#00d4ff]/15 to-[#00d4ff]/5',
    border: 'border-[#00d4ff]/15',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    desc: 'Deep expertise spanning frontend, backend, blockchain, and mobile',
    color: '#a855f7',
    gradient: 'from-[#a855f7]/15 to-[#a855f7]/5',
    border: 'border-[#a855f7]/15',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: 40,
    suffix: '%',
    label: 'Avg Load Time Improvement',
    desc: 'Through caching, image optimization, and targeted code refactoring',
    color: '#34d399',
    gradient: 'from-[#34d399]/15 to-[#34d399]/5',
    border: 'border-[#34d399]/15',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    value: 30,
    suffix: '%',
    label: 'Fewer Deployment Errors',
    desc: 'By implementing automated testing suites and CI/CD pipeline improvements',
    color: '#fb923c',
    gradient: 'from-[#fb923c]/15 to-[#fb923c]/5',
    border: 'border-[#fb923c]/15',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

function AnimatedNumber({ value, inView, color }: { value: number; inView: boolean; color: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.floor(v))
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.5, ease: 'easeOut' })
      controls.then(() => {
        if (ref.current) ref.current.textContent = String(value)
      })
      return controls.stop
    }
  }, [inView, value, count])

  return (
    <motion.span ref={ref} style={{ color }}>
      {rounded}
    </motion.span>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="py-28 sm:py-36 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-mono text-[#00d4ff] tracking-[0.2em] uppercase mb-4 block">
            // 05 — Impact
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Results That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
              Matter
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative bg-[#0d1630] rounded-2xl border ${stat.border} p-6 text-center overflow-hidden group hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-all duration-400`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${stat.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl`}
                aria-hidden="true"
              />

              <div className="relative">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${stat.color}15`, color: stat.color, border: `1px solid ${stat.color}25` }}
                >
                  {stat.icon}
                </div>

                <div className="font-heading text-4xl sm:text-5xl font-bold mb-1 leading-none">
                  <AnimatedNumber value={stat.value} inView={inView} color={stat.color} />
                  <span style={{ color: stat.color }}>{stat.suffix}</span>
                </div>

                <div className="font-heading font-semibold text-white text-sm mt-2 mb-2">
                  {stat.label}
                </div>

                <p className="text-slate-500 text-xs leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
