"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitRegistration(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const target = formData.get("target") as string; // "self" | "child"
  const isChild = target === "child";

  const nombre = formData.get("nombre") as string;
  const dia = formData.get("dia") as string;
  const mes = formData.get("mes") as string;
  const ano = formData.get("ano") as string;
  const genero = formData.get("genero") as string;
  const disciplina = formData.get("disciplina") as string;
  const direccion = formData.get("direccion") as string;
  const cedula = formData.get("cedula") as string;
  const email = formData.get("email") as string;
  const telefono = formData.get("telefono") as string;
  const empresaUniversidad = formData.get("empresaUniversidad") as string;

  if (!nombre || !email || !telefono || !disciplina || !dia || !mes || !ano) {
    return {
      success: false,
      message: "Por favor completa todos los campos obligatorios.",
    };
  }

  const fechaNacimiento = `${dia}/${mes}/${ano}`;

  try {
    const { error } = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: [process.env.DESTINATION_EMAIL || "tu_correo@dominio.com"],
      subject: `Nueva Inscripción (${isChild ? "Hijo/a" : "Personal"}): ${nombre}`,
      html: `
        <h2>Nueva Inscripción Registrada</h2>
        <p><strong>Tipo de Inscripción:</strong> ${isChild ? "Para mi hijo/a" : "Para mí"}</p>
        <hr />
        <h3>Datos del Participante ${isChild ? "(Hijo/a)" : "(Titular)"}</h3>
        <p><strong>Nombre completo:</strong> ${nombre}</p>
        <p><strong>Fecha de nacimiento:</strong> ${fechaNacimiento}</p>
        <p><strong>Género:</strong> ${genero || "No especificado"}</p>
        <p><strong>Disciplina seleccionada:</strong> ${disciplina}</p>
        <p><strong>Dirección:</strong> ${direccion || "No especificada"}</p>
        <p><strong>Universidad / Empresa:</strong> ${empresaUniversidad || "No especificada"}</p>
        <hr />
        <h3>Datos del ${isChild ? "Padre / Tutor" : "Contacto Directo"}</h3>
        ${isChild ? `<p><strong>Cédula del Padre:</strong> ${cedula || "No provista"}</p>` : ""}
        <p><strong>Correo electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
      `,
    });

    if (error) {
      return {
        success: false,
        message: "Ocurrió un error al procesar el envío. Intenta nuevamente.",
      };
    }

    return {
      success: true,
      message: "¡Inscripción enviada exitosamente!",
    };
  } catch (err) {
    return {
      success: false,
      message: "Error de servidor al procesar la inscripción.",
    };
  }
}