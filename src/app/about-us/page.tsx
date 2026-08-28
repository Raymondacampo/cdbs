import { H1, H2, H3 } from "@/components/ui/Heading";
import Image from "next/image";
import belkis from "../../../public/images/dashboard/belkis.png";
import ballprueba from "../../../public/images/about-us/ballprueba.png";
export const metadata = { title: "About Us — CDBS" };

type AbtInfoProps = {
  title: string;
  content: React.ReactNode;
};

const AbtInfo = ({ title, content }: AbtInfoProps) => {
  return (
    <div className=" w-full max-w-2xl flex flex-col gap-8
    md:px-4">
      <h1 className="text-3xl font-bold text-center p-4 w-full shadow-xl bg-peach m
      d:text-6xl h">{title}</h1>
      <div className="bg-peach shadow-xl p-4
      md:p-8">{content}</div>
    </div>
  );
};

const Mvv = ({ title, content }: AbtInfoProps) => {
  return (
    <div className="h-full w-full max-w-sm flex flex-col">
      <h1 className="text-3xl relative top-4 font-bold text-center p-4 shadow-md bg-peach m
      d:text-6xl ">{title}</h1>
      <div className="bg-peach shadow-xl p-4 h-full
      md:p-8">{content}</div>
    </div>
  );
};


export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center bg-pink font-display">
      <div className="flex w-full justify-center bg-dark text-white py-6 md:py-12 text-center px-4">
        <H1>Sobre Nosotros</H1>
      </div>

      <section className="flex flex-wrap items-center w-full justify-center px-4 max-w-9xl py-12 md:py-16 mx-auto">
        <Image
          src={ballprueba}
          alt="Sobre Nosotros"
          className="h-auto w-[60dvw]
          md:w-[60dvw] xl:order-2 lg:w-[35dvw]"
        />
        <AbtInfo
          title="Nuestra Historia"
          content={<p className="text-base md:text-xl">Fundada en el 2007, en Centro de Danza Belkis 
          Sandoval Somos una escuela formación Artística, con más de 17 años formando 
          artistas bailarines pero sobre todo mejores seres humanos a través de la danza.
          <br></br><br></br>
          Estamos dedicados a proporcionar el mejor servicio en educación y rendimiento de
           danza. Nuestra misión es inspirar y nutrir a la próxima generación de bailarines 
           a través de una instrucción de alta calidad y una comunidad de apoyo. Además de 
           nuestros programas de danza, también ofrecemos una variedad de servicios que 
           incluyen coreografía, oportunidades de actuación e iniciativas de alcance 
           comunitario. Nuestro equipo de instructores experimentados está comprometido 
           a ayudar a cada estudiante a alcanzar su máximo potencial, ya sea que sean 
           principiantes o bailarines avanzados.
          </p>}
        />
      </section>

      <section className="flex flex-wrap items-center w-full justify-center py-12 md:py-16 px-4 max-w-9xl mx-auto">
        <Image
          src={belkis}
          alt="Sobre Nosotros"
          className="w-full md:w-[80dvw] lg:w-[35dvw]"
        />
        <AbtInfo
          title="Belkis Sandoval"
          content={<p className="text-base md:text-xl">Inició su formación en danza clásica, contemporánea y neoclásica con 
            la maestra Miriam Bello, ampliando luego sus estudios en jazz y ritmos afroantillanos. 
            Fue bailarina del Ballet Nacional Dominicano y maestra en diversas instituciones como 
            el Ballet Folklórico Nacional, la Escuela Nacional de Danza, Ballet Concierto Dominicano, 
            el Club Claro, el Centro Cultural Narciso González y Bellas Artes en La Romana. Como 
            coreógrafa trabajó con reconocidos productores y artistas como Guillermo Cordero, 
            Juan Luis Guerra, Chiqui Hadad y Fernando Villalona, además de participar en grandes 
            espectáculos nacionales e internacionales. En 2007 fundó el Centro de Danza Belkis 
            Sandoval y en 2021 abrió Kokorodance en SDO. Actualmente es miembro fundador y vocal 
            de la Asociación Dominicana de Profesionales de la Danza.</p>}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <Mvv
          title="Nuestra Misión"
          content={<p className="text-base md:text-xl">Nuestra misión es inspirar y nutrir a la próxima generación de bailarines a través de una instrucción de alta calidad y una comunidad de apoyo.</p>}
        />
        <Mvv
          title="Nuestra Visión"
          content={<p className="text-base md:text-xl">Nuestra visión es ser reconocidos como un centro líder en la formación de bailarines, promoviendo la excelencia artística y el desarrollo integral de nuestros estudiantes.</p>}
        />
        <Mvv
          title="Nuestros Valores"
          content={<p className="text-base md:text-xl">Fomentamos la creatividad, la disciplina, el respeto y la colaboración entre nuestros estudiantes, creando un entorno donde cada bailarín puede prosperar.</p>}
        />
      </section>
  </div>
  );
}
