import { H1, H2, P } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import InclineDiv from "@/components/ui/incline_div";
import Image from "next/image";
import MobileClass from "@/components/mobile-class";
import Link from "next/link";

import pequenas from "../../public/images/dashboard/pequenas.png";
import bhome from "../../public/images/dashboard/bhome.png";
import hjhome from "../../public/images/dashboard/hjhome.png";
import hjhomemobile from "../../public/images/dashboard/hjhomemobile.png";
import phome from "../../public/images/dashboard/phome.png";
import Gaynor from "../../public/images/dashboard/Gaynor.png";
import belkis from "../../public/images/dashboard/belkis.png";
import recitallogo from "../../public/images/dashboard/recitallogo.png";

const classes = [
    {
    name: "BALLET",
    image: bhome,
    size: 'w-80',
    link: "/ballet"
    },
    {
    name: "HIP-HOP & JAZZ",
    image: hjhome,
    size: 'w-60',
    link: "/hiphop-jazz"
  },
  {
    name: "PILATES Y MÁS",
    image: phome,
    size: 'w-80',
    link: "/others"
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="flex w-full items-end overflow-hidden bg-blush h-[80dvh] max-h-[600px] px-4 relative text-center shadow-xl 
      sm:min-h-[50dvh]
      md:mb-8 md:h-[90dvh]">
      <InclineDiv variant="right" color="pink" size="lg" className="md:mt-4 text-start top-16 z-10">LAS MAS<br className="hidden lg:block"></br> PEQUEÑAS</InclineDiv>
        <div className="flex relative w-full justify-between items-end mx-auto max-w-7xl">
          {/* TODO: replace with actual hero image */}
          <div className="max-w-[60%] h-full mb-12 text-left 
          md:max-w-3xl
          xl:left-80">
            <H1 className="">BALLET PARA NIÑAS</H1>
            <P className="md:text-lg text-dark/80 mb-4 text-left mx-auto">
              Explora nuestra variedad de clases de ballet para las mas pequeñas
            </P>
            <div className="flex flex-wrap gap-4 justify-start">
              <Link href="/ballet" >
                <Button className="hover:cursor-pointer" size="lg">Ver clases</Button>
              </Link>
            </div>
          </div>
          <Image src={pequenas} alt="Dance hero" className="absolute -right-[35%] bottom-0 z-10 w-[75%]
          sm:w-[60%] sm:max-w-[350px] sm:-right-[10%]
          md:max-w-[380px] md:w-[50%] md:relative md:right-0
          lg:w-[40%] lg:min-w-[450px] lg:max-w-none" />
        </div>
      </section>

      {/* Classes overview */}
      <section className="w-full bg-pink md:bg-white md:py-16 max-w-7xl mx-auto mb-24">
        <H2 className="h2 hidden md:block text-center font-bold mb-16">NUESTRAS CLASES</H2>
        <H2 className="block md:hidden bg-dark py-4 text-white! text-center font-bold mb-12">NUESTRAS CLASES</H2>
        {/* Mobile view */}
        <div className="md:hidden flex flex-col">
          <MobileClass variant="left" order="second" src={bhome} width="w-[55dvw]" link="/ballet">BALLET</MobileClass>
          <MobileClass variant="right" order="first" src={phome} width="w-[55dvw]" link="/others">PILATES Y MÁS</MobileClass>
          <MobileClass variant="left" order="second" src={hjhomemobile} width="w-[40dvw]" className="relative left-4 top-4" link="/hiphop-jazz">HIP-HOP & JAZZ</MobileClass>
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-1 gap-y-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {classes.map(({ name, image, size, link }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-end rounded-xl transition-shadow"
            >
              <Image src={image} alt={name} className={`mb-6 ${size}`} />
              <h3 className="h3 font-black text-center">{name}</h3>
              <Link href={link}>
                <Button size="md" className="mt-4 hover:cursor-pointer">
                  Ver clases
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Store overview */}
      <section className="pb-12 md:py-24 px-4 max-w-7xl mx-auto relative">
        <div className="flex items-start justify-center">

          { /* DESKTOP */ }
          <div className=" hidden rounded-xl p-6 transition-shadow md:flex flex-col max-w-md justify-end relative top-10
          md:items-center">
            <Image src={recitallogo} alt={'Recital Logo'} className="w-800 md:w-110"/>
            <div className="flex flex-col items-end relative right-15">
              <p className="text-end block">Visita la tienda con la mas amplia variedad de productos para la danza en santo domingo</p>
              <Link href="/recital">
              <Button size="md" className="md:mt-4 ml-auto hover:cursor-pointer">
                Ver Tienda
              </Button>              
              </Link>
            </div>
          </div>

          { /* MOBILE */ }
          <div className="rounded-xl py-6 transition-shadow flex flex-col justify-end top-10 mr-auto
          md:hidden">
            <Image src={recitallogo} alt={'Recital Logo'} className="w-50"/>
            <Link href="/recital" className="flex justify-end">
              <Button size="md" className="w-[70%] mx-auto">
                Ver Tienda
              </Button>
            </Link>
          </div>
          <Image src={Gaynor} alt={'Gaynor'} className="absolute -z-10 right-0 md:relative w-50 md:w-80 mb-4 rotate-32"/>
        </div>
      </section>

      {/* About overview */}
      <section className="pt-16 mt-24 bg-pink flex relative">
        <div className="flex items-start max-w-7xl mx-auto px-4">
          <Image src={belkis} alt="Belkis Sandoval" className="w-130" />
          <div className="hidden md:flex bg-peach shadow-lg rounded-xl p-6 transition-shadow flex-col max-w-lg items-start justify-end relative">
            <h1 className="text-5xl font-bold mb-4">Nuestra historia</h1>
            <p className="font-medium text-dark/80 mb-4 max-w-sm">
              Fundada en el 2007, en Centro de Danza Belkis Sandoval Somos 
              una escuela formación Artística, con más de 17 años formando 
              artistas bailarines pero sobre todo mejores seres humanos a través de la danza.
            </p>
            <Link href="/about-us">
              <Button size="lg" className="mt-2 hover:cursor-pointer">
                Ver historia
              </Button>
            </Link>
          </div>
          <Link href="/about-us">
            <Button size="lg" className="mt-2 absolute md:hidden top-42 right-4">
              Ver historia
            </Button>
          </Link>
        </div>
      </section>
          </div>
  );
}
