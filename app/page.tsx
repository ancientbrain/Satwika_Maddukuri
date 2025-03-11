"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { Film, Utensils, Linkedin, Github, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(59, 130, 246, 0.2)" // Brighter blue particles
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Introduction Section with Animation */}
      <div className="relative h-screen">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="relative z-10 h-full">
          <div className="container mx-auto px-4 h-full flex items-center max-w-[120rem]">
            <div className="grid gap-8 md:grid-cols-2 md:items-center w-full">
              <div className="text-center md:text-left md:pl-20 md:pr-4 w-full">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl xl:text-7xl whitespace-nowrap">
                  Satwika Maddukuri
                </h1>
                <p className="mb-6 text-xl text-blue-300">Information Systems Graduate Student</p>
                <p className="mb-8 text-gray-400 leading-relaxed">
                  I'm a graduate student pursuing a Master of Science in Information Systems. While I'm skilled in the
                  technical side of cybersecurity 🕵️‍♀️🔒, I'm equally passionate about operations, management, and
                  strategic planning—bridging the gap between tech and leadership.
                </p>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10" asChild>
                  <a
                    href="https://www.linkedin.com/in/satwikamaddukuri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
              <div className="flex justify-center md:justify-center lg:justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-blue-400 md:h-80 md:w-80">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f9c634be-9542-4c57-94ca-b6f132be4c3f.jpg-3ykh3XHOIJ8rd5prpXYWqVlMVtWBVy.jpeg"
                    alt="Satwika Maddukuri"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content without Animation */}
      <div className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            {/* Beyond Tech Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-blue-400 text-center mb-8">Beyond Tech</h2>
              <div className="border border-blue-400/20 rounded-lg p-6 bg-slate-900/20">
                <p className="text-gray-400 leading-relaxed">
                  When I'm not geeking out over firewalls and planning security strategies, you'll find me getting lost
                  in intricate mandala art, devouring mystery novels 📚, or solving puzzles and cracking cases in
                  detective games (true crime nerd alert 🚨). Funny enough, these interests align perfectly with
                  cybersecurity—both require keen attention to detail, problem-solving skills, and a detective-like
                  mindset to uncover hidden threats and vulnerabilities. Whether it's spotting patterns in a mandala,
                  piecing together clues in a mystery, or analyzing security risks, I'm always up for a challenge! 🔍💻
                </p>
              </div>
            </motion.div>

            {/* Fun Facts Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-blue-400 text-center mb-8">Fun Facts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-blue-400/20 rounded-lg p-6 bg-slate-900/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Utensils className="text-blue-400 h-6 w-6" />
                    <h3 className="text-blue-300 font-semibold">Food Explorer</h3>
                  </div>
                  <p className="text-gray-400">
                    I'm an adventurous foodie who loves exploring different cuisines. From street food to fine dining, I
                    believe every meal tells a story. I've tried various exotic dishes and am always excited to discover
                    new flavors and cooking techniques.
                  </p>
                </div>

                <div className="border border-blue-400/20 rounded-lg p-6 bg-slate-900/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Film className="text-blue-400 h-6 w-6" />
                    <h3 className="text-blue-300 font-semibold">Documentary Enthusiast</h3>
                  </div>
                  <p className="text-gray-400">
                    I have a deep appreciation for documentaries, especially those focused on technological advancements
                    and historical events. They provide valuable insights into real-world scenarios and help me
                    understand the broader impact of technology on society.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-16 text-gray-400"
            >
              Take a look around my portfolio, and let's connect if you'd like to chat about cybersecurity, detective
              stories, or foodie adventures! 🌟
            </motion.div>
          </div>
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

