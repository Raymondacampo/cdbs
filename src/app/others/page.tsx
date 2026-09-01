import acond1 from "../../../public/images/others/acond1.png";
import acond2 from "../../../public/images/others/acond2.png";
import pilates from "../../../public/images/others/pilates.png";
import Image from "next/image";
import Button from "../../components/ui/Button";
import { Calendar, Clock } from "lucide-react";


import Class from "../../components/Class";

export const metadata = { title: "Otras disciplinas — CDBS" };

const pilatesSchedule = { dayTimes: [
  { day: "Martes y Jueves", time: "6:30pm - 7:30pm" },
] };

const acondSchedule = { dayTimes: [
  { day: "Martes", time: "7:00pm - 8:30pm" },
] };

export default function OthersPage() {
  return (
    <div className="flex flex-col items-start mt-4">
      {/* { DANZA PILATES SECTION } */}
      <div className={"w-full flex items-center flex-col min-h-[70dvh] relative left-0 text-shadow-2xs [word-spacing:0.5rem] md:min-h-[50dvh] lg:min-h-[60dvh]  "}>
          <div className={`bg-pink shadow-lg w-full py-4 flex md:justify-center mb-4`}>
              <h1 className={`font-bold text-white text-4xl md:text-5xl lg:text-7xl w-full md:w-auto text-center  text-shadow-2xs [word-spacing:0.5rem]`}>
                DANZA PILATES            
              </h1>            
          </div>

          <div className={`flex flex-col lg:flex-row items-center gap-4 lg:max-w-6xl p-2 w-full lg:mt-16`}>
              <Image src={pilates} alt={`DANZA PILATES`} className='relative -bottom-2 order-2 w-[80dvw] md:w-[45dvh] lg:w-[65dvh] mx-auto'/>
              
              <div className={`relative top-0 flex flex-col items-center max-w-2xl mx-auto`}>
                  <div className="flex gap-8">
                      <div className="flex flex-col items-center gap-4">
                          <Calendar className={`w-6 h-6 md:w-8 md:h-8`} />
                          <div className="flex flex-col gap-1">
                                  {pilatesSchedule.dayTimes.map(dt => 
                                  <div className="flex flex-col " key={dt.day}>
                                      <p className={`text-sm md:text-xl max-w-xl font-bold [word-spacing:2px]`}>{`${dt.day}`}</p>
                              </div>)}
                          </div>                    
                      </div>
                      <div className="flex flex-col items-center gap-4 ">
                          <Clock className={`w-6 h-6 md:w-8 md:h-8`} />
                          <div className="flex flex-col gap-1">{pilatesSchedule.dayTimes.map(dt => 
                              <div className="flex flex-col" key={dt.day}>
                                  <p className={`text-sm md:text-xl max-w-xl font-bold [word-spacing:2px]`}>{`${dt.time}`}</p>
                              </div>)}
                          </div>                    
                      </div>                    
                  </div> 
                  <p className={`text-center order-1 lg:order-2 text-xs md:text-base mt-4 px-4 font-display lg:mt-8`}>Una fusión de danza y Pilates que mejora fuerza, flexibilidad
                    y control corporal a través de ejercicios fluidos y precisos, ideales para tonificar y conectar cuerpo y mente.
                  </p>        
                  <Button size="lg" className="w-36 h-12 mt-4 lg:mt-8 ">
                    Inscribirme!
                  </Button>       
              </div>
          </div>
      </div>

      {/* { ACONDICIONAMIENTO FISICO SECTION } */}
        <div className={"w-full flex items-center flex-col min-h-[70dvh]  md:min-h-[50dvh] lg:min-h-[75dvh] relative left-0 text-shadow-2xs [word-spacing:0.5rem] "}>
          <div className={`bg-pink shadow-lg w-full py-6 flex md:justify-center mb-4`}>
              <h1 className={`font-bold text-white text-2xl md:text-5xl lg:text-7xl w-full md:w-auto text-center  text-shadow-2xs [word-spacing:0.1rem]`}>
                ACONDICIONAMIENTO FISICO Y TECNICA DE JAZZ          
              </h1>            
          </div>

          <div className={`flex items-start lg:max-w-3xl p-2 w-full lg:mt-20`}>
              <Image src={acond1} alt={`ACONDICIONAMIENTO FISICO Y TECNICA DE JAZZ`} className='absolute bottom-0 left-4 w-[30dvw] md:w-[18dvw] lg:w-[13dvw] md:left-12 lg:left-48'/>
              <Image src={acond2} alt={`ACONDICIONAMIENTO FISICO Y TECNICA DE JAZZ`} className='absolute bottom-0 -right-8 w-[50dvw] md:w-[32dvw] lg:w-[25dvw] md:right-0'/>
              <div className={`relative top-0 flex flex-col items-center`}>
                  <div className="flex gap-8">
                      <div className="flex flex-col items-center gap-4">
                          <Calendar className={`w-6 h-6 md:w-8 md:h-8`} />
                          <div className="flex flex-col gap-1">
                                  {acondSchedule.dayTimes.map(dt => 
                                  <div className="flex flex-col " key={dt.day}>
                                      <p className={`text-sm md:text-xl max-w-xl font-bold [word-spacing:2px]`}>{`${dt.day}`}</p>
                              </div>)}
                          </div>                    
                      </div>
                      <div className="flex flex-col items-center gap-4 ">
                          <Clock className={`w-6 h-6 md:w-8 md:h-8`} />
                          <div className="flex flex-col gap-1">{acondSchedule.dayTimes.map(dt => 
                              <div className="flex flex-col" key={dt.day}>
                                  <p className={`text-sm md:text-xl max-w-xl font-bold [word-spacing:2px]`}>{`${dt.time}`}</p>
                              </div>)}
                          </div>                    
                      </div>                    
                  </div> 
                  <p className={`text-center text-xs md:text-base font-display px-4 mt-4`}>Clase de jazz que combina técnica clásica y movimientos 
                    modernos, desarrollando flexibilidad, fuerza y precisión mediante coreografías elegantes y llenas de estilo.

                  </p>        
                  <Button size="lg" className="w-36 h-12 mt-4 lg:mt-8">
                    Inscribirme!
                  </Button>       
              </div>
          </div>
      </div>


    </div>
  );
}
