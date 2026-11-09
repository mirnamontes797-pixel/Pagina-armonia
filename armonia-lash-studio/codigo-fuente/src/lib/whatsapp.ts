// Mirna's WhatsApp (Ciudad Juárez, México). Country code 52 is required by wa.me.
export const WHATSAPP_NUMBER = "526562035427";
export const WHATSAPP_DISPLAY = "656 203 5427";

export const DEFAULT_WHATSAPP_MESSAGE =
  "¡Hola Mirna! Vi tu página de Armonía Lash Studio y me gustaría agendar una cita.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
