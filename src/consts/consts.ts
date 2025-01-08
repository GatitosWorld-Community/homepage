import Battery from "@/icons/Battery.astro";
import Events from "@/icons/Events.astro";
import Secure from "@/icons/Secure.astro";
import Logs from "@/icons/Logs.astro";
import Podcast from "@/icons/Podcast.astro";
import Starts from "@/icons/Starts.astro";

interface CardCommunity {
  Icon: any;
  label: string;
  content: string;
  color: string;
}

interface CardGuide {
  Icon: any;
  label: string;
  content: string;
  color: string;
  url: string;
}

export const cardsGuide: CardGuide[] = [
  {
    Icon: Logs,
    label: "Reglas",
    color: "emerald",
    content: "Descubre las reglas que rigen nuestra comunidad.",
    url: "/guide/rules"
  },
  {
    Icon: Logs,
    label: "Canales",
    color: "purple",
    content: "Nuestra lista completa de canales, de texto y voz, y sus funciones.",
    url: "/guide/channels"
  },
  {
    Icon: Logs,
    label: "Mecánicas",
    color: "purple",
    content: "¿Sabías que nuestro servidor tiene sistemas únicos en la plataforma?",
    url: "/guide/features"
  },
  {
    Icon: Logs,
    label: "Niveles",
    color: "cyan",
    content: "¿Quieres saber cómo recompensamos a nuestros usuarios más activos?",
    url: "/guide/levels"
  },
  {
    Icon: Logs,
    label: "VIP",
    color: "yellow",
    content: "Nuestros rangos VIP, accesibles por todos. Incluso sin pagar.",
    url: "/guide/vip"
  },
  {
    Icon: Logs,
    label: "Moderación",
    color: "cyan",
    content: "Conoce el trabajo de nuestros voluntarios moderadores, que vigilan la comunidad.",
    url: "/guide/mod"
  }
]

export const cardsCommunity: CardCommunity[] = [
  {
    Icon: Battery,
    label: "Calidad",
    color: "cyan",
    content:
      "Trabajamos continuamente para garantizar que nuestra comunidad sea un lugar de alta calidad, ideal para socializar y hacer amigos. 🌟",
  },
  {
    Icon: Events,
    label: "Eventos",
    color: "emerald",
    content:
      "Organizamos eventos únicos para celebrar diversas temáticas y ocasiones especiales. ¡No te los pierdas! 🎉",
  },
  {
    Icon: Secure,
    label: "Soporte",
    color: "yellow",
    content:
      "Nuestro equipo de soporte siempre está dispuesto a ayudarte con cualquier problema o duda que tengas en el servidor. 🤝",
  },
  {
    Icon: Logs,
    label: "Documentación",
    color: "purple",
    content:
      "Accede a guías, normativas y recursos personalizados que te ayudarán a aprovechar al máximo nuestra comunidad mientras evitas inconvenientes. 📚",
  },
  {
    Icon: Starts,
    label: "Roles",
    color: "orange",
    content:
      "Gana roles al subir de nivel, mantente al día con notificaciones del servidor y canjea monedas de pachinko por roles. 🏆",
  },
  {
    Icon: Podcast,
    label: "Podcasts",
    color: "teal",
    content:
      "Participar en los eventos de podcast, donde hablamos sobre temas interesantes y ¡anécdotas inolvidables! 🎙️",
  },
];
