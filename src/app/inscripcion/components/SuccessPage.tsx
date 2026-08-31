// src/components/SuccessMessage.tsx
import Image from "next/image";
import success from "../../../../public/images/inscription/success.png";

interface SuccessMessageProps {
  message: string;
  onReset?: () => void;
}

export default function SuccessMessage({ message, onReset }: SuccessMessageProps) {
  return (
    <div className="w-full max-w-xl mx-auto md:p-6 flex flex-col items-center text-center">
      {/* Header / Título */}
      <header className="md:mb-6">
        <h2 className="text-3xl font-bold text-dark mb-2">
          ¡Inscripción Exitosa!
        </h2>
        <p className="text-zinc-600 text-sm md:text-base">
          {message}
        </p>
      </header>

      {/* Imagen centrada */}
      <div className="md:my-6 flex justify-center w-full">
        <Image
          src={success} // Cambia esta ruta por tu imagen
          alt="Inscripción completada"
          width={240}
          height={240}
          className="object-contain"
          priority
        />
      </div>

      {/* Botón de otra inscripción */}
      {onReset && (
        <div className="w-full mt-4">
          <button
            type="button"
            onClick={onReset}
            className="hover:cursor-pointer w-full py-3.5 px-4 bg-dark hover:bg-zinc-800 text-white font-semibold rounded-xl transition-all"
          >
            Realizar otra inscripción
          </button>
        </div>
      )}
    </div>
  );
}