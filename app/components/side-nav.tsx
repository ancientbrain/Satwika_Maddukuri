"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, GraduationCap, FolderGit2, Award, Users } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "./theme-toggle"

export default function SideNav() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/education", label: "Education & Experience", icon: GraduationCap },
    { href: "/projects", label: "Projects & Skills", icon: FolderGit2 },
    { href: "/certifications", label: "Certifications", icon: Award },
    { href: "/activities", label: "Activities", icon: Users },
    // Profiles page removed from navigation but code is preserved
  ]

  return (
    <TooltipProvider>
      <nav className="fixed right-4 top-1/2 z-50 -translate-y-1/2 space-y-4">
        {links.map(({ href, label, icon: Icon }) => (
          <Tooltip key={href} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full transition-all",
                  "bg-slate-900/90 hover:bg-slate-800 dark:bg-slate-50/90 dark:hover:bg-blue-100",
                  pathname === href
                    ? "text-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.3)] dark:text-blue-600 dark:shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                    : "text-slate-400 hover:text-blue-400 dark:text-slate-600 dark:hover:text-blue-600",
                )}
              >
                <Icon size={20} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-slate-900 text-blue-400 dark:bg-blue-50 dark:text-blue-600">
              {label}
            </TooltipContent>
          </Tooltip>
        ))}

        {/* Theme Toggle */}
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </nav>
    </TooltipProvider>
  )
}

