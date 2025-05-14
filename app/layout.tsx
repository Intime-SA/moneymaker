import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

// Configurar Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap', // Buena práctica para el rendimiento de fuentes
  // Puedes especificar pesos si quieres cargarlos explícitamente, ej: weights: ['400', '700']
})

const siteConfig = {
  name: "MooneyMaker",
  title: "MooneyMaker - Juegos y Entretenimiento",
  description: "Descubrí una nueva forma de divertirte con MooneyMaker. Juegos, premios y emoción.",
  url: "https://mooneymaker.co", // Reemplaza con tu URL de producción
  ogImage: "https://mooneymaker.co/frontend/CSOFTV7/img/logo%20mooney.png", // URL del logo
  favicon: "https://mooneymaker.co/frontend/CSOFTV7/img/logo%20mooney.png", // URL del logo para favicon
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  
  // Favicons y icons
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon,
  },

  // Open Graph
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200, // Ancho deseado para la imagen de vista previa (ajusta si es necesario)
        height: 630, // Alto deseado para la imagen de vista previa (ajusta si es necesario)
        alt: siteConfig.name,
      },
    ],
    locale: 'es_AR', // Asumiendo español de Argentina
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    // Puedes añadir @creator si tienes un handle de Twitter
  },
  
  // Otros metadatos útiles
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Alternativa al generator, si no quieres el de v0.dev
  // generator: siteConfig.name, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark"> {/* Puedes quitar className=\"dark\" si ThemeProvider lo maneja o si prefieres tema claro por defecto */}
      <head>
        {/* Las etiquetas <title> y <meta name="description"> se manejan ahora con el objeto metadata */}
        {/* Las fuentes de Google Fonts anteriores se eliminan, Montserrat se carga vía next/font */}
      </head>
      {/* Aplicamos la clase de Montserrat al body */}
      <body className={montserrat.className}> 
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
