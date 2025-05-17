"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  UserPlus,
  LogIn,
  CheckCircle,
  DollarSign,
  Clock,
  Smartphone,
  Eye,
  ArrowRight
} from "lucide-react";

// Componentes personalizados
import AnimatedCtaButton from "@/components/animated-cta-button";
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
  const ctaLink = "https://mooneymaker.co/?ref=57783";

  // Contenido para la nueva landing
  const heroSection = {
    title: "Una nueva experiencia donde vos tenés el control total.",
    subtitle: "Gestioná todo vos mismo. Rápido, simple y seguro.",
    tagline: "Sin intermediarios. Sin esperas.",
    description: [
      {
        id: "desc1",
        text: "Registrate gratis y manejá todo vos mismo, sin cajeros ni demoras.",
        icon: <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-custom-green" />,
        type: "normal",
      },
      {
        id: "desc2",
        text: "Antes: tenías que hablar con el cajero para cargar fichas, sacar ganancias o consultar tu cuenta.",
        icon: <Clock className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-400" />,
        type: "antes",
      },
      {
        id: "desc3",
        text: "Ahora: lo hacés vos mismo desde el celular o la compu, en segundos.",
        icon: <Sparkles className="w-5 h-5 mr-3 flex-shrink-0 text-pink-400" />,
        type: "ahora",
      },
    ],
    ctaText: "Registrate Gratis Ahora",
  };

  const whyUsSection = {
    title: "🧩 ¿Por qué elegirnos?",
    points: [
      { text: "Cargás saldo en tu cuenta al instante", icon: <DollarSign className="w-6 h-6 mr-3 text-custom-green flex-shrink-0" /> },
      { text: "Retirás tus ganancias directo a tu cuenta bancaria en menos de 3 minutos", icon: <Clock className="w-6 h-6 mr-3 text-custom-green flex-shrink-0" /> },
      { text: "Ves todo lo que ganás y cargás en tiempo real", icon: <Eye className="w-6 h-6 mr-3 text-custom-green flex-shrink-0" /> },
      { text: "Sin esperar a nadie, ni hacer filas ni mandar mensajes", icon: <CheckCircle className="w-6 h-6 mr-3 text-custom-green flex-shrink-0" /> },
      { text: "Acceso en cualquier dispositivo", icon: <Smartphone className="w-6 h-6 mr-3 text-custom-green flex-shrink-0" /> },
      { text: "Todo desde un solo lugar. Fácil, claro y rápido.", icon: <Check className="w-6 h-6 mr-3 text-custom-green flex-shrink-0" /> },
    ],
  };

  const howToStartSection = {
    title: "📲 ¿Cómo empiezo?",
  };

  const formSection = {
    ctaText: "Crear Mi Cuenta Ahora",
  };

  const finalCtaSection = {
    title: "✅ Más simple, más rápido, más tuyo.",
    description: "Registrate gratis ahora y viví una experiencia sin vueltas.",
    ctaText: "Empezar Ahora Mismo",
  };

  const renderWhyUsPoints = () => (
    <ul className="space-y-3 sm:space-y-4">
      {whyUsSection.points.map((point, index) => (
        <motion.li
          key={index}
          className="flex items-start bg-slate-800 p-5 rounded-xl border-2 border-custom-green/30 shadow-2xl transition-all duration-300 ease-in-out hover:bg-slate-700 hover:border-custom-green hover:shadow-[0_0_20px_#008f3980] hover:scale-[1.03]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {point.icon}
          <span className="text-sm sm:text-base text-gray-100">{point.text}</span>
        </motion.li>
      ))}
    </ul>
  );

  // Common CTA Button style, can be adjusted
  const CtaButton = ({ text, href }: { text: string; href: string; }) => (
    <motion.a
      href={href}
      className="bg-green-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg shadow-lg text-lg sm:text-xl border-2 border-green-500 hover:bg-green-700 hover:border-green-600 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out transform inline-flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text} <ArrowRight className="w-5 h-5 ml-2" />
    </motion.a>
  );

  if (isMobile) {
    return (
      <div className="relative min-h-screen overflow-x-hidden w-full bg-[#000301] text-white">
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 relative z-10 w-full">
          <motion.div
            className="w-full text-center space-y-10 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <motion.section
              className="space-y-6 py-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <img src={logoUrl} alt="MooneyMaker Logo" className="h-16 mx-auto mb-4" />
              <h1 className="font-heading text-2xl font-bold leading-tight text-custom-green">
                {heroSection.title}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gray-200">{heroSection.subtitle}</p>
              <p className="text-md text-gray-300">{heroSection.tagline}</p>
              <img src="/oso1.png" alt="MooneyMaker Mascot" className="w-[60%] max-w-[180px] mx-auto my-6 filter drop-shadow-[0_0_15px_#008f39]" />
              <div className="space-y-3">
                {heroSection.description.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-slate-800/70 p-3 rounded-lg border border-slate-700/50 shadow-md flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {item.icon}
                    {item.type === "antes" ? (
                      <p className="text-sm text-gray-400 italic">{item.text}</p>
                    ) : item.type === "ahora" ? (
                      <p className="text-sm text-custom-green font-bold">{item.text}</p>
                    ) : (
                      <p className="text-sm text-gray-300">{item.text}</p>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="pt-4">
                <CtaButton text={heroSection.ctaText} href={ctaLink} />
              </div>
            </motion.section>

            {/* Why Us Section */}
            <motion.section
              className="py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h2 className="text-xl font-bold mb-6 text-center">{whyUsSection.title}</h2>
              {renderWhyUsPoints()}
            </motion.section>

            {/* How To Start Section */}
            <motion.section
              className="py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <h2 className="text-xl font-bold mb-6 text-center">{howToStartSection.title}</h2>
              <div className="w-full -ml-4">
                 <RegistrationStepsSlider />
              </div>
            </motion.section>

            {/* Form Section Placeholder */}
            <motion.section
              className="py-8 space-y-6 bg-gray-900/70 p-6 rounded-xl border border-custom-green/50 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <h2 className="text-xl font-bold text-center text-custom-green">¡Estás a un paso!</h2>
              <p className="text-center text-gray-300 mb-4">Completá tus datos para empezar a controlar tu diversión.</p>
              <div className="flex justify-center my-4">
                <img 
                  src="/payment4.png" 
                  alt="Formulario de Registro" 
                  className="rounded-lg shadow-md max-w-xs w-full h-auto object-contain border border-gray-700"
                />
              </div>
              <div className="pt-4 text-center">
                <CtaButton text={formSection.ctaText} href={ctaLink} />
              </div>
            </motion.section>

            {/* Final CTA Section */}
            <motion.section
              className="py-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <img 
                src="/oso-cool.png" 
                alt="MooneyMaker Mascot Cool"
                className="w-28 h-28 mx-auto mb-4 object-contain filter drop-shadow-[0_0_10px_#008f39]"
              />
              <h2 className="text-2xl font-bold mb-3">{finalCtaSection.title}</h2>
              <p className="text-gray-300 mb-6 max-w-xs mx-auto">{finalCtaSection.description}</p>
              <CtaButton text={finalCtaSection.ctaText} href={ctaLink} />
            </motion.section>
          </motion.div>
        </main>

        <motion.footer
          className="py-6 text-center text-gray-500 text-xs border-t border-gray-800 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="max-w-md mx-auto px-4">
            <img src={logoUrl} alt="MooneyMaker Logo" className="h-8 mx-auto mb-3 opacity-70" />
            <p>© {new Date().getFullYear()} MooneyMaker. Todos los derechos reservados.</p>
            <p className="mt-1 text-xs text-gray-600">Juega con responsabilidad. Solo para mayores de 18 años.</p>
          </div>
        </motion.footer>
      </div>
    );
  }

  // Desktop Version
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#000301] text-white">
      <main className="flex-1 flex flex-col items-center px-4 py-12 sm:px-6 relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="w-full text-center space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <motion.section
            className="py-12 grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="md:text-left space-y-5">
              <img src={logoUrl} alt="MooneyMaker Logo" className="h-20 mb-5 hidden md:block" />
              <img src={logoUrl} alt="MooneyMaker Logo" className="h-16 mx-auto mb-4 md:hidden" />

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-custom-green">
                {heroSection.title}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gray-200">{heroSection.subtitle}</p>
              <p className="text-lg text-gray-300">{heroSection.tagline}</p>
              <div className="space-y-4 mt-4">
                {heroSection.description.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-slate-800/70 p-4 rounded-lg border border-slate-700/50 shadow-lg flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {item.icon}
                    {item.type === "antes" ? (
                      <p className="text-base text-gray-400 italic">{item.text}</p>
                    ) : item.type === "ahora" ? (
                      <p className="text-base text-custom-green font-bold lg:text-lg">{item.text}</p>
                    ) : (
                      <p className="text-base text-gray-300">{item.text}</p>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="pt-5">
                <CtaButton text={heroSection.ctaText} href={ctaLink} />
              </div>
            </div>
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity:0, scale:0.8 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ delay: 0.3, duration:0.7 }}
            >
              <img src="/oso1.png" alt="MooneyMaker Mascot" className="w-full max-w-sm md:max-w-md object-contain filter drop-shadow-[0_0_25px_#008f39]" />
            </motion.div>
          </motion.section>

          {/* Why Us Section */}
          <motion.section
            className="py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">{whyUsSection.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              {whyUsSection.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-slate-800 p-6 rounded-xl border-2 border-custom-green/40 shadow-2xl transition-all duration-300 ease-in-out hover:bg-custom-green/10 hover:border-custom-green hover:shadow-[0_0_30px_#008f39a0]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08 }}
                >
                  {point.icon}
                  <span className="text-gray-100">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* How To Start Section */}
          <motion.section
            className="py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{howToStartSection.title}</h2>
            <RegistrationStepsSlider />
          </motion.section>

          {/* Form Section Placeholder */}
          <motion.section
            className="py-16 my-10 bg-gray-900/30 rounded-xl border border-custom-green/30 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img src="/oso4.png" alt="Background Form" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"/>
            <div className="relative z-10 max-w-2xl mx-auto px-6 space-y-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-custom-green">¡Estás a un paso!</h2>
              <p className="text-lg sm:text-xl text-gray-200 mb-6">Completá tus datos para empezar a controlar tu diversión y acceder a todo.</p>
              <div className="flex justify-center my-6">
                <img 
                  src="/payment4.png" 
                  alt="Formulario de Registro" 
                  className="rounded-lg shadow-lg max-w-md w-full h-auto object-contain border-2 border-gray-600"
                />
              </div>
              <div className="pt-6">
                <CtaButton text={formSection.ctaText} href={ctaLink} />
              </div>
            </div>
          </motion.section>

          {/* Final CTA Section */}
          <motion.section
            className="py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <img 
              src="/oso-cool.png" 
              alt="MooneyMaker Mascot Cool"
              className="w-36 h-36 mx-auto mb-6 object-contain filter drop-shadow-[0_0_15px_#008f39]"
            />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{finalCtaSection.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto">{finalCtaSection.description}</p>
            <CtaButton text={finalCtaSection.ctaText} href={ctaLink} />
          </motion.section>
        </motion.div>
      </main>

      <motion.footer
        className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <img src={logoUrl} alt="MooneyMaker Logo" className="h-10 mx-auto mb-4 opacity-70" />
          <p>© {new Date().getFullYear()} MooneyMaker. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-gray-600">Juega con responsabilidad. Solo para mayores de 18 años.</p>
        </div>
      </motion.footer>
    </div>
  );
}
