export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-blue-400">© {new Date().getFullYear()} Satwika Maddukuri. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-300 hover:text-blue-400">
              Instagram
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-400">
              Twitter
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

