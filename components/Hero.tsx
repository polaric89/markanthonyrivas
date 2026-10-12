'use client'
import { motion } from 'framer-motion'

const badges = [
  {
    key: 'github',
    href: 'https://github.com/polaric89',
    position: 'top-[4%] right-[6%]',
    size: 'w-[58px] h-[58px]',
    bg: 'bg-white text-[#15112a]',
    duration: 3.4,
    delay: 0,
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.56v-2.17c-3.16.69-3.83-1.36-3.83-1.36-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.52-.29-5.17-1.26-5.17-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.5-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.61 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.38-2.66 5.34-5.19 5.62.41.35.77 1.04.77 2.11v3.12c0 .31.21.67.79.56 4.52-1.51 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    key: 'whatsapp',
    href: 'https://wa.me/66618034048',
    position: 'top-[32%] right-[-3%]',
    size: 'w-[50px] h-[50px]',
    bg: 'bg-[#00d4ff] text-white',
    duration: 3.9,
    delay: 0.9,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.17-.02-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.66 1.4 5.2L2 22l4.95-1.3A9.95 9.95 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
      </svg>
    ),
  },
  {
    key: 'email',
    href: 'mailto:mark.anthony.rivas89@gmail.com',
    position: 'top-[53%] right-[15%]',
    size: 'w-[46px] h-[46px]',
    bg: 'bg-white/85 text-[#7c3aed]',
    duration: 3,
    delay: 1.7,
    icon: (
      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(120deg, #f4f1ff 0%, #e6e2fb 20%, #c2b2f6 48%, #8f6cea 72%, #6327cf 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-start pt-40 pb-20">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pb-10"
        >
          <span className="inline-flex text-xs font-mono tracking-[0.14em] uppercase text-[#7c3aed] mb-5">
            // Senior Full-Stack Developer
          </span>

          <h1 className="font-heading font-bold leading-[1.08] text-[#15112a] text-4xl sm:text-5xl lg:text-[54px]">
            Hire Me To Build
            <br />
            Your Next{' '}
            <span className="relative inline-block text-[#7c3aed]">
              Product.
              <svg
                className="absolute left-[2%] -bottom-[0.28em] w-[96%] h-[0.3em] text-[#7c3aed] opacity-80"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 10 Q 25 2, 50 10 T 100 10 T 150 10 T 198 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M2 16 Q 25 9, 50 16 T 100 16 T 150 16 T 198 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-[42ch] text-[#15112a]/70 text-[15.5px] leading-[1.7]">
            I&apos;m Mark, a Thailand-based full-stack developer with 10+ years shipping production
            web, mobile, Web3, and enterprise software — from solo-founder apps to insurance
            platforms serving thousands of policyholders.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-white text-[#15112a] font-heading font-semibold text-sm shadow-[0_10px_30px_rgba(21,17,42,0.18)] hover:shadow-[0_14px_36px_rgba(21,17,42,0.24)] transition-shadow duration-200 active:scale-[0.97]"
            >
              Get In Touch
            </a>

            <div className="flex items-center gap-2.5">
              {badges.map((b) => (
                <a
                  key={b.key}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={b.key}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#15112a]/55 hover:text-[#7c3aed] transition-colors duration-200"
                >
                  <span className="w-4 h-4 [&>svg]:w-full [&>svg]:h-full">{b.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — photo + floating badges + info panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[560px] lg:min-h-[640px]"
        >
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] w-[128%]">
            <img
              src="/hero-photo.png"
              alt="Mark Anthony Rivas presenting his portfolio on a laptop"
              className="w-full h-auto block"
            />
          </div>

          {badges.map((b) => (
            <motion.a
              key={b.key}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={b.key}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute ${b.position} ${b.size} ${b.bg} rounded-full flex items-center justify-center shadow-[0_10px_24px_rgba(21,17,42,0.22)] z-[3]`}
            >
              {b.icon}
            </motion.a>
          ))}

          <div className="absolute right-[-6%] bottom-[6%] w-[270px] bg-[#7c3aed] text-white rounded-2xl px-[22px] pt-[22px] pb-5 shadow-[0_20px_50px_rgba(21,17,42,0.25)] z-[2]">
            <div className="flex items-center gap-2.5 font-semibold text-[15px] mb-2.5">
              <span className="w-4 h-[3px] bg-white rounded-sm shrink-0" />
              Full-Stack Developer
            </div>
            <p className="text-[12.5px] leading-[1.6] text-white/80 mb-4">
              Shipping web, mobile &amp; Web3 products for clients worldwide.
            </p>
            <div className="flex items-center gap-2.5 font-semibold text-[13.5px]">
              <svg className="w-[15px] h-[15px]" viewBox="0 0 512 512" fill="currentColor">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              <span>+66 618 034 048</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
