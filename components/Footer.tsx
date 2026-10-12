export default function Footer() {
  return (
    <footer className="bg-[#f6f5fb] border-t border-slate-900/[0.06] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs font-mono">
        <span>© {new Date().getFullYear()} Mark Anthony Rivas · All rights reserved</span>
        <div className="flex items-center gap-4">
          <a href="mailto:mark.anthony.rivas89@gmail.com" className="hover:text-[#0ea5c0] transition-colors">
            Email
          </a>
          <a href="https://wa.me/66618034048" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
            WhatsApp
          </a>
          <a href="https://github.com/polaric89" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
