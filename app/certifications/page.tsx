"use client"

import { Award, Calendar, ExternalLink, Shield, CheckCircle2, Cpu, Network, Linkedin, Github, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import BackgroundAnimation from "../components/background-animation"

export default function Certifications() {
  const isc2Certification = {
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2 - International Information System Security Certification Consortium",
    date: "Certified Since: 2024",
    validityPeriod: "May 1, 2024 - Apr 30, 2027",
    description:
      "Earned the ISC2 Certified in Cybersecurity (CC) certification, validating my expertise in foundational security principles, risk management, access control, and network security. This certification showcases my commitment to cybersecurity and ability to implement key security best practices in real-world scenarios. 🚀",
    accreditations: [
      "ANSI National Accreditation Board (ANAB) Accredited",
      "Globally Recognized Cybersecurity Certification",
      "Subject to ISC2 Code of Ethics and Bylaws",
    ],
    domains: [
      "Access Controls Concepts",
      "Business Continuity (BC) Concepts",
      "Disaster Recovery (DR) Concepts",
      "Incident Response Concepts",
      "Network Security",
      "Security Operations",
      "Security Principles",
    ],
    credlyLink: "https://www.credly.com/badges/9ab744a9-09e1-4321-a9f4-a40fd83081fc/linked_in_profile",
  }

  const forageCertifications = [
    {
      name: "Cybersecurity Security Analyst Job Simulation",
      issuer: "Tata Consultancy Services",
      date: "February 2025",
      duration: "8 Hours",
      description: [
        "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team",
        "Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives",
        "Delivered comprehensive documentation and presentations, showcasing the ability to communicate complex technical concepts effectively",
      ],
      skills: [
        "Identity & Access Management",
        "Security Analysis",
        "Risk Assessment",
        "Documentation",
        "Technical Communication",
        "Strategic Planning",
      ],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_wHXhS2aG4XeAaKuwc_1739494531328_completion_certificate.pdf",
    },
    {
      name: "Cybersecurity Virtual Experience Program",
      issuer: "Mastercard",
      date: "December 2024",
      duration: "5 Hours",
      description: [
        "Completed a job simulation where I served as an analyst on Mastercard's Security Awareness Team",
        "Helped identify and report security threats such as phishing",
        "Analyzed and identified which areas of the business needed more robust security training and implemented training courses and procedures for those teams",
      ],
      skills: [
        "Security Awareness",
        "Threat Detection",
        "Phishing Analysis",
        "Training Development",
        "Security Operations",
        "Risk Assessment",
      ],
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_Nq3ZHPN37Kv4BWPLc_1735447566920_completion_certificate.pdf",
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
          Professional Certifications
        </motion.h1>
        <div className="mx-auto max-w-3xl space-y-12">
          {/* ISC2 Certification */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="group relative overflow-hidden bg-slate-900/90">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Shield className="h-6 w-6" />
                  {isc2Certification.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-lg text-gray-300">{isc2Certification.issuer}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{isc2Certification.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <p className="text-gray-400">{isc2Certification.description}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-blue-400">Validity Period</h3>
                    <div className="rounded-lg bg-blue-400/10 px-4 py-3 text-gray-300">
                      {isc2Certification.validityPeriod}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-blue-400">Domains Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {isc2Certification.domains.map((domain, i) => (
                        <span key={i} className="rounded-full bg-blue-400/10 px-3 py-1 text-sm text-blue-400">
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-blue-400">Accreditations & Recognition</h3>
                    <ul className="grid gap-2">
                      {isc2Certification.accreditations.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-400">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={isc2Certification.credlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 flex items-center justify-center gap-2 w-full py-2 px-4 rounded-md border border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400/10 transition-colors cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Verify Certificate
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Forage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-400">
              <Cpu className="h-6 w-6" />
              Virtual Simulations
            </h2>
            <div className="grid gap-6">
              {forageCertifications.map((cert, index) => (
                <Card key={index} className="group relative overflow-hidden bg-slate-900/90">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Network className="h-5 w-5" />
                        <span className="text-lg">{cert.issuer}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-400/10" asChild>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-300">{cert.name}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span>{cert.duration}</span>
                        </div>
                      </div>
                    </div>

                    {cert.description && (
                      <div className="rounded-lg bg-slate-800/50 p-4">
                        <ul className="space-y-2 text-sm text-gray-400">
                          {cert.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-1 h-3 w-3 flex-shrink-0 text-blue-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="mb-2 font-medium text-blue-400">Skills Acquired</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="rounded-full bg-blue-400/10 px-3 py-1 text-sm text-blue-400">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 flex items-center justify-center gap-2 w-full py-2 px-4 mt-4 rounded-md border border-blue-400 text-blue-400 bg-transparent hover:bg-blue-400/10 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Verify Certificate
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
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
