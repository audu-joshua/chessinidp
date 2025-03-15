"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function DonateButton() {
  const [isGlowing, setIsGlowing] = useState(false)

  // Create pulsing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Link
      href="/get-involved/donate"
      className={cn(
        "fixed right-0 top-1/3  z-50 flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-3 rounded-l-lg shadow-lg transform -rotate-12 hover:rotate-0 transition-all duration-300 font-bold",
        isGlowing ? "shadow-[0_0_15px_rgba(236,72,153,0.7)]" : "",
      )}
    >
      <Heart
        className={cn("h-5 w-5 transition-all duration-500", isGlowing ? "text-white scale-110" : "text-white/80")}
        fill={isGlowing ? "white" : "none"}
      />
      <span>Donate</span>
    </Link>
  )
}

