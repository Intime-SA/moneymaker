"use client"

import { motion } from "framer-motion"
import { Dices, Joystick, Trophy, Coins, Zap, Flame, Target } from "lucide-react"

export default function GameIconsSection() {
  const icons = [
    { icon: <Dices className="w-8 h-8" />, label: "Dados" },
    { icon: <Joystick className="w-8 h-8" />, label: "Juegos" },
    { icon: <Trophy className="w-8 h-8" />, label: "Premios" },
    { icon: <Coins className="w-8 h-8" />, label: "Monedas" },
    { icon: <Target className="w-8 h-8" />, label: "Objetivos" },
    { icon: <Flame className="w-8 h-8" />, label: "Popular" },
    { icon: <Zap className="w-8 h-8" />, label: "Rápido" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div className="w-full max-w-3xl mx-auto py-8" variants={container} initial="hidden" animate="show">
      <motion.h3
        className="text-xl font-bold text-center mb-6 text-amber-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Juegos y Entretenimiento
      </motion.h3>

      <motion.div className="flex flex-wrap justify-center gap-4">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center p-3 bg-gray-900/60 rounded-lg border border-amber-500/20 w-24 h-24 justify-center hover:bg-gray-800/60 transition-colors duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)",
            }}
          >
            <div className="text-amber-400 mb-2">{item.icon}</div>
            <span className="text-xs text-gray-300">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
