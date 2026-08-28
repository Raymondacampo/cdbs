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
        phone="text-white top-10 max-w-[80%] mr-auto"
        desktop="md:text-white md:max-w-[65%] md:top-8 md:mr-8"
        img={{ src: movCreativo, width: "w-[60dvw] md:w-[30dvh] lg:w-[35dvh]", 
        position: "absolute -right-24 -bottom-0 md:-rotate-1 md:right-10 md:bottom-1 lg:-bottom-13 lg:relative " }}
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
        centerText="md:relative lg:-right-32"
      >
        MOVIMIENTO CREATIVO
      </Class>

      <Class
        phone="text-white top-8 max-w-[80%]"
        desktop="md:text-white md:max-w-[65%] md:top-4 md:mr-8"
        img={{ src: preballet, width: "w-[35dvw] md:w-[20dvh] lg:w-[25dvh]", position: "absolute lg:relative -left-10 md:left-0 bottom-4" }}
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
        centerText="md:relative text-4xl md:-right-24 lg:-left-32"
      >
        PRE-BALLET
      </Class>

      <Class
        phone="text-white top-8 max-w-[80%]"
        desktop="md:text-white md:max-w-[65%] md:top-4 md:mr-8"
        img={{ src: balletI, width: "w-[50dvw] md:w-[30dvh] lg:w-[35dvh]", position: "absolute -right-16 bottom-0 md:-bottom-2 md:-rotate-1 md:bottom-1 lg:-left-8 lg:-bottom-3.5 lg:relative" }}
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
        centerText="md:relative text-5xl md:-left-32 lg:left-36"
      >
        BALLET l
      </Class>

      <div className="relative pb-8 bg-pink">
        <Class
          phone="text-white top-6 max-w-[75%]"
          desktop="md:text-white md:max-w-[65%] md:top-4 md:mr-8"
          img={{ src: adolescentes, width: "w-[60dvw] md:w-[30dvh] lg:w-[40dvh]", position: "absolute lg:relative -left-20 md:-left-8 -bottom-4" }}
          bannercolor="bg-peach"
          bg="bg-pink"
          dayTime={{ dayTimes: [
            { day: "Martes y Jueves", time: "3:30pm - 4:30pm" },
          ] }}
          age={{ age: "12 - 17 años", icon: <span>👶</span> }}
          order="second"
          description="Perfecciona técnica, flexibilidad, postura y expresión artística a través de coreografías dinámicas."
          variant="left"
          centerText="md:relative text-4xl md:-right-20 lg:-left-52"
        >
          ADOLESCENTES
        </Class>   
      </div>

        <Class
          phone="text-white top-4 max-w-[80%]"
          desktop="md:text-white md:max-w-[65%] md:top-4  md:mr-8"
          img={{ src: avanzado, width: "w-[43dvw] md:w-[25dvh] lg:w-[30dvh]", position: "absolute -right-20 md:right-4 bottom-4  lg:relative " }}
          bannercolor="bg-peach"
          bg="bg-pink"
          dayTime={{ dayTimes: [
            { day: "Martes y Jueves", time: "4:00pm - 5:30pm" },
          ] }}
          age={{ age: "12 en adelante", icon: <span>👶</span> }}
          order="first"
          description="Perfecciona técnica, fuerza y expresión artística con trabajo de puntas y coreografías complejas."
          variant="right"
          centerText="md:relative text-5xl md:-left-20 lg:left-32"
        >
          AVANZADO
        </Class>   
    </div>
  );
}
