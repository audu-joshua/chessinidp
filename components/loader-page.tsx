"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function LoaderPage() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500) // Short delay after reaching 100%
          return 100
        }
        return prev + 2
      })
    }, 50)
    
    return () => clearInterval(interval)
  }, [])
  
  if (!loading) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="relative h-64 w-64">
          <QueenSVGLoader progress={progress} />
        </div>
      </div>
    </div>
  )
}

interface QueenSVGLoaderProps {
  progress: number;
}

const QueenSVGLoader = ({ progress }: QueenSVGLoaderProps) => {
  // Wave animation parameters
  const waveHeight = 10;
  
  // Calculate wave position based on progress (from bottom to top)
  // Start the wave below the view (at 120%) when progress is 0
  // End at 0% when progress is 100%
  const wavePosition = 120 - (progress * 1.2);
  
  return (
    <div className="relative h-full w-full">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="waveMask">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            {/* The wave path - everything below this path will be masked out */}
            <motion.path
              d={`
                M 0,${wavePosition} 
                Q 25,${wavePosition - waveHeight} 
                  50,${wavePosition} 
                Q 75,${wavePosition + waveHeight} 
                  100,${wavePosition} 
                L 100,0 
                L 0,0 
                Z
              `}
              fill="black"
              animate={{
                d: [
                  `
                    M 0,${wavePosition} 
                    Q 25,${wavePosition - waveHeight} 
                      50,${wavePosition} 
                    Q 75,${wavePosition + waveHeight} 
                      100,${wavePosition} 
                    L 100,0 
                    L 0,0 
                    Z
                  `,
                  `
                    M 0,${wavePosition} 
                    Q 25,${wavePosition + waveHeight} 
                      50,${wavePosition} 
                    Q 75,${wavePosition - waveHeight} 
                      100,${wavePosition} 
                    L 100,0 
                    L 0,0 
                    Z
                  `
                ]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </mask>
        </defs>
        
        {/* Black and white queen image as base layer */}
        <image 
          href="/blackwite.png" 
          width="100%" 
          height="100%" 
        />
        
        {/* Colored queen with wave mask - only visible where the mask is white */}
        <image 
          href="/QueenLogo2.svg" 
          width="100%" 
          height="100%" 
          mask="url(#waveMask)" 
        />
      </svg>
    </div>
  )
}