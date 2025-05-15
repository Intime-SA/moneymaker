"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Info,
  Gamepad2,
  Coins,
  Trophy,
  Zap,
} from "lucide-react";

// Componentes personalizados
import ImageSlider from "@/components/image-slider";
import AnimatedCtaButton from "@/components/animated-cta-button";
import GameIconsSection from "@/components/game-icons-section";
import { useMobileDetector } from "@/hooks/use-mobile";
import RegistrationStepsSlider from "@/components/image-slider";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMobileDetector();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoUrl =
    "https://mooneymaker.co/frontend/CSOFTV7/img/logo%20mooney.png";

  // Versión móvil optimizada
  if (isMobile) {
    return (
      <div className="relative min-h-screen overflow-x-hidden w-full">
        {/* Fondo con gráficos animados */}
        {/* <BackgroundGraphics /> */}

        {/* Contenedor principal con gradiente */}
        <div className="flex min-h-screen flex-col bg-[#000301] text-white relative">
          <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 relative z-10 w-full">
            <motion.div className="w-full text-center space-y-8 max-w-md mx-auto">
              {/* Contenedor para Logo, GIF y Título Principal */}
              <motion.div
                className="flex flex-col items-center space-y-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                {/* Logo Imagen - New Bear Mascot */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{
                    scale: 1.5,
                    marginBottom: "100px",
                  }}
                  className="relative w-full flex flex-col items-center justify-center h-[60vh]"
                >
                  <img
                    src="/oso-cool.png"
                    alt="MooneyMaker Mascot"
                    className="w-[70%] max-w-[200px] object-contain filter drop-shadow-[0_0_15px_#008f39]"
                  />
                  <div className="mt-4">
                    <AnimatedCtaButton
                      href="https://mooneymaker.co/?ref=57781"
                      text="¡JUGAR AHORA!"
                      size="large"
                    />
                  </div>
                </motion.div>

                {/* GIF Animado */}

                {/* Título Principal */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <h2 className="font-heading text-xl font-bold leading-tight">
                    Descubrí una{" "}
                    <span className="text-[#008f39]">nueva forma</span> de
                    divertirte
                  </h2>
                  <p className="text-sm text-gray-300 mx-auto">
                    Un espacio exclusivo para los que buscan adrenalina,
                    estrategia y emoción.
                  </p>
                </motion.div>
              </motion.div>

              {/* Características */}
              <motion.div
                className="flex flex-col space-y-3 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <motion.div
                  className="bg-gray-900/60 p-3 rounded-lg border border-neutral-700/50 transition-all duration-300 hover:border-custom-green hover:shadow-[0_0_15px_rgba(0,143,57,0.6)]"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-semibold text-base mb-1 flex items-center justify-center">
                    <Gamepad2 className="w-4 h-4 mr-2 text-custom-green" />
                    Retos únicos
                  </h3>
                  <p className="text-sm text-gray-300 text-center">
                    Juegos donde la habilidad hace la diferencia
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/60 p-3 rounded-lg border border-neutral-700/50 transition-all duration-300 hover:border-custom-green hover:shadow-[0_0_15px_rgba(0,143,57,0.6)]"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-semibold text-base mb-1 flex items-center justify-center">
                    <Zap className="w-4 h-4 mr-2 text-custom-green" />
                    Autogestión
                  </h3>
                  <p className="text-sm text-gray-300 text-center">
                    Acceso desde cualquier dispositivo
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/60 p-3 rounded-lg border border-neutral-700/50 transition-all duration-300 hover:border-custom-green hover:shadow-[0_0_15px_rgba(0,143,57,0.6)]"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-semibold text-base mb-1 flex items-center justify-center">
                    <Coins className="w-4 h-4 mr-2 text-custom-green" />
                    Depósitos Fáciles
                  </h3>
                  <p className="text-sm text-gray-300 text-center">
                    Múltiples métodos de pago seguros
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-900/60 p-3 rounded-lg border border-neutral-700/50 transition-all duration-300 hover:border-custom-green hover:shadow-[0_0_15px_rgba(0,143,57,0.6)]"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-semibold text-base mb-1 flex items-center justify-center">
                    <Trophy className="w-4 h-4 mr-2 text-custom-green" />
                    Premios Instantáneos
                  </h3>
                  <p className="text-sm text-gray-300 text-center">
                    Retirá tus ganancias sin complicaciones
                  </p>
                </motion.div>
              </motion.div>

              {/* CTA Principal */}
              <motion.div
                className="relative p-0 rounded-xl w-full overflow-hidden"
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {/* Background Image */}
                <img
                  src="/oso6.jpg"
                  alt="Fondo Oso Temático"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

                {/* Content Wrapper */}
                <div className="relative z-20 p-4">
                  <div className="flex items-center justify-center mb-">
                    <motion.div className="w-120 h-2 rounded-full bg-[transparent] flex items-center justify-center -mt-2 h-[150px]">
                    <p className="text-white font-extrabold text-base">
                      ¡Solo por hoy: acceso limitado!
                    </p>
                    </motion.div>

                  </div>
                  <p className="mb-4 text-base text-center text-white">
                    Registrate y desbloquea el acceso completo a la plataforma.
                  </p>
                  <div className="flex justify-center bg-green">
                    <motion.a
                      href="https://mooneymaker.co/?ref=57781"
                      className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 ease-in-out transform hover:scale-105 text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ¡REGISTRARME AHORA!
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Sección de iconos de juegos */}
              <div className="w-full">
                <GameIconsSection />
              </div>

              {!isMobile && (
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <h3 className="text-lg font-semibold mb-4 text-[#008f39] ml-4">
                    📢 ¿Querés saber más antes de registrarte?
                  </h3>
                  <div className="flex flex-col space-y-3">
                    <motion.ul
                      className="space-y-3"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.li
                        className="flex items-start bg-gray-900/40 p-2 rounded-lg"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        <Check className="h-4 h-4 text-[#008f39] mr-2 mt-0.5" />
                        <span className="text-sm">
                          No es necesario descargar nada
                        </span>
                      </motion.li>
                      <motion.li
                        className="flex items-start bg-gray-900/40 p-2 rounded-lg"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        <Check className="h-4 h-4 text-[#008f39] mr-2 mt-0.5" />
                        <span className="text-sm">
                          Accedé desde cualquier lugar
                        </span>
                      </motion.li>
                      <motion.li
                        className="flex items-start bg-gray-900/40 p-2 rounded-lg"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        <Check className="h-4 h-4 text-[#008f39] mr-2 mt-0.5" />
                        <span className="text-sm">Completamente gratis</span>
                      </motion.li>
                      <motion.li
                        className="flex items-start bg-gray-900/40 p-2 rounded-lg"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        <Check className="h-4 h-4 text-[#008f39] mr-2 mt-0.5" />
                        <span className="text-sm">
                          Carga y retira, todo desde la misma plataforma
                        </span>
                      </motion.li>
                    </motion.ul>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Nueva Sección: Pasos para Jugar */}
            <section className="w-full max-w-md mx-auto py-8 px-4">
              <div className="flex flex-col items-center">
                {/* Información y CTA */}
                <motion.div
                  className="space-y-4 text-center w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={logoUrl || "/placeholder.svg"}
                      alt="MooneyMaker Logo"
                      className="h-12 object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#008f39] to-[#008f39]">
                    Empezá a Ganar en Minutos
                  </h2>
                  <p className="text-base text-gray-300">
                    Seguí estos sencillos pasos y descubrí un universo de
                    entretenimiento y premios.
                  </p>
                  <motion.ul
                    className="space-y-3 text-gray-300"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.li
                      className="flex items-center bg-gray-900/40 p-2 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <Info className="h-4 h-4 text-[#008f39] mr-2" />
                      <span className="font-medium text-sm">
                        Registro ultra-rápido y seguro.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex items-center bg-gray-900/40 p-2 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <Info className="h-4 h-4 text-[#008f39] mr-2" />
                      <span className="font-medium text-sm">
                        Múltiples métodos de depósito confiables.
                      </span>
                    </motion.li>
                    <motion.li
                      className="flex items-center bg-gray-900/40 p-2 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <Info className="h-4 h-4 text-[#008f39] mr-2" />
                      <span className="font-medium text-sm">
                        Retiros directos a tu cuenta, sin demoras.
                      </span>
                    </motion.li>
                  </motion.ul>
                  <div className="pt-3 flex justify-center">
                    <AnimatedCtaButton
                      href="https://mooneymaker.co/?ref=57781"
                      text="Unirme Ahora"
                    />
                  </div>
                </motion.div>

                {/* Slider de Imágenes */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="floating mt-6 w-full ml-4"
                >
                  <ImageSlider />
                </motion.div>
              </div>
            </section>
          </main>

          {/* Footer con animación */}
          <motion.footer
            className="py-4 text-center text-gray-500 text-xs border-t border-gray-800 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="max-w-md mx-auto px-4">
              <div className="flex justify-center mb-3">
                <img
                  src={logoUrl || "/placeholder.svg"}
                  alt="MooneyMaker Logo"
                  className="h-8 object-contain opacity-70"
                />
              </div>
              <p>
                © {new Date().getFullYear()} MooneyMaker. Todos los derechos
                reservados.
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Juega con responsabilidad. Solo para mayores de 18 años.
              </p>
            </div>
          </motion.footer>
        </div>
      </div>
    );
  }

  // Versión desktop original
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo con gráficos animados */}
      {/* <BackgroundGraphics /> */}

      {/* Contenedor principal con gradiente */}
      <div className="flex min-h-screen flex-col bg-[#000301] text-white relative">
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:px-6 relative z-10 max-w-6xl mx-auto">
          <motion.div className="w-full text-center space-y-12">
            {/* Contenedor para Logo, GIF y Título Principal */}
            <motion.div
              className="flex flex-col items-center space-y-8 md:space-y-10" // Aumentamos el espacio general aquí
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              {/* Fila para Logo y Mascota */}
              <motion.div
                className="flex flex-row items-center justify-center space-x-8 md:space-x-12 lg:space-x-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* Logo */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logoUrl || "/placeholder.svg"}
                    alt="MooneyMaker Logo"
                    className="h-20 md:h-24 lg:h-28 object-contain"
                  />
                </motion.div>

                {/* Mascota */}
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
                  className="w-40 sm:w-48 md:w-56 lg:w-64 flex items-center justify-center"
                >
                  <img
                    src="/oso-cool.png"
                    alt="MooneyMaker Mascot"
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_15px_#008f39]"
                  />
                </motion.div>
              </motion.div>

              {/* Título Principal (debajo de la fila Logo+GIF) */}
              <motion.div
                className="space-y-3 pt-6 md:pt-8" // Añadimos padding superior para separar del grupo Logo+GIF
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Descubrí una{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008f39] to-[#008f39]">
                    nueva forma
                  </span>{" "}
                  de divertirte
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                  Un espacio exclusivo para los que buscan adrenalina,
                  estrategia y emoción.
                </p>
              </motion.div>
            </motion.div>
            {/* Fin del contenedor para Logo, GIF y Título Principal */}

            {/* Características */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.div
                className="bg-gray-900/60 p-5 rounded-lg border border-neutral-700/50 transition-all duration-300 hover:border-custom-green hover:shadow-[0_0_20px_rgba(0,143,57,0.6)]"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <Gamepad2 className="w-5 h-5 mr-2 text-custom-green" />
                  Retos únicos
                </h3>
                <p className="text-gray-300">
                  Juegos donde la habilidad hace la diferencia
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-900/60 p-5 rounded-lg border border-neutral-700/50 transition-all duration-300 hover:border-custom-green hover:shadow-[0_0_20px_rgba(0,143,57,0.6)]"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-custom-green" />
                  Autogestión
                </h3>
                <p className="text-gray-300">
                  Acceso desde cualquier dispositivo
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-900/60 p-5 rounded-lg border border-neutral-700/50 transition-all duration-300 hover:border-custom-green hover:shadow-[0_0_20px_rgba(0,143,57,0.6)]"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <Coins className="w-5 h-5 mr-2 text-custom-green" />
                  Depósitos Fáciles
                </h3>
                <p className="text-gray-300">
                  Múltiples métodos de pago seguros
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-900/60 p-5 rounded-lg border border-neutral-700/50 transition-all duration-300 hover:border-custom-green hover:shadow-[0_0_20px_rgba(0,143,57,0.6)]"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-custom-green" />
                  Premios Instantáneos
                </h3>
                <p className="text-gray-300">
                  Retirá tus ganancias sin complicaciones
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Principal */}
            <motion.div
              className="relative p-0 rounded-xl border border-[#008f39] max-w-2xl mx-auto shadow-[0_0_30px_rgba(0,143,57,0.15)] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {/* Background Image */}
              <img
                src="/oso3.jpg"
                alt="Fondo Oso Temático"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

              {/* Content Wrapper */}
              <div className="relative z-20 p-8">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#008f39] flex items-center justify-center mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="text-white font-medium text-lg">
                    ¡Solo por hoy: acceso limitado!
                  </p>
                </div>
                <p className="mb-6 text-lg sm:text-xl text-center text-white">
                  Registrate y desbloquea el acceso completo a la plataforma.
                </p>
                <div className="flex justify-center">
                  <AnimatedCtaButton
                    href="https://mooneymaker.co/?ref=57781"
                    text="¡REGISTRARME AHORA!"
                    size="large"
                    variant="default"
                  />
                </div>
              </div>
            </motion.div>

            {/* Sección de iconos de juegos */}
            <GameIconsSection />

            {/* Información adicional */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#008f39]">
                📢 ¿Querés saber más antes de registrarte?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start text-left">
                <motion.ul
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                >
                  <motion.li
                    className="flex items-start bg-gray-900/40 p-3 rounded-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Check className="h-5 w-5 text-[#008f39] mr-2 mt-0.5" />
                    <span>No es necesario descargar nada</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start bg-gray-900/40 p-3 rounded-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Check className="h-5 w-5 text-[#008f39] mr-2 mt-0.5" />
                    <span>Accedé desde cualquier lugar</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start bg-gray-900/40 p-3 rounded-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Check className="h-5 w-5 text-[#008f39] mr-2 mt-0.5" />
                    <span>Completamente gratis</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start bg-gray-900/40 p-3 rounded-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Check className="h-5 w-5 text-[#008f39] mr-2 mt-0.5" />
                    <span>Carga y retira, todo desde la misma plataforma</span>
                  </motion.li>
                </motion.ul>

                <motion.div
                  className="w-full rounded-lg overflow-hidden shadow-xl"
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src="/oso2.jpg"
                    alt="La emoción empieza en un clic. Oso de MooneyMaker con gafas de sol."
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Nueva Sección: Pasos para Jugar */}
          <section className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-6">
            <RegistrationStepsSlider />
          </section>
        </main>

        {/* Footer con animación */}
        <motion.footer
          className="py-6 text-center text-gray-500 text-sm border-t border-gray-800 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-center mb-4">
              <img
                src={logoUrl || "/placeholder.svg"}
                alt="MooneyMaker Logo"
                className="h-10 object-contain opacity-70"
              />
            </div>
            <p>
              © {new Date().getFullYear()} MooneyMaker. Todos los derechos
              reservados.
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Juega con responsabilidad. Solo para mayores de 18 años.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
