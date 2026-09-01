import hipkids from "../../../public/images/hiphop-jazz/hipkids.png";
import jazzhop from "../../../public/images/hiphop-jazz/jazzhop.png";
import hiphop from "../../../public/images/hiphop-jazz/hiphop.png";
import jazz from "../../../public/images/hiphop-jazz/jazz.png";

import Class from "../../components/Class";

export const metadata = { title: "Hip Hop & Jazz — CDBS" };

export default function HiphopJazzPage() {
  return (
    <div className="flex flex-col bg-peach md:pt-12 mt-4 overflow-hidden">
      <Class
        phone="text-dark top-4 max-w-[75%] mr-auto mt-[3dvh]"
        desktop="md:max-w-[65%] lg:top-4 md:mr-8"
        img={{ src: hipkids, width: "w-[55dvw] sm:w-[45dvw] max-w-[390px] md:w-[35dvh] lg:w-[35dvh]", 
        position: "absolute -right-[30%] sm:-right-[15%] -rotate-12 bottom-10 sm:bottom-0 md:-rotate-1 md:-right-20 md:bottom-8 lg:-bottom-4 lg:-left-8 lg:relative " }}
        bannercolor="bg-pink"
        bg="bg-peach"
        dayTime={{ dayTimes: [
          { day: "Lunes y Miercoles", time: "4:30pm - 5:30pm" },
        ] }}
        age={{ age: "12 en adelante", icon: <span>👶</span> }}
        order="first"
        description="Clase de hip-hop llena de ritmo y energía, donde los niños aprenden coreografías modernas mientras desarrollan
         confianza, coordinación y expresión personal.
"
        variant="left"
        centerText="text-white md:relative "
      >
        HIP-HOP KIDS
      </Class>

      <Class
        phone="text-dark top-8 max-w-[70%] lg:mt-[4dvh]"
        desktop="md:max-w-[65%] md:mr-8"
        img={{ src: jazzhop, width: "w-[45dvw] md:w-[32dvh] lg:w-[35dvh]", position: "absolute lg:relative -left-[6%] md:left-0 bottom-0 md:bottom-12  lg:bottom-4 lg:-right-[10%]" }}
        bannercolor="bg-pink"
        bg="bg-peach"
        dayTime={{ dayTimes: [
          { day: "Sábado", time: "10:30am - 12:00pm" },
        ] }}
        age={{ age: "12 en adelante", icon: <span>👶</span> }}
        order="second"
        description="Fusión de jazz y hip-hop que combina técnica, ritmo y actitud, desarrollando fuerza, flexibilidad y coordinación mediante coreografías dinámicas y llenas de energía.
"
        variant="right"
        centerText="text-white text-4xl md:text-7xl md:relative"
      >
        JAZZ-HOP KIDS
      </Class>

      <Class
        phone="text-dark top-8 max-w-[75%] lg:mt-[4dvh]"
        desktop="md:max-w-[65%] md:top-4 md:mr-8"
        img={{ src: hiphop, width: "w-[55dvw] sm:w-[50dvw] md:w-[35dvw] lg:w-[40dvh]", position: "absolute -right-[22%] bottom-[20%] sm:bottom-0 sm:-right-[12%] md:right-0 md:-bottom-2 md:-rotate-1 md:bottom-1 lg:-left-8 lg:-bottom-3.5 lg:relative" }}
        bannercolor="bg-pink"
        bg="bg-peach"
        dayTime={{ dayTimes: [
          { day: "Martes y Jueves ", time: "4:30pm - 5:30pm" },
        ] }}
        age={{ age: "8-11 anos", icon: <span>👶</span> }}
        order="first"
        description="Clase de hip-hop llena de energía donde los estudiantes desarrollan estilo, coordinación y confianza mediante movimientos
         urbanos, coreografías dinámicas y expresión individual.
"
        variant="left"
        centerText="text-white text-5xl md:text-7xl"
      >
        HIP-HOP
      </Class>

      <Class
        phone="text-dark top-6 max-w-[75%] lg:mt-[4dvh]"
        desktop="md:max-w-[65%] md:top-4 md:mr-8"
        img={{ src: jazz, width: "w-[45dvw] sm:w-[40dvw] md:w-[30dvh] lg:w-[35dvh]", position: "absolute bottom-4 lg:relative -left-[20%] sm:-left-[5%] md:left-0 md:bottom-8 bottom-0 lg:bottom-[20%]" }}
        bannercolor="bg-pink"
        bg="bg-peach"
        dayTime={{ dayTimes: [
          { day: "Martes y Jueves", time: "5:30pm - 6:30pm" },
        ] }}
        age={{ age: "12-17 anos", icon: <span>👶</span> }}
        order="second"
        description="Clase de jazz que combina técnica clásica y movimientos modernos, desarrollando flexibilidad, fuerza y precisión mediante coreografías elegantes y llenas de estilo."
        variant="right"
        centerText="text-white text-5xl md:text-7xl"
      >
        JAZZ
      </Class>   
    </div>
  );
}
