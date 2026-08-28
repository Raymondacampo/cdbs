import { Calendar, Clock } from "lucide-react";

export default function MisIconos({ color }: { color: string }) {
  return (
    <div className="w-full relative flex justify-between items-center">
      {/* Icono de Calendario */}
      <Calendar className={`relative left-[15%] w-5 h-5 ${color}`} />

      {/* Icono de Reloj */}
      <Clock className={`relative right-[15%] w-5 h-5 ${color}`} />
    </div>
  );
}