import type { Metadata } from "next";
import type React from "react";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  // Configuración base de la URL para resolver rutas de imágenes
  metadataBase: new URL('https://www.centrodedanza.com.do/'), // Sustituye por tu dominio .do real

  // Título dinámico optimizado con palabras clave locales
  title: {
    default: 'Centro de Danza Belkis Sandoval | Clases de Danza en Santo Domingo',
    template: '%s | Centro de Danza Belkis Sandoval',
  },

  // Descripción principal optimizada para SEO local (Google muestra ~155-160 caracteres)
  description:
    'Formación artística integral en Santo Domingo. Clases de ballet clásico, danza contemporánea, jazz y ritmos urbanos para niñas, jóvenes y adultos. ¡Inscríbete hoy!',

  // Palabras clave estratégicas para motores de búsqueda
  keywords: [
    'Academia de danza Santo Domingo',
    'Escuela de baile Santo Domingo',
    'Clases de ballet en Santo Domingo',
    'Belkis Sandoval',
    'Danza contemporánea',
    'Jazz baile República Dominicana',
    'Clases de danza para niñas',
    'Escuela de ballet clásico',
  ],

  // Configuración de autores y marca
  authors: [{ name: 'Centro de Danza Belkis Sandoval' }],
  creator: 'Centro de Danza Belkis Sandoval',
  publisher: 'Centro de Danza Belkis Sandoval',

  // Configuración Open Graph para previsualizaciones en WhatsApp, Instagram, Facebook y LinkedIn
  openGraph: {
    title: 'Academia de Danza Belkis Sandoval | Formación Artística en Santo Domingo',
    description:
      'Descubre la pasión por la danza. Impartimos clases de ballet clásico, jazz, contemporáneo y más para todas las edades en Santo Domingo.',
    url: 'https://www.centrodedanza.com.do/', // Sustituye por tu dominio .do real
    siteName: 'Academia de Danza Belkis Sandoval',
    locale: 'es_DO',
    type: 'website',
    images: [
      {
        url: '/CDBS.png', // Coloca una foto representativa (1200x630px) en tu carpeta /public
        width: 1200,
        height: 630,
        alt: 'Alumnas en clase en la Academia de Danza Belkis Sandoval en Santo Domingo',
      },
    ],
  },

  // Configuración para Twitter / X
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Academia de Danza Belkis Sandoval | Clases de Danza en Santo Domingo',
  //   description:
  //     'Formación en ballet clásico, danza contemporánea y jazz en Santo Domingo. ¡Únete a nuestra familia artística!',
  //   images: ['/og-image.jpg'],
  // },

  // Robots e indexación
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased overflow-x-hidden ${inter.variable} ${quicksand.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sloop+Script&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
