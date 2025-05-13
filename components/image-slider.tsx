"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { Dice1, Dice2, Dice3 } from "lucide-react"

// Definición de tipos para los pasos
interface Step {
  src: string
  alt: string
  title: string
  description: string
  icon?: React.ReactNode
}

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  // Pasos con iconos personalizados
  const steps: Step[] = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/registr%2FPASO%201%20-%20Registrarse.png?alt=media&token=242d7ee0-284c-451a-97ef-91a1ae854884",
      alt: "Paso 1 - Registrarse",
      title: "Paso 1: Registrate Fácil",
      description: "Creá tu cuenta en segundos y preparate para la acción.",
      icon: <Dice1 className="w-6 h-6 text-amber-400" />,
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/registr%2FPASO%202%20-%20Depositar.png?alt=media&token=da133758-1c5c-4ebd-ba48-0a337cd31f4e",
      alt: "Paso 2 - Depositar",
      title: "Paso 2: Cargá Saldo",
      description: "Depositá de forma segura y rápida para empezar a jugar.",
      icon: <Dice2 className="w-6 h-6 text-amber-400" />,
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/mayoristakaurymdp.appspot.com/o/registr%2FPASO%203%20-%20Retirar%20ganancias.png?alt=media&token=492bca54-4239-4f33-a562-e8122825c077",
      alt: "Paso 3 - Retirar ganancias",
      title: "Paso 3: Retirá Tus Ganancias",
      description: "Obtené tus premios directamente y sin complicaciones.",
      icon: <Dice3 className="w-6 h-6 text-amber-400" />,
    },
  ]

  // Cambiar automáticamente las diapositivas cada 5 segundos
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [api])

  // Sincronizar activeIndex con el carrusel
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    // Limpieza inicial por si acaso y al desmontar
    onSelect() 
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-md mx-auto relative"
    >
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl z-0"></div>

      <Carousel
        setApi={setApi}
        className="rounded-xl overflow-hidden shadow-[0_0_25px_rgba(245,158,11,0.3)] border border-amber-500/30 bg-gradient-to-b from-gray-900/90 to-black/90"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent z-10 opacity-70"></div>

        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={index}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-1"
                >
                  <div className="flex justify-center mb-2 pt-4">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="w-12 h-12 rounded-full bg-gray-800/80 flex items-center justify-center"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  <div className="relative aspect-[4/3] w-full h-auto">
                    <Image
                      src={step.src || "/placeholder.svg"}
                      alt={step.alt}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />

                    {/* Efecto de brillo en los bordes */}
                    <div className="absolute inset-0 rounded-md border border-amber-500/20 shadow-[inset_0_0_10px_rgba(245,158,11,0.2)]"></div>
                  </div>

                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="p-4 text-center"
                  >
                    <h4 className="text-xl font-semibold text-amber-400 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-300">{step.description}</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
          {steps.map((_, idx) => (
            <motion.div
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === activeIndex ? "bg-amber-500" : "bg-gray-600"}`}
              animate={{ scale: idx === activeIndex ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-slate-800/70 hover:bg-slate-700/90 border-amber-500/50 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-slate-800/70 hover:bg-slate-700/90 border-amber-500/50 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
      </Carousel>
    </motion.div>
  )
}
