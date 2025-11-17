import { useEffect, useState } from 'react'
import { Menu, X, Download, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`

  const closeMobile = () => setOpen(false)

  return (
    <header className={navClasses}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="font-semibold tracking-tight">Damion Marcus</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-slate-700 hover:text-slate-950">About</a>
            <a href="#experience" className="text-sm text-slate-700 hover:text-slate-950">Experience</a>
            <a href="#projects" className="text-sm text-slate-700 hover:text-slate-950">Projects</a>
            <a href="#contact" className="text-sm text-slate-700 hover:text-slate-950">Contact</a>
            <a href="/Damion-Marcus-Resume.pdf" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-md transition">
              <Download className="h-4 w-4" /> Resume
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-4 animate-in">
            <div className="flex flex-col gap-3">
              <a onClick={closeMobile} href="#about" className="text-sm">About</a>
              <a onClick={closeMobile} href="#experience" className="text-sm">Experience</a>
              <a onClick={closeMobile} href="#projects" className="text-sm">Projects</a>
              <a onClick={closeMobile} href="#contact" className="text-sm">Contact</a>
              <a onClick={closeMobile} href="mailto:damion.marcus@example.com" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-md transition w-fit">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
