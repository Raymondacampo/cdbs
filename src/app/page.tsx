import { H1, H2 } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import InclineDiv from "@/components/ui/incline_div";
import Image from "next/image";
import pequenas from "../../public/images/dashboard/pequenas.png";
import bhome from "../../public/images/dashboard/bhome.png";
import hjhome from "../../public/images/dashboard/hjhome.png";
import phome from "../../public/images/dashboard/phome.png";
import zapatillas from "../../public/images/dashboard/zapatillas.png";
import belkis from "../../public/images/dashboard/belkis.png";
const classes = [
    {
    name: "BALLET",
    image: bhome,
    },
    {
    name: "HIP-HOP & JAZZ",
    image: hjhome,
  },
  {
    name: "PILATES Y MÁS",
    image: phome,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero section */}
      <section className="bg-blush py-24 min-h-[70dvh] px-4 relative text-center shadow-md">
      <InclineDiv variant="right" color="pink" size="lg" className="pl-80 text-start z-10">LAS MAS<br></br> PEQUEÑAS</InclineDiv>

        {/* TODO: replace with actual hero image */}
        <Image src={pequenas} alt="Dance hero" className="absolute bottom-0 right-[20dvw] z-20 w-130" />
        <div className="absolute z-10 max-w-3xl text-left left-80 bottom-10">
          <H1 className="">BALLET PARA NIÑAS</H1>
          <p className="text-lg text-dark/80 mb-4 text-left mx-auto">
            Explora nuestra variedad de clases de ballet para las mas pequeñas
          </p>
          <div className="flex flex-wrap gap-4 justify-start">
            <Button size="lg">Explore Classes</Button>
          </div>          
        </div>
      </section>

      {/* Classes overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto mb-24">
        <H2 className="text-center font-bold mb-10">NUESTRAS CLASES</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {classes.map(({ name, image }) => (
            <div
              key={name}
              className="rounded-xl transition-shadow flex flex-col items-center justify-end"
            >
              <Image src={image} alt={name} className="w-130 mb-6"/>
              <h3 className="h3 font-black text-center">{name}</h3>
              <Button size="md" className="mt-4">
                Ver clases
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Store overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-start justify-center gap-6">
          <div className="rounded-xl p-6 transition-shadow flex flex-col max-w-lg items-center justify-end">
            <h1 className="text-8xl text-end ">Recital</h1>
            <p className="text-end">Visita nuestra tienda con la mas amplia variedad de productos para la danza en santo domingo</p>
            <Button size="md" className="mt-4 ml-auto">
              Ver Tienda
            </Button>
          </div>
          <Image src={zapatillas} alt={'zapatillas'} className="w-130 mb-4"/>
        </div>
      </section>

      {/* About overview */}
      <section className="pt-16 bg-pink flex">
        <div className="flex items-start max-w-7xl mx-auto px-4">
          <Image src={belkis} alt="Belkis Sandoval" className="w-130" />
          <div>
            <h1 className="text-4xl font-bold mb-4">Nuestra historia</h1>
            <Button size="md" className="mt-4">
              Ver historia
            </Button>
          </div>
        </div>
      </section>
          </div>
  );
}
