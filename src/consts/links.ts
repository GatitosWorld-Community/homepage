import Discord from "@/icons/Discord.astro";
import Instagram from "@/icons/Instagram.astro";
import Twitch from "@/icons/Twitch.astro";
import X from "@/icons/X.astro";
import Youtube from "@/icons/Youtube.astro";

interface LinksProps {
  Icon: any;
  link: string;
  label: string;
  content?: string;
  colorClass: string;
  iconClass?: string;
}

export const links: LinksProps[] = [
  {
    Icon: Twitch,
    link: "https://www.twitch.tv/capitangatoo",
    label: "Twitch",
    content: "CapitanGatoo",
    colorClass: "border-purple-500 bg-purple-500/10 hover:bg-purple-500 group",
    iconClass: "size-10 text-purple-500 group-hover:text-white",
  },
  {
    Icon: Youtube,
    link: "https://www.youtube.com/@CapitanGato",
    label: "Youtube (Primario)",
    content: "@CapitanGato",
    colorClass: "border-red-500 bg-red-500/10 hover:bg-red-500 group",
    iconClass: "size-10 text-red-500 group-hover:text-white",
  },
  {
    Icon: Youtube,
    link: "https://www.youtube.com/channel/UC-ycKaSWLlnzKZTrPcYUMiA",
    label: "Youtube (Secundario)",
    content: "Gato Capitán",
    colorClass: "border-red-500 bg-red-500/10 hover:bg-red-500 group",
    iconClass: "size-10 text-red-500 group-hover:text-white",
  },
  {
    Icon: Instagram,
    link: "https://www.instagram.com/capitangatoyt",
    label: "Instagram",
    content: "capitangatoyt",
    colorClass: "border-pink-500 bg-pink-500/10 hover:bg-pink-500 group",
    iconClass: "size-10 text-pink-500 group-hover:text-white",
  },
  {
    Icon: X,
    link: "https://x.com/CapitanGatoYT",
    label: "X / Twitter",
    content: "@CapitanGatoYT",
    colorClass: "border-gray-500 bg-gray-500/10 hover:bg-gray-500 group",
    iconClass: "size-10 text-gray-500 group-hover:text-white",
  },
  {
    Icon: Discord,
    link: "https://discord.com/invite/gatitos",
    label: "Discord",
    content: "discord.gg/gatitos",
    colorClass: "border-blue-500 bg-blue-500/10 hover:bg-blue-500 group",
    iconClass: "size-10 text-blue-500 group-hover:text-white",
  },
];
