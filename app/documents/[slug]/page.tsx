"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DocumentViewer() {
  const params = useParams()
  const { slug } = params
  const [loading, setLoading] = useState(true)

  // For the Translative Article Summary Generator project
  const isPdfViewer = slug === "translative-summary"

  useEffect(() => {
    // Set a timeout to simulate PDF loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[80vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-5xl mx-auto">
            {isPdfViewer ? (
              <div className="relative w-full" style={{ height: "80vh" }}>
                <iframe
                  src="https://docs.google.com/viewer?url=https://hebbkx1anhila5yf.public.blob.vercel-storage.com/translative-article-summary-generator.pdf&embedded=true"
                  className="w-full h-full"
                  frameBorder="0"
                >
                  Your browser doesn't support iframes. Please download the document to view it.
                </iframe>
                <div className="absolute top-0 left-0 right-0 bg-gray-100 p-2 text-center text-sm">
                  Viewing: Translative Article Summary Generator using NLP - Project Report
                </div>
                <a
                  href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/translative-article-summary-generator.pdf"
                  download="Translative_Article_Summary_Generator.pdf"
                  className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            ) : (
              <div className="flex justify-center items-center h-[80vh] text-gray-500">
                Document not available in PDF format
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

