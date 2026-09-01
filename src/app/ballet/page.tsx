import movCreativo from "../../../public/images/ballet/mov_creativo.png";
import preballet from "../../../public/images/ballet/pre-ballet.png";
import balletI from "../../../public/images/ballet/ballet1.png";
import adolescentes from "../../../public/images/ballet/adolescentes.png";
import avanzado from "../../../public/images/ballet/avanzado.png";

import Class from "../../components/Class";

export const metadata = { title: "Ballet — CDBS" };

export default function BalletPage() {
  return (
    <div className="flex flex-col bg-pink md:pt-12 overflow-hidden">
      <Class
        phone="text-white max-w-[80%] mt-[4dvh] md:mt-0 mr-auto"
        desktop="md:text-white md:max-w-[65%] md:top-8 md:mr-8"
        img={{ src: movCreativo, width: "w-[60dvw] h-auto sm:w-[50dvw] md:w-[40dvw] md:max-w-[330px] lg:max-w-none lg:w-auto lg:h-[50dvh] ", 
        position: "absolute -right-[25%] bottom-0 sm:-right-[15%] md:bottom-1 md:-rotate-1 md:right-0 lg:relative lg:translate-y-[5.3%] xl:bottom-2 xl:translate-y-[8%]" }}
        bannercolor="bg-peach"
        bg="bg-pink"
        dayTime={{ dayTimes: [
          { day: "Lunes y Miercoles", time: "4:30am - 5:30am" },
          { day: "Martes y Jueves", time: "3:00pm - 4:00pm" },
          { day: "Sabados", time: "10:30am - 12:00pm" }
        ] }}
        age={{ age: "Menor de 8 años", icon: <span>👶</span> }}
        order="first"
        description="Estimula coordinación, equilibrio y gracia a través del juego, la música y la creatividad."
        variant="right"
        centerText="md:relative "
      >
        MOVIMIENTO CREATIVO
      </Class>

      <Class
        phone="text-white max-w-[80%] mt-[4dvh] xl:mt-8"
        desktop="md:text-white md:max-w-[65%] md:top-4 md:mr-8"
        img={{ src: preballet, width: "w-[35dvw] max-w-[190px] md:w-[22dvh] md:max-w-[210px] lg:w-[25dvh]", position: "absolute lg:relative -left-10 md:left-[10%] bottom-4 lg:bottom-[15%]" }}
        bannercolor="bg-peach"
        bg="bg-pink"
        dayTime={{ dayTimes: [
          { day: "Lunes y Miercoles", time: "12:00pm - 1:00pm" },
          { day: "Martes", time: "2:00pm - 3:00pm" },
        ] }}
        age={{ age: "3 - 8 años", icon: <span>👶</span> }}
        order="second"
        description="Introduce a niños pequeños a la danza mediante juegos, música y ejercicios creativos que estimulan su coordinación y ritmo."
        variant="left"
        centerText="md:relative text-4xl "
      >
        PRE-BALLET
      </Class>

      <Class
        phone="text-white max-w-[80%] mt-[4dvh] xl:mt-8"
        desktop="md:text-white md:max-w-[65%] md:top-4 md:mr-8"
        img={{ src: balletI, width: "w-[50dvw] h-auto max-w-[280px] md:w-[30dvh] lg:h-[49dvh] lg:w-auto xl:h-[50.5dvh]", position: "absolute -right-[18%] sm:-right-[10%] bottom-0 md:-bottom-2 md:-rotate-1 md:right-[5%] md:bottom-1 lg:-left-8 lg:-bottom-6.5 lg:relative" }}
        bannercolor="bg-peach"
        bg="bg-pink"
        dayTime={{ dayTimes: [
          { day: "Lunes y Miercoles", time: "3:30pm - 4:30pm" },
          { day: "Martes", time: "9:00am - 10:30am" },
        ] }}
        age={{ age: "8 - 11 años", icon: <span>👶</span> }}
        order="first"
        description="Fortalece técnica, coordinación, equilibrio y expresión artística en niñas mayores con ejercicios dinámicos."
        variant="right"
        centerText="md:relative text-5xl"
      >
        BALLET I
      </Class>

      <div className="relative pb-8 bg-pink">
        <Class
          phone="text-white max-w-[75%] mt-[4dvh] xl:mt-8"
          desktop="md:text-white md:max-w-[65%] md:top-4 md:mr-8"
          img={{ src: adolescentes, width: "w-[60dvw] max-w-[320px] md:max-w-none md:w-[35dvh] lg:w-[40dvh]", position: "absolute sm:-left-[15%] lg:relative -left-[20%] md:-left-8 -bottom-4 lg:bottom-6" }}
          bannercolor="bg-peach"
          bg="bg-pink"
          dayTime={{ dayTimes: [
            { day: "Martes y Jueves", time: "3:30pm - 4:30pm" },
          ] }}
          age={{ age: "12 - 17 años", icon: <span>👶</span> }}
          order="second"
          description="Perfecciona técnica, flexibilidad, postura y expresión artística a través de coreografías dinámicas."
          variant="left"
          centerText="md:relative text-4xl"
        >
          ADOLESCENTES
        </Class>   
      </div>

        <Class
          phone="text-white max-w-[80%] mt-[4dvh] xl:mt-8"
          desktop="md:text-white md:max-w-[65%] md:top-4  md:mr-8"
          img={{ src: avanzado, width: "w-[43dvw] max-w-[310px] md:w-[30dvh] md:max-w-none lg:w-[30dvh]", position: "absolute -right-[20%] md:right-4 bottom-4 lg:bottom-20 lg:relative " }}
          bannercolor="bg-peach"
          bg="bg-pink"
          dayTime={{ dayTimes: [
            { day: "Martes y Jueves", time: "4:00pm - 5:30pm" },
          ] }}
          age={{ age: "12 en adelante", icon: <span>👶</span> }}
          order="first"
          description="Perfecciona técnica, fuerza y expresión artística con trabajo de puntas y coreografías complejas."
          variant="right"
          centerText="md:relative text-5xl"
        >
          AVANZADO
        </Class>   
    </div>
  );
}
