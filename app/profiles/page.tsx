"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code2, ExternalLink, Target, Shield, Binary, Briefcase } from "lucide-react"

export default function Profiles() {
  const platforms = [
    {
      name: "LeetCode",
      icon: Code2,
      stats: [
        { label: "Problems Solved", value: "200+" },
        { label: "Contest Rating", value: "1550" },
        { label: "Global Ranking", value: "Top 15%" },
      ],
      link: "https://leetcode.com/your_profile",
      bgColor: "from-yellow-400/10 to-orange-400/10",
    },
    {
      name: "HackerRank",
      icon: Binary,
      stats: [
        { label: "Problem Solving", value: "5 Stars" },
        { label: "Python", value: "4 Stars" },
        { label: "SQL", value: "4 Stars" },
      ],
      link: "https://www.hackerrank.com/your_profile",
      bgColor: "from-green-400/10 to-emerald-400/10",
    },
    {
      name: "TryHackMe",
      icon: Shield,
      stats: [
        { label: "Rank", value: "Top 5%" },
        { label: "Rooms Completed", value: "25+" },
        { label: "Badges Earned", value: "15" },
      ],
      link: "https://tryhackme.com/your_profile",
      bgColor: "from-red-400/10 to-pink-400/10",
    },
    {
      name: "HackTheBox",
      icon: Target,
      stats: [
        { label: "Machines Pwned", value: "20+" },
        { label: "Challenges Solved", value: "15+" },
        { label: "Rank", value: "Pro Hacker" },
      ],
      link: "https://app.hackthebox.com/your_profile",
      bgColor: "from-green-400/10 to-blue-400/10",
    },
    {
      name: "Forage",
      icon: Briefcase,
      stats: [
        { label: "Programs Completed", value: "2" },
        { label: "Skills Developed", value: "12+" },
        { label: "Industry Experience", value: "Cybersecurity" },
      ],
      link: "https://www.theforage.com/profile/wHXhS2aG4XeAaKuwc",
      bgColor: "from-blue-400/10 to-purple-400/10",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          className="mb-16 text-center text-4xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Profiles
        </motion.h1>

        {/* Coding Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-6xl"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-slate-900/90 transition-all duration-300 hover:scale-[1.02]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <CardContent className="relative p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-blue-400/20 p-2">
                        <platform.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-400">{platform.name}</h3>
                    </div>
                    <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-blue-400/10" asChild>
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {platform.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="font-semibold text-gray-300">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

