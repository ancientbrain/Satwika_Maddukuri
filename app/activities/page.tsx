"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Trophy, GraduationCap, Linkedin, Github, Mail, FileText } from "lucide-react"
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
          date: "Feb 2025 - Present",
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
          name: "Graduate Leadership Institute (LEAD360)",
          role: "Participant",
          date: "Oct 2024 - Present",
          description:
            "Engaged in comprehensive leadership development program focusing on personal growth, team dynamics, and organizational leadership skills through workshops and experiential learning.",
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
          date: "Sep 2024 - Dec 2024",
          description: "Participated in one-on-one mentorship with GSS Mentor",
        },
        {
          name: "International Information System Security Certification Consortium (ISC2)",
          role: "Member",
          date: "May 2024 - Present",
          description:
            "Active member of ISC2, participating in cybersecurity professional development and networking opportunities.",
        },
        {
          name: "National Engineering Olympiad",
          role: "NEO6P-46556",
          date: "29th March 2022",
          description:
            "Participated in the 6th National Engineering Olympiad, demonstrating technical knowledge and problem-solving skills in a competitive engineering environment.",
          pdfLink: "https://drive.google.com/file/d/1eWdir4LVBdiSS0iz_AICvTwdhH1_qkb9/view",
          hasPdf: true,
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
                  <div className="flex items-center">
                    <CardTitle className="flex items-center gap-2 text-blue-400">
                      <category.icon className="h-6 w-6" />
                      {category.title}
                    </CardTitle>
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
                          <div>
                            <h3 className="font-semibold text-blue-400">
                              {item.name}
                              {item.hasPdf && (
                                <a
                                  href={item.pdfLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center ml-2 text-xs text-blue-300 hover:text-blue-200"
                                >
                                  <FileText className="h-4 w-4 mr-1" />
                                  View Certificate
                                </a>
                              )}
                            </h3>
                            {item.date && <p className="text-xs text-gray-500 mt-1">{item.date}</p>}
                          </div>
                          <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-400">
                            {item.role}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{item.description}</p>
                        {item.hasPdf && (
                          <a
                            href={item.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block"
                          >
                            <div className="border border-blue-400/20 rounded-md overflow-hidden group cursor-pointer w-32 h-24">
                              <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-19%20001946-HpSlh40yh91K8ruoSibccWxii3Jcxh.png"
                                alt="National Engineering Olympiad Certificate"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                <FileText className="h-5 w-5 text-white" />
                              </div>
                            </div>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Footer with Social Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/satwikamaddukuri/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-400"
            >
              <Linkedin className="h-7 w-7 transition-transform group-hover:scale-110" />
              <span className="sr-only">LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/ancientbrain"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-400"
            >
              <Github className="h-7 w-7 transition-transform group-hover:scale-110" />
              <span className="sr-only">GitHub Profile</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Mail className="h-4 w-4" />
            <a href="mailto:satwikam2129@gmail.com" className="text-sm hover:text-blue-400 transition-colors">
              satwikam2129@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
