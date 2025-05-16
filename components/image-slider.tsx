"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dice1, Dice2, Dice3, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Step = {
  src: string
  alt: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function RegistrationStepsSlider() {
  const steps: Step[] = [
    {
      src: "/payment4.png",
      alt: "Paso 1 - Registrarse",
      title: "Paso 1: Registrate Fácil",
      description: "Creá tu cuenta en segundos y preparate para la acción.",
      icon: <Dice1 className="w-6 h-6 text-[#008F39]" />,
    },

    {
      src: "/payment3.png",
      alt: "Paso 2 - Depositar",
      title: "Paso 2: Cargá Saldo",
      description: "Depositá de forma segura y rápida para empezar a jugar.",
      icon: <Dice2 className="w-6 h-6 text-[#008F39]" />
    },
    {
      src: "/payment1.png",
      alt: "Paso 3 - Retirar ganancias",
      title: "Paso 3: Retirá Tus Ganancias",
      description: "Obtené tus premios directamente y sin complicaciones.",
      icon: <Dice3 className="w-6 h-6 text-[#008F39]" />,
    },

  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, steps.length])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, steps.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -top-20 -left-20 w-60 h-60  rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60  rounded-full blur-3xl"></div>

      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#008F39]">Tres Pasos</span> Para Empezar a Ganar
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto">
            Nuestro proceso de registro es rápido y sencillo. En minutos estarás listo para jugar y ganar.
          </p>
        </div>

        <div className="relative max-w-5xl lg:max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-3/5 p-4 lg:p-8">
                <div
                  className="relative aspect-[3/4] md:aspect-[3/3] overflow-hidden rounded-xl border-4 border-[#008F39]/20"
                  style={{ boxShadow: "0 0 30px rgba(0, 143, 57, 0.3)" }}
                >
                  <img
                    src={steps[currentIndex].src || "/placeholder.svg"}
                    alt={steps[currentIndex].alt}
                    className={cn(
                      "w-full h-full object-contain transition-all duration-500",
                      isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100",
                    )}
                  />
                </div>
              </div>

              <div className="w-full lg:w-2/5 p-4 lg:p-8">
                <Card className="bg-gray-900/80 border-none">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="bg-[#008F39]/20 p-2 sm:p-3 lg:p-4 rounded-full">{steps[currentIndex].icon}</div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#008F39]">{steps[currentIndex].title}</h3>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6">{steps[currentIndex].description}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {steps.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                              "w-3 h-3 rounded-full transition-all duration-300",
                              index === currentIndex ? "bg-[#008F39] w-10" : "bg-gray-600 hover:bg-gray-500",
                            )}
                            aria-label={`Ir al paso ${index + 1}`}
                          />
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={prevSlide}
                          className="rounded-full border-gray-700 hover:bg-[#008F39]/20 hover:border-[#008F39]"
                        >
                          <ChevronLeft className="h-5 w-5" />
                          <span className="sr-only">Anterior</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={nextSlide}
                          className="rounded-full border-gray-700 hover:bg-[#008F39]/20 hover:border-[#008F39]"
                        >
                          <ChevronRight className="h-5 w-5" />
                          <span className="sr-only">Siguiente</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 text-center">
                  <Button className="bg-[#008F39] hover:bg-[#006d2c] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 md:py-6 lg:px-10 lg:py-7 text-base sm:text-lg lg:text-xl rounded-full">
                    Comenzar Ahora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
