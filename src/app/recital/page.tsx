import { H1, H2 } from "@/components/ui/Heading";
import Link from "next/link";
import Image from "next/image";
import hero from "../../../public/images/recital/hero.png";
import hero2 from "../../../public/images/recital/hero2.png";
import hero3 from "../../../public/images/recital/hero3.png";
import BestSellers from "./components/BestSellers";
import sanshamob from "../../../public/images/recital/sanshamob.png";
import sanshatab from "../../../public/images/recital/sanshatab.png";
import gaynor from "../../../public/images/recital/gaynor.png";
import Button from "@/components/ui/Button";
import Clothing from "./components/Clothing";
export const metadata = { title: "Recital Store — CDBS" };

const sections = [
  { slug: "shoes",      label: "Shoes" },
  { slug: "costumes",   label: "Costumes" },
  { slug: "accessories",label: "Accessories" },
  { slug: "apparel",    label: "Apparel" },
];

export default function RecitalPage() {
  return (
    <div>
      { /* Hero section mobile */ }
      <div className="bg-white md:hidden text-center text-white">
        <Image
          src={hero}
          alt="Recital Store Hero"
          className="mx-auto w-dvw"
        />
      </div>

      { /* Hero section mobile */ }
      <div className="bg-white hidden md:block lg:hidden text-center text-white">
        <Image
          src={hero2}
          alt="Recital Store Hero"
          className="mx-auto w-dvw"
        />
      </div>

      { /* Hero section desktop */ }
      <div className="bg-white hidden lg:block text-center text-white">
        <Image
          src={hero3}
          alt="Recital Store Hero"
          className="mx-auto w-dvw"
        />
      </div>

      { /* Best sellers section */ }
      <section className="flex flex-col items-center w-full">
        <H2 className="md:mb-8 text-3xl w-full md:text-5xl font-bold bg-dark py-4 md:py-8 text-white text-center">LOS MAS VENDIDOS</H2>
        <BestSellers />
      </section>
      

      { /* SANSHA section */ }
      <section className="hidden flex-col relative h-[55dvh] mb-12
       md:h-[40dvh] lg:h-[65dvh]">
        <H2 className="text-3xl relative z-20 md:text-5xl font-bold bg-dark py-4 md:py-8 text-white text-center">COLECCION SANSHA</H2>
        {/* Botón Grande (Pantallas sm en adelante) */}
        <Link 
          href="/recital/sansha" 
          className="relative hidden! sm:inline-flex! z-20 top-0 md:top-4 lg:top-0 my-auto mx-auto"
        >
          <Button size="lg" className="hover:cursor-pointer">
            Ver coleccion
          </Button>
        </Link>

        {/* Botón Mediano (Solo móviles) */}
        <Link 
          href="/recital/sansha" 
          className="relative inline-flex! sm:hidden! z-20 top-0 md:top-4 lg:top-0 my-auto mx-auto "
        >
          <Button size="md" className="hover:cursor-pointer">
            Ver coleccion
          </Button>
        </Link>
        <Image
          src={sanshamob}
          alt="Coleccion Sansha"
          className="mx-auto md:hidden! w-dvw absolute z-10 mt-12"
        />
        <Image
          src={sanshatab}
          alt="Coleccion Sansha"
          className="mx-auto hidden w-dvw absolute z-10 mt-20 left-1/2 -translate-x-1/2
          md:block
          lg:w-[48dvw]"
        />
      </section>

      { /* GAYNOR section */ }
      <section className=" hidden flex-col relative h-[40dvh] mb-12
       md:h-[35dvh] lg:h-[65dvh]">
        <H2 className="text-3xl relative z-20 md:text-5xl font-bold bg-dark py-4 md:py-8 text-white text-center">COLECCION GAYNOR</H2>
        <Link 
          href="/recital/gaynor" 
          className="relative hidden! sm:inline-flex! z-20 md:top-16 lg:top-6 my-auto mx-auto"
        >
          <Button size="lg" className="hover:cursor-pointer">
            Ver coleccion
          </Button>
        </Link>

        {/* Botón Mediano */}
        <Link 
          href="/recital/gaynor" 
          className="relative inline-flex! sm:hidden! z-20 top-4 md:top-28 lg:top-16 my-auto mx-auto"
        >
          <Button size="md" className="hover:cursor-pointer">
            Ver coleccion
          </Button>
        </Link>
        <Image
          src={gaynor}
          alt="Coleccion Gaynor"
          className="mx-auto w-[150dvw] absolute z-10 mt-16 left-1/2 -translate-x-1/2
          md:mt-28
          lg:w-[50dvw]"
        />
      </section>

      { /* Clothing section */ }
      <section className="flex flex-col w-full items-center mb-12 mt-32">
        <H2 className="text-3xl w-full relative z-20 md:text-5xl font-bold bg-dark py-4 md:py-8 text-white text-center mb-12">TODA LA COLECCION</H2>
        <Clothing />
      </section>

      
      <section className="flex flex-col">
      </section>      
    </div>
  );
}
