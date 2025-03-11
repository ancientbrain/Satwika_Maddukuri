"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, GraduationCap, FolderGit2, Brain, Award, Heart } from "lucide-react"

export default function Nav() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/projects", label: "Projects", icon: FolderGit2 },
    { href: "/skills", label: "Skills", icon: Brain },
    { href: "/certifications", label: "Certifications", icon: Award },
    { href: "/interests", label: "Interests", icon: Heart },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-blue-400">
            SM
          </Link>
          <div className="flex space-x-4">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center space-x-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-800",
                  pathname === href ? "bg-slate-800 text-blue-400" : "text-slate-400 hover:text-blue-400",
                )}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

