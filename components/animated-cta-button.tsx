"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

interface AnimatedCtaButtonProps {
  href: string
  text: string
  icon?: React.ReactNode
  size?: "default" | "large"
}

export default function AnimatedCtaButton({
  href,
  text,
  icon = <ArrowRight className="ml-2 h-5 w-5" />,
  size = "default",
}: AnimatedCtaButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0.3 }}
        transition={{ duration: 0.3 }}
      />

      {/* Partículas */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-300 rounded-full"
              initial={{
                x: "50%",
                y: "50%",
                opacity: 1,
              }}
              animate={{
                x: `${50 + (Math.random() * 100 - 50)}%`,
                y: `${50 + (Math.random() * 100 - 50)}%`,
                opacity: 0,
              }}
              transition={{
                duration: 0.8 + Math.random() * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          ))}
        </>
      )}

      <Link href={href} target="_blank" rel="noopener noreferrer">
        <motion.button
          className={`relative z-10 w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center ${
            size === "large" ? "py-6 px-8 text-lg" : "py-4 px-6 text-base"
          }`}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles className="mr-2 h-5 w-5" />
          {text}
          {icon}
        </motion.button>
      </Link>
    </motion.div>
  )
}
