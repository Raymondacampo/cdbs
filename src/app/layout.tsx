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
  metadataBase: new URL('https://www.centrodedanza.com.do/'),

  // Título dinámico optimizado con palabras clave locales
  title: {
    default: 'Centro de Danza Belkis Sandoval | Clases de Danza en Santo Domingo',
    template: '%s | Centro de Danza Belkis Sandoval',
  },

  // Descripción principal optimizada para SEO local
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
    title: 'Centro de Danza Belkis Sandoval | Formación Artística en Santo Domingo',
    description:
      'Descubre la pasión por la danza. Impartimos clases de ballet clásico, jazz, contemporáneo y más para todas las edades en Santo Domingo.',
    url: 'https://www.centrodedanza.com.do/',
    siteName: 'Centro de Danza Belkis Sandoval',
    locale: 'es_DO',
    type: 'website',
    images: [
      {
        url: '/CDBS.png',
        width: 1200,
        height: 630,
        alt: 'Alumnas en clase en el Centro de Danza Belkis Sandoval en Santo Domingo',
      },
    ],
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Estructura de Datos JSON-LD para Google Search y Google Maps
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DanceSchool',
    'name': 'Centro de Danza Belkis Sandoval',
    'image': 'https://www.centrodedanza.com.do/CDBS.png',
    '@id': 'https://www.centrodedanza.com.do',
    'url': 'https://www.centrodedanza.com.do',
    'telephone': '+18095471394', 
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Av. Dr. Fernando Alberto Defilló 375, Santo Domingo', 
      'addressLocality': 'Santo Domingo',
      'addressRegion': 'Distrito Nacional',
      'addressCountry': 'DO',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 18.4585931, 
      'longitude': -70.0010652, 
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '14:00',
        'closes': '20:00',
      },
    ],
    'sameAs': [
      // Añade los enlaces a tus redes sociales oficiales si los tienes:
      'https://www.instagram.com/belkissandovalcentrodedanza/',
      'https://www.facebook.com/centrodedanzabelkisandoval',
    ],
  };

  return (
    <html
      lang="es"
      className={`h-full antialiased overflow-x-hidden ${inter.variable} ${quicksand.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sloop+Script&display=swap"
        />
        {/* Inyección del esquema JSON-LD para SEO Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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