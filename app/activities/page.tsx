"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Trophy, GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import BackgroundAnimation from "../components/background-animation"

export default function Activities() {
  const activities = [
    {
      title: "Clubs & Organizations",
      icon: Users,
      timeframe: "2023 - Present",
      items: [
        {
          name: "Women in Technology (WiT)",
          role: "Active Member",
          description:
            "Participate in workshops, networking events, and mentorship programs focused on promoting women in tech fields.",
        },
      ],
    },
    {
      title: "Volunteering & Community Service",
      icon: Heart,
      timeframe: "2023 - Present",
      items: [
        {
          name: "Roslindale Food Collective",
          role: "Program Helper",
          description: "Unload donated food, organize and sort food, pack bags/boxes, food distribution/clean up",
        },
      ],
    },
    {
      title: "Leadership Experience",
      icon: Trophy,
      timeframe: "2023 - Present",
      items: [
        {
          name: "Graduate Student Advisory Board",
          role: "Student Representative",
          description: "Represent student interests in academic policy discussions and program improvements.",
        },
      ],
    },
    {
      title: "Professional Development",
      icon: GraduationCap,
      timeframe: "2022 - Present",
      items: [
        {
          name: "Graduate Student Service",
          role: "Mentee",
          description: "Participated in one-on-one mentorship with GSS Mentor",
        },
        {
          name: "International Information System Security Certification Consortium (ISC2)",
          role: "Member",
          description:
            "Active member of ISC2, participating in cybersecurity professional development and networking opportunities.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 pt-16">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold text-blue-400"
        >
          Activities & Leadership
        </motion.h1>
        <div className="mx-auto grid max-w-6xl gap-8">
          {activities.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group bg-slate-900/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                <CardHeader className="border-b border-slate-800">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-blue-400">
                      <category.icon className="h-6 w-6" />
                      {category.title}
                    </CardTitle>
                    <span className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {category.timeframe}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="rounded-lg bg-slate-800/50 p-4 transition-all duration-200 hover:bg-slate-800"
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-semibold text-blue-400">{item.name}</h3>
                          <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-400">
                            {item.role}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

