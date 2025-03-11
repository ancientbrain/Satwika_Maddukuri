"use client"

import { Github, FileText, Code, Shield, Database, Network, Server, Cpu, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BackgroundAnimation from "../components/background-animation"
import { useState } from "react"

export default function Projects() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title)
  }

  const projects = [
    {
      title: "Smart Hydroponic Farm Management System",
      description:
        "Developed an SQL-based database with automated crop, harvest, order, and facility management packages, ensuring robust validation and error handling. Designed a scalable schema supporting IoT sensor integration for monitoring and anomaly detection. Enhanced operational efficiency with dynamic reports on environmental metrics, crop cycles, and sales trends.",
      technologies: [
        "SQL",
        "Database Design",
        "IoT",
        "Python",
        "Data Analytics",
        "Automation",
        "Sensor Integration",
        "Reporting",
      ],
      github: "https://github.com/LikhithNG17/DMDD-project-team_17",
      document: "/documents/hydroponic-farm-system",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Translative Article Summary Generator using NLP",
      description:
        "Developed an innovative NLP-based system that automatically generates concise summaries of articles while preserving key information. Implemented advanced natural language processing techniques to analyze text structure, identify important content, and generate coherent summaries. The system also supports translation capabilities, allowing summaries to be generated in multiple languages.",
      technologies: [
        "Python",
        "Natural Language Processing",
        "Machine Learning",
        "NLTK",
        "Transformers",
        "Text Analysis",
        "Translation API",
        "Sentiment Analysis",
      ],
      github: "https://github.com/ancientbrain/Translative_Article_Summary_Generator/tree/main",
      document: "https://drive.google.com/file/d/1tYLI2gXiMSIV6ovWyqBNvU2dTH-AYDeo/view?usp=sharing",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Zero Trust Network Security Project",
      description:
        "Implementing a Zero Trust security model to enhance threat detection, access control, and network security. Conducting cyber threat intelligence analysis to track attack patterns and emerging vulnerabilities. Utilizing security monitoring tools and OSINT research methodologies to strengthen proactive threat defense.",
      technologies: [
        "Zero Trust Architecture",
        "Threat Intelligence",
        "OSINT",
        "Security Monitoring",
        "Access Control",
        "Network Security",
      ],
      github: "https://github.com/ancientbrain/Zero-Trust-Security-Project",
      document: "#",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Skills organized by category with source tags
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        {
          name: "Network Security",
          sources: ["ISC2 CC", "MS Information Systems", "Zero Trust Network Security Project"],
        },
        { name: "Vulnerability Assessment", sources: ["ISC2 CC", "MS Information Systems"] },
        {
          name: "Security Information and Event Management (SIEM)",
          sources: ["MS Information Systems", "Mastercard Virtual Experience"],
        },
        { name: "Incident Response", sources: ["ISC2 CC", "Mastercard Virtual Experience"] },
        { name: "Penetration Testing", sources: ["MS Information Systems", "TryHackMe"] },
        { name: "Security Auditing", sources: ["ISC2 CC", "Tata Cybersecurity Simulation"] },
        {
          name: "Access Control",
          sources: ["ISC2 CC", "Tata Cybersecurity Simulation", "Zero Trust Network Security Project"],
        },
        { name: "Risk Assessment", sources: ["MS Information Systems", "ISC2 CC"] },
        { name: "Threat Intelligence", sources: ["Zero Trust Network Security Project"] },
        { name: "OSINT Research", sources: ["Zero Trust Network Security Project"] },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", sources: ["NLP Project", "BE Degree"] },
        { name: "Java", sources: ["MS Degree", "BE Degree"] },
        { name: "C++", sources: ["BE Degree"] },
        { name: "SQL", sources: ["Hydroponic Farm Project", "MS Degree"] },
        { name: "Shell Scripting", sources: ["BE Degree", "MS Information Systems"] },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Server,
      skills: [
        { name: "Wireshark", sources: ["MS Information Systems"] },
        { name: "Nmap", sources: ["MS Information Systems", "TryHackMe"] },
        { name: "Metasploit", sources: ["MS Information Systems", "HackTheBox"] },
        { name: "Burp Suite", sources: ["MS Information Systems", "TryHackMe"] },
        { name: "Splunk", sources: ["MS Information Systems", "Mastercard Virtual Experience"] },
        { name: "NLTK", sources: ["NLP Project", "BE Degree"] },
        { name: "Security Monitoring Tools", sources: ["Zero Trust Network Security Project"] },
        { name: "Zero Trust Architecture", sources: ["Zero Trust Network Security Project"] },
      ],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "SQL Database Design", sources: ["Hydroponic Farm Project", "MS Degree"] },
        { name: "MongoDB", sources: ["BE Degree", "MS Degree"] },
        { name: "AWS Security", sources: ["MS Information Systems"] },
        { name: "Azure Security", sources: ["MS Information Systems"] },
        { name: "Cloud Infrastructure", sources: ["MS Degree"] },
        { name: "Database Administration", sources: ["Hydroponic Farm Project", "MS Degree"] },
      ],
    },
    {
      title: "Networking",
      icon: Network,
      skills: [
        { name: "TCP/IP Protocols", sources: ["MS Information Systems"] },
        { name: "Firewall Configuration", sources: ["MS Information Systems", "ISC2 CC"] },
        { name: "VPN Setup & Management", sources: ["MS Information Systems"] },
        { name: "Network Architecture", sources: ["MS Information Systems", "Zero Trust Network Security Project"] },
        { name: "Router & Switch Configuration", sources: ["MS Information Systems"] },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      skills: [
        { name: "Natural Language Processing", sources: ["NLP Project", "BE Degree"] },
        { name: "Machine Learning", sources: ["NLP Project", "BE Degree"] },
        { name: "Text Analysis", sources: ["NLP Project"] },
        { name: "Sentiment Analysis", sources: ["NLP Project", "BE Degree"] },
        { name: "Data Analytics", sources: ["Hydroponic Farm Project", "MS Degree"] },
        { name: "Transformers", sources: ["NLP Project"] },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 pt-16">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 py-20">
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-4">Featured Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in cybersecurity, database management, and system
            development.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-900/90 shadow-lg transition-all duration-300 hover:shadow-blue-400/20 hover:shadow-2xl h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="relative p-6 flex-grow flex flex-col">
                  <h3 className="mb-3 text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-400 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-blue-400/10 px-3 py-1 text-xs text-blue-300 transition-colors duration-300 hover:bg-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 relative z-10 mt-auto pt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400/10 transition-all duration-300">
                        <Github className="h-4 w-4" />
                        Code
                      </button>
                    </a>

                    <a href={project.document} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400/10 transition-all duration-300">
                        <FileText className="h-4 w-4" />
                        Document
                      </button>
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay - moved below buttons in the DOM and adjusted z-index */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-blue-400/20 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
            My technical skills have been developed through hands-on project experience and professional certifications,
            focusing on cybersecurity, programming, and system development.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-slate-900/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]"
              >
                <CardHeader className="cursor-pointer" onClick={() => toggleCategory(category.title)}>
                  <CardTitle className="flex items-center justify-between text-blue-400">
                    <div className="flex items-center gap-2">
                      <category.icon className="h-6 w-6" />
                      {category.title}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCategory === category.title ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </CardTitle>
                </CardHeader>
                <AnimatePresence>
                  {expandedCategory === category.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <CardContent>
                        <ul className="grid grid-cols-1 gap-3">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.li
                              key={skillIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                              className="rounded-lg bg-slate-800/50 px-4 py-3 text-gray-300 transition-colors duration-200 hover:bg-slate-800"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-blue-300">{skill.name}</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {skill.sources.map((source, sourceIndex) => (
                                  <span
                                    key={sourceIndex}
                                    className={`text-xs px-2 py-1 rounded-full ${getSourceColor(source)}`}
                                  >
                                    {source}
                                  </span>
                                ))}
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}

// Helper function to determine tag color based on source type
function getSourceColor(source: string): string {
  if (source.includes("Project")) {
    return "bg-green-400/20 text-green-300" // Project-based skills
  } else if (source.includes("ISC2") || source.includes("Virtual Experience") || source.includes("Simulation")) {
    return "bg-purple-400/20 text-purple-300" // Certification-based skills
  } else if (source.includes("MS") || source.includes("BE Degree")) {
    return "bg-blue-400/20 text-blue-300" // Education-based skills
  } else if (source.includes("TryHackMe") || source.includes("HackTheBox")) {
    return "bg-red-400/20 text-red-300" // Platform-based skills
  } else {
    return "bg-gray-400/20 text-gray-300" // Other sources
  }
}

