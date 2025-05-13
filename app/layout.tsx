import type React from "react"
import "./globals.css"
// import { Inter } from "next/font/google" // Eliminamos Inter
import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: [\"latin\"] }) // Eliminamos Inter

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark"> {/* Puedes quitar className=\"dark\" si ThemeProvider lo maneja o si prefieres tema claro por defecto */}
      <head>
        <title>MooneyMaker - Juegos y Entretenimiento</title>
        <meta
          name="description"
          content="Descubrí una nueva forma de divertirte con MooneyMaker. Juegos, premios y emoción."
        />
        {/* Fuentes de Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> {/* Usamos crossOrigin con anonymous para compatibilidad */}
        <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&family=Short+Stack&display=swap" rel="stylesheet" />
      </head>
      {/* Quitamos inter.className del body */}
      <body> 
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
