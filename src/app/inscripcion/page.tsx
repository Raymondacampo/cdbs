// src/app/inscripcion/page.tsx
"use client";

import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import { FormState } from "@/app/actions/register";
import SuccessMessage from "./components/SuccessPage";

export default function InscripcionPage() {
  const [formResult, setFormResult] = useState<FormState | null>(null);

  return (
    <div className="py-10 px-4">
      {formResult?.success ? (
        <SuccessMessage 
          message={formResult.message} 
          onReset={() => setFormResult(null)} 
        />
      ) : (
        <RegistrationForm onSuccess={(state) => setFormResult(state)} />
      )}
    </div>
  );
}