"use client";

import { useActionState, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { submitRegistration, FormState } from "@/app/actions/register";

type CategoriaKey = "Ballet" | "Hip-Hop & Jazz" | "Otras Disciplinas";

const CATEGORIAS_DISCIPLINAS: Record<CategoriaKey, string[]> = {
  Ballet: [
    "MOVIMIENTO CREATIVO",
    "PRE-BALLET",
    "BALLET I",
    "ADOLESCENTES",
    "AVANZADO",
  ],
  "Hip-Hop & Jazz": [
    "HIP-HOP KIDS",
    "JAZZ-HOP KIDS",
    "HIP-HOP",
    "JAZZ",
  ],
  "Otras Disciplinas": [
    "DANZA PILATES",
    "ACONDICIONAMIENTO FISICO Y TECNICA DE JAZZ",
  ],
};

const TODAS_LAS_DISCIPLINAS = Object.values(CATEGORIAS_DISCIPLINAS).flat();
const CATEGORIAS_KEYS = Object.keys(CATEGORIAS_DISCIPLINAS) as CategoriaKey[];

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const initialState: FormState = {
  success: false,
  message: "",
};

interface RegistrationFormProps {
  onSuccess?: (state: FormState) => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");
  const [state, formAction, isPending] = useActionState(submitRegistration, initialState);

  // Ejecutar callback cuando la acción sea exitosa
  useEffect(() => {
    if (state.success && onSuccess) {
      onSuccess(state);
    }
  }, [state, onSuccess]);

  // Estados del formulario
  const [target, setTarget] = useState<"self" | "child">("self");
  const [selectedCategoria, setSelectedCategoria] = useState<CategoriaKey>("Ballet");
  const [selectedDisciplina, setSelectedDisciplina] = useState<string>("");
  const [tempDisciplina, setTempDisciplina] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pre-llenar la disciplina si viene desde la URL (ej: ?disciplina=HIP-HOP)
  useEffect(() => {
    const paramDisciplina = searchParams.get("disciplina");
    if (paramDisciplina) {
      const match = TODAS_LAS_DISCIPLINAS.find(
        (d) => d.toLowerCase() === paramDisciplina.toLowerCase()
      );
      if (match) {
        setSelectedDisciplina(match);
        // Buscar a qué categoría pertenece
        for (const [cat, items] of Object.entries(CATEGORIAS_DISCIPLINAS)) {
          if (items.includes(match)) {
            setSelectedCategoria(cat as CategoriaKey);
            break;
          }
        }
      } else {
        setSelectedDisciplina(paramDisciplina);
      }
    }
  }, [searchParams]);

  const openDisciplinaModal = () => {
    // Si ya hay una disciplina seleccionada, ubicar su categoría
    if (selectedDisciplina) {
      for (const [cat, items] of Object.entries(CATEGORIAS_DISCIPLINAS)) {
        if (items.includes(selectedDisciplina)) {
          setSelectedCategoria(cat as CategoriaKey);
          break;
        }
      }
      setTempDisciplina(selectedDisciplina);
    } else {
      setTempDisciplina(CATEGORIAS_DISCIPLINAS[selectedCategoria][0]);
    }
    setIsModalOpen(true);
  };

  const confirmDisciplina = () => {
    setSelectedDisciplina(tempDisciplina);
    setIsModalOpen(false);
  };

  const handleCategoriaChange = (cat: CategoriaKey) => {
    setSelectedCategoria(cat);
    // Seleccionar automáticamente la primera disciplina de la categoría al cambiar
    if (CATEGORIAS_DISCIPLINAS[cat]?.length > 0) {
      setTempDisciplina(CATEGORIAS_DISCIPLINAS[cat][0]);
    }
  };

  const isChild = target === "child";

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-sm lg:shadow-none ">
      <h2 className="text-2xl font-bold text-dark mb-6">
        Formulario de Inscripción
      </h2>

      {state.message && (
        <div
          className={`p-4 mb-6 text-sm rounded-xl ${
            state.success
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-rose-50 text-rose-800 border border-rose-200"
          }`}
        >
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-5">
        {/* Checkboxes de Selección de Destinatario */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-dark">
            ¿Para quién es la inscripción? *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTarget("self")}
              className={`hover:cursor-pointer py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                target === "self"
                  ? "border-dark bg-dark text-white dark:border-zinc-100 shadow-sm"
                  : "border-dark bg-transparent text-dark hover:bg-zinc-50 hover:text-white"
              }`}
            >
              Inscripción para mí
            </button>

            <button
              type="button"
              onClick={() => setTarget("child")}
              className={`hover:cursor-pointer py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                target === "child"
                  ? "border-dark bg-dark text-white dark:border-zinc-100 shadow-sm"
                  : "border-dark bg-transparent text-dark hover:bg-zinc-100"
              }`}
            >
              Inscripción para mi hijo/a
            </button>
          </div>
          <input type="hidden" name="target" value={target} />
        </div>

        {/* Nombre completo */}
        <div>
          <label className="block text-sm font-medium mb-1.5 text-dark">
            {isChild ? "Nombre completo de tu hijo/a *" : "Nombre completo *"}
          </label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder={isChild ? "Nombre del niño/a" : "Tu nombre completo"}
          />
        </div>

        {/* Fecha de nacimiento (3 Selects unidos) */}
        <div>
          <label className="block text-sm font-medium mb-1.5 text-dark">
            {isChild ? "Fecha de nacimiento de tu hijo/a *" : "Fecha de nacimiento *"}
          </label>
          <div className="grid grid-cols-3 gap-2">
            <select
              name="dia"
              required
              className="px-3 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              <option value="" disabled >Día</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d} className="">{d}</option>
              ))}
            </select>

            <select
              name="mes"
              required
              className="px-3 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              <option value="" disabled>Mes</option>
              {MESES.map((mes, idx) => (
                <option key={mes} value={idx + 1} className="">{mes}</option>
              ))}
            </select>

            <select
              name="ano"
              required
              className="px-3 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              <option value="" disabled>Año</option>
              {Array.from({ length: 90 }, (_, i) => 2026 - i).map((a) => (
                <option key={a} value={a} className="">{a}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Género */}
        <div>
          <label className="block text-sm font-medium mb-1.5 text-zinc-700">
            {isChild ? "Género de tu hijo/a *" : "Género *"}
          </label>
          <select
            name="genero"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="Masculino" className="">Masculino</option>
            <option value="Femenino" className="">Femenino</option>
            <option value="Otro" className="">Otro / Prefiero no decir</option>
          </select>
        </div>

        {/* Disciplina (Abre Modal interactivo con Categorías) */}
        <div>
          <label className="block text-sm font-medium mb-1.5 text-zinc-700">
            Disciplina *
          </label>
          <button
            type="button"
            onClick={openDisciplinaModal}
            className="hover:cursor-pointer w-full px-3.5 py-2.5 rounded-xl border border-dark bg-transparent text-left text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500 flex justify-between items-center"
          >
            <span className={selectedDisciplina ? "font-medium" : "text-zinc-400"}>
              {selectedDisciplina || "Toca para seleccionar disciplina"}
            </span>
            <span className="text-xs font-bold bg-zinc-100 px-2 py-1 rounded-md text-dark">
              Cambiar
            </span>
          </button>
          <input type="hidden" name="disciplina" value={selectedDisciplina} required />
        </div>

        {/* Dirección (Opcional) */}
        <div>
          <label className="block text-sm font-medium mb-1.5 text-zinc-700">
            Dirección <span className="text-zinc-400 font-normal">(opcional)</span>
          </label>
          <input
            type="text"
            name="direccion"
            className="w-full px-3.5 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="Calle, número, sector..."
          />
        </div>

        {/* Cédula del Padre (Solo si es para hijo) */}
        {isChild && (
          <div>
            <label className="block text-sm font-medium mb-1.5 text-zinc-700">
              Cédula del padre / tutor *
            </label>
            <input
              type="text"
              name="cedula"
              required={isChild}
              className="w-full px-3.5 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="001-0000000-0"
            />
          </div>
        )}

        {/* Correo Electrónico */}
        <div>
          <label className="block text-sm font-medium mb-1.5 text-zinc-700">
            {isChild ? "Correo electrónico del padre / tutor *" : "Correo electrónico *"}
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="correo@ejemplo.com"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium mb-1.5 text-zinc-700">
            {isChild ? "Teléfono del padre / tutor *" : "Teléfono / WhatsApp *"}
          </label>
          <input
            type="tel"
            name="telefono"
            required
            className="w-full px-3.5 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="+1 (809) 000-0000"
          />
        </div>

        {/* Universidad / Empresa (Opcional) */}
        <div>
          <label className="block text-sm font-medium mb-1.5 text-zinc-700">
            Universidad donde estudia o empresa donde trabaja{" "}
            <span className="text-zinc-400 font-normal">(opcional)</span>
          </label>
          <input
            type="text"
            name="empresaUniversidad"
            className="w-full px-3.5 py-2.5 rounded-xl border border-dark bg-transparent text-dark focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="Ej: PUCMM, INTEC, Banco BHD..."
          />
        </div>

        {/* Botón Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="hover:cursor-pointer w-full py-3 px-4 bg-dark hover:bg-zinc-800 text-white font-semibold rounded-xl transition-all disabled:opacity-50"
        >
          {isPending ? "Enviando registro..." : "Completar Inscripción"}
        </button>
      </form>

      {/* MODAL FULL-SCREEN PARA CATEGORÍAS Y DISCIPLINAS */}
      {isModalOpen && (
        <div className="fixed inset-0 lg:px-[30dvw] lg:py-12 z-50 bg-white flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div>
            {/* Header del Modal */}
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-zinc-200">
              <div>
                <h3 className="text-xl font-bold text-dark">
                  Selecciona la Disciplina
                </h3>
                <p className="text-xs text-zinc-500">
                  Elige una categoría y luego tu disciplina
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="hover:cursor-pointer text-zinc-500 hover:text-dark text-lg font-medium px-2 py-1"
              >
                X
              </button>
            </div>

            {/* SELECCIÓN DE CATEGORÍA (Pestañas / Checkboxes) */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Selecciona una Categoría
              </label>
              <div className="grid grid-cols-3 gap-2">
                {CATEGORIAS_KEYS.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoriaChange(cat)}
                    className={`hover:cursor-pointer  py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all text-center ${
                      selectedCategoria === cat
                        ? "border-dark bg-dark text-white shadow-sm"
                        : "border-zinc-300 bg-transparent text-dark hover:bg-zinc-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Opciones de Disciplinas según la Categoría Seleccionada */}
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                Elige la Disciplina ({selectedCategoria})
              </label>
              <div className="flex flex-col gap-2.5">
                {CATEGORIAS_DISCIPLINAS[selectedCategoria]?.map((item) => (
                  <label
                    key={item}
                    onClick={() => setTempDisciplina(item)}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      tempDisciplina === item
                        ? "border-dark bg-dark font-semibold text-white"
                        : "border-zinc-200 text-dark"
                    }`}
                  >
                    <span>{item}</span>
                    <input
                      type="radio"
                      name="modalDisciplina"
                      checked={tempDisciplina === item}
                      onChange={() => setTempDisciplina(item)}
                      className="accent-dark w-4 h-4"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de Confirmación abajo del todo */}
          <div className="pt-6 mt-6 border-t border-zinc-200 sticky bottom-0 bg-white">
            <button
              type="button"
              onClick={confirmDisciplina}
              className="hover:cursor-pointer  w-full py-3.5 px-4 bg-dark hover:bg-zinc-800 text-white font-semibold rounded-xl transition-all"
            >
              Confirmar selección
            </button>
          </div>
        </div>
      )}
    </div>
  );
}