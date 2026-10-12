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

const siteUrl = "https://www.centrodedanza.com.do";
const siteName = "Centro de Danza Belkis Sandoval";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Clases de Baile, Ballet y Jazz en Santo Domingo | Centro de Danza Belkis Sandoval",
    template: "%s | Centro de Danza Belkis Sandoval",
  },

  description:
    "¿Buscas clases de baile en Santo Domingo? Conoce el Centro de Danza Belkis Sandoval y nuestras clases de ballet clásico, jazz, danza contemporánea y ritmos urbanos. Consulta información e inscripción.",

  // Las meta keywords no son un factor de posicionamiento de Google.
  // Se conservan como metadato descriptivo, sin depender de ellas para el SEO.
  keywords: [
    "clases de baile en Santo Domingo",
    "escuela de baile en Santo Domingo",
    "escuela de danza en Santo Domingo",
    "academia de danza en Santo Domingo",
    "clases de ballet en Santo Domingo",
    "ballet clásico",
    "clases de jazz",
    "clases de hip hop",
    "clases de danza para niñas",
    "clases de baile para jóvenes y adultos",
    "Centro de Danza Belkis Sandoval",
  ],

  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  openGraph: {
    title:
      "Clases de Baile, Ballet y Jazz en Santo Domingo | Centro de Danza Belkis Sandoval",
    description:
      "Descubre clases de ballet clásico, jazz, danza contemporánea y ritmos urbanos en Santo Domingo. Conoce el Centro de Danza Belkis Sandoval y consulta cómo comenzar.",
    url: siteUrl,
    siteName,
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "/CDBS.png",
        width: 1200,
        height: 630,
        alt: "Centro de Danza Belkis Sandoval: clases de danza en Santo Domingo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Clases de Baile, Ballet y Jazz en Santo Domingo | Centro de Danza Belkis Sandoval",
    description:
      "Clases de ballet clásico, jazz, danza contemporánea y ritmos urbanos en Santo Domingo.",
    images: ["/CDBS.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    "@id": `${siteUrl}/#dance-school`,
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/CDBS.png`,
    logo: `${siteUrl}/CDBS.png`,
    description:
      "Escuela de danza en Santo Domingo con formación en ballet clásico, jazz, danza contemporánea y ritmos urbanos.",
    telephone: "+18095471394",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Dr. Fernando Alberto Defilló 375",
      addressLocality: "Santo Domingo",
      addressRegion: "Distrito Nacional",
      addressCountry: "DO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.4585931,
      longitude: -70.0010652,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "14:00",
        closes: "20:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Santo Domingo",
    },
    sameAs: [
      "https://www.instagram.com/belkissandovalcentrodedanza/",
      "https://www.facebook.com/centrodedanzabelkisandoval",
    ],
  };

  return (
    <html
      lang="es-DO"
      className={`h-full antialiased overflow-x-hidden ${inter.variable} ${quicksand.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sloop+Script&display=swap"
        />
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
