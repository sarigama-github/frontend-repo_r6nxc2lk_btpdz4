import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <GradientDivider />
        <About />
        <Experience />
        <SectionDivider />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-10 mt-20">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Damion Marcus. All rights reserved.</p>
          <a href="#home" className="text-sm text-slate-700 hover:text-slate-950">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

function GradientDivider() {
  return (
    <div className="relative">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  )
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="relative my-10 rounded-xl border border-slate-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-[1px]">
        <div className="rounded-xl bg-white p-4 text-center text-sm text-slate-600">
          Explore more case studies below
        </div>
      </div>
    </div>
  )
}

export default App
