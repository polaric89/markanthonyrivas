import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mark Anthony Rivas — Senior Full-Stack Developer',
  description:
    'Senior full-stack developer specializing in React, Next.js, Node.js, and Web3. 10+ years delivering production web, mobile, and e-commerce solutions globally. Available for remote roles.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Web3 Developer',
    'Blockchain Developer',
    'Node.js Developer',
    'Dubai',
    'Remote Developer',
    'TypeScript',
    'Solidity',
  ],
  authors: [{ name: 'Mark Anthony Rivas', url: 'https://markanthonyrivas.site' }],
  openGraph: {
    title: 'Mark Anthony Rivas — Senior Full-Stack Developer',
    description:
      'Senior full-stack developer specializing in React, Next.js, Node.js, and Web3. Available for remote roles.',
    type: 'website',
    url: 'https://markanthonyrivas.site',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Anthony Rivas — Senior Full-Stack Developer',
    description: 'Senior full-stack developer · React · Next.js · Web3 · Available remotely',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#050b18] text-slate-100 antialiased font-body`}
      >
        {children}
      </body>
    </html>
  )
}
