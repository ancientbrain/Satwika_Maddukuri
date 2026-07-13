"use client"

import {
  GraduationCap,
  Calendar,
  MapPin,
  Briefcase,
  Building2,
  Sparkles,
  ChevronRight,
  Linkedin,
  Github,
  Mail,
} from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import BackgroundAnimation from "../components/background-animation"

export default function EducationAndExperience() {
  const containerRef = useRef(null)

  const education = [
    {
      degree: "Master of Science in Information Systems",
      institution: "Northeastern University",
      location: "Boston, Massachusetts",
      duration: "Fall 2024 - December 2026 (Expected)",
      gpa: "3.3/4.0",
      details: [
        "Member of the NUNull club",
        "Specializing in Information security and its operations",
        "Built applications in Java and implemented a transactive model with SQL",
        "Courses: INFO7473 Operations Risk Management for Engineering, TELE6300 Communication and Network Security",
      ],
    },
    {
      degree: "Bachelor of Engineering in Information Science",
      institution: "BMS Institute of Technology and Management",
      location: "Bangalore, India",
      duration: "August 2019 - June 2023",
      gpa: "8.35/10.0",
      details: [
        "Built projects on web development, machine learning, NLP, and Android Systems",
        "Main project: Translative article summary generator",
        "Programming in C, Python, and Unix",
        "Algorithms and database structures, cloud computing, and supply chain",
      ],
    },
  ]

  const experience = [
    {
      title: "Cybersecurity Analyst Co-op",
      company: "Massachusetts State Lottery Commission",
      location: "Braintree, MA",
      duration: "July 2025 - Present",
      type: "Co-op",
      details: [
        "Conduct vulnerability management using Tenable, scanning and prioritizing vulnerabilities, and creating ServiceNow tickets for remediation by the networking team",
        "Authored detailed patch memos and collaborated with IT staff via Microsoft Teams to clarify mitigation steps and ensure timely resolution",
        "Implemented a Jira–Tenable exception tracking workflow to improve visibility and follow-up for vulnerabilities requiring extended remediation",
        "Supported threat detection operations by investigating alerts, conducting research, and verifying findings across tools such as Recorded Future, Splunk, and Microsoft Defender; documented results with analyst notes",
        "Designed and maintained structured documentation repositories on SharePoint, including developing guides, standards, and approval workflows using Power Automate",
        "Authored playbooks and remediation reports to standardize alert response and operational workflows",
      ],
      link: "#",
    },
    {
      title: "Operations Intern",
      company: "Suvidha Foundation",
      location: "India",
      duration: "January 2023 - March 2023",
      type: "Internship",
      details: [
        "Designed and maintained data collection systems, ensuring data accuracy and integrity to support critical decision making",
        "Generated actionable insights by analyzing operational data and producing dynamic reports on key trends",
        "Coordinated with cross-functional teams and external stakeholders to facilitate seamless communication and problem resolution",
        "Organized comprehensive documentation and structured records to enhance accessibility and streamline processes",
      ],
      link: "#",
    },
    {
      title: "Intern",
      company: "Verzeo",
      location: "India · Remote",
      duration: "June 2022 - July 2022 · 2 mos",
      type: "Internship",
      details: [
        "Focused on Cloud Computing and Azure cloud technologies",
        "Deployed and managed cloud infrastructure using Microsoft Azure services",
        "Implemented cloud security best practices and monitoring solutions",
        "Collaborated with team members on cloud migration strategies and optimization",
      ],
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <BackgroundAnimation />

      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center bg-no-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950" />
        <div className="relative flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-400">Education & Experience</h1>
            <p className="max-w-2xl text-xl text-gray-400">From classroom adventures to real-world shenanigans 🎓</p>
            <p className="mt-2 max-w-2xl text-lg text-gray-500">
              Because who said learning can't be fun? (My calculator still judges me though)
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20" ref={containerRef}>
        <div className="relative mx-auto max-w-5xl">
          {/* Education Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 flex items-center justify-center gap-3"
            >
              <div className="h-px w-12 bg-blue-400/50" />
              <h2 className="flex items-center gap-3 text-3xl font-bold text-blue-400">
                <GraduationCap className="h-8 w-8" />
                Education
              </h2>
              <div className="h-px w-12 bg-blue-400/50" />
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="group relative overflow-hidden rounded-lg bg-slate-900/90 backdrop-blur-sm p-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                        <div className="space-y-2">
                          <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-400">
                            {edu.degree}
                            <Sparkles className="h-5 w-5 text-yellow-400" />
                          </h3>
                          <p className="text-lg font-medium text-gray-300">{edu.institution}</p>
                        </div>
                        <div className="rounded-lg bg-blue-400/10 px-4 py-2">
                          <p className="text-sm font-medium text-blue-400">GPA</p>
                          <p className="text-2xl font-bold text-blue-300">{edu.gpa}</p>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-800/30 p-4 transition-all duration-200 hover:bg-slate-800/50">
                        <ul className="space-y-3 text-sm text-gray-400">
                          {edu.degree === "Master of Science in Information Systems" ? (
                            <>
                              <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                                Member of the NUNull club
                              </li>
                              <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                                Specializing in Information security and its operations
                              </li>
                              <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                                Built applications in Java and implemented a transactive model with SQL
                              </li>
                              <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                                Courses: INFO7473 Operations Risk Management for Engineering, TELE6300 Communication and
                                Network Security
                              </li>
                            </>
                          ) : (
                            <>
                              <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                                Built projects on web development, machine learning, NLP, and Android Systems
                              </li>
                              <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                                Main project: Translative article summary generator
                              </li>
                              <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                                Programming in C, Python, and Unix
                              </li>
                              <li className="flex items-start gap-3">
                                <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                                Algorithms and database structures, cloud computing, and supply chain
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 flex items-center justify-center gap-3"
            >
              <div className="h-px w-12 bg-blue-400/50" />
              <h2 className="flex items-center gap-3 text-3xl font-bold text-blue-400">
                <Briefcase className="h-8 w-8" />
                Experience
              </h2>
              <div className="h-px w-12 bg-blue-400/50" />
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="group relative overflow-hidden rounded-lg bg-slate-900/90 backdrop-blur-sm p-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-blue-400" />
                            <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                          </div>
                          <p className="text-lg font-medium text-gray-300">{exp.company}</p>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-800/30 p-4 transition-all duration-200 hover:bg-slate-800/50">
                        <ul className="space-y-3 text-sm text-gray-400">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <ChevronRight className="mt-1 h-4 w-4 text-blue-400/70 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
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
