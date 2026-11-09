import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Feather, Heart, ShieldCheck, Sparkles, MapPin, Instagram, Facebook } from "lucide-react";

import heroImg from "@/assets/hero-pestanas.jpg";
import portadaAsset from "@/assets/armonia-lash-portada.jpg.asset.json";
import trabajo1 from "@/assets/pestanas-trabajo-1.jpg.asset.json";
import trabajo2 from "@/assets/pestanas-trabajo-2.jpg.asset.json";
import trabajo3 from "@/assets/pestanas-trabajo-3.jpg.asset.json";
import trabajo4 from "@/assets/pestanas-trabajo-4.jpg.asset.json";
import trabajo5 from "@/assets/pestanas-trabajo-5.jpg.asset.json";
import trabajo6 from "@/assets/pestanas-trabajo-6.jpg.asset.json";
import trabajo7 from "@/assets/pestanas-trabajo-7.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";

const TITLE = "Armonía Lash Studio by Mirna Montes · Pestañas en Ciudad Juárez";
const DESCRIPTION =
  "Extensiones de pestañas clásicas, volumen 4D·5D·6D y diseño personalizado en Ciudad Juárez. Agenda tu cita por WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Armonía Lash Studio by Mirna Montes",
          telephone: "+52 656 203 5427",
          address: { "@type": "PostalAddress", addressLocality: "Ciudad Juárez", addressCountry: "MX" },
        }),
      },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Sparkles, title: "Looks naturales o voluminosos", text: "Diseñados a tu estilo y a la forma de tu ojo." },
  { icon: Feather, title: "Ligeras y cómodas", text: "Extensiones de larga duración que casi no sientes." },
  { icon: ShieldCheck, title: "Técnicas seguras", text: "Aplicación cuidadosa y personalizada en cada pestaña." },
  { icon: Heart, title: "Atención personalizada", text: "Cada cita es atendida directamente por Mirna Montes." },
];

const services = [
  {
    name: "Clásicas",
    tag: "1 a 1",
    text: "Una extensión por pestaña natural. Mirada definida, elegante y muy natural.",
  },
  {
    name: "Volumen",
    tag: "4D · 5D · 6D",
    text: "Abanicos ultraligeros para una mirada intensa, llena y con mucho glamour.",
  },
  {
    name: "Diseño personalizado",
    tag: "A tu medida",
    text: "Estudiamos tus facciones para crear el diseño que armoniza con tu mirada.",
  },
];

const works = [
  { src: trabajo3.url, span: "row-span-2", w: 661, h: 1400, alt: "Clienta con extensiones de pestañas en ambos ojos" },
  { src: trabajo4.url, w: 1000, h: 1153, alt: "Acercamiento a extensiones de pestañas de volumen" },
  { src: trabajo7.url, span: "md:row-span-2", w: 842, h: 1400, alt: "Extensiones de pestañas en ojo verde" },
  { src: trabajo2.url, w: 1000, h: 1333, alt: "Pestañas de volumen recién aplicadas por Mirna Montes" },
  { src: trabajo1.url, w: 1000, h: 1100, alt: "Extensiones de pestañas de volumen, vista lateral" },
  { src: trabajo5.url, w: 1000, h: 1333, alt: "Extensiones de pestañas con efecto natural y ligero" },
  { src: trabajo6.url, w: 1000, h: 939, alt: "Detalle de abanicos de volumen en pestañas" },
];

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#mirna", label: "Sobre Mirna" },
  { href: "#citas", label: "Citas" },
];

function WhatsAppButton({
  children,
  message,
  size = "xl",
  variant = "whatsapp",
}: {
  children: ReactNode;
  message?: string;
  size?: "xl" | "lg" | "default";
  variant?: "whatsapp" | "gold" | "goldOutline";
}) {
  return (
    <Button asChild variant={variant} size={size}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {children}
      </a>
    </Button>
  );
}

function SectionTitle({ eyebrow, title, script }: { eyebrow: string; title: string; script?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">{title}</h2>
      {script && <p className="mt-2 font-script text-3xl text-gold md:text-4xl">{script}</p>}
      <div className="mx-auto mt-6 h-px w-24 bg-gold" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href="#inicio" className="flex items-baseline gap-2 leading-none">
            <span className="font-display text-2xl tracking-[0.2em] text-gold md:text-3xl">ARMONÍA</span>
            <span className="font-script text-xl text-primary md:text-2xl">Lash Studio</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton size="default" variant="gold">
            <span className="hidden sm:inline">Agendar</span>
            <span className="sm:hidden">Cita</span>
          </WhatsAppButton>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[92vh] items-center pt-20">
        <img
          src={heroImg}
          alt="Extensiones de pestañas de volumen aplicadas por Armonía Lash Studio"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full -scale-x-100 object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-bottom-fade" />

        <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-xl animate-fade-up">
            <p className="eyebrow">Extensiones de pestañas · Ciudad Juárez</p>
            <h1 className="mt-6 font-display text-5xl font-light leading-[1.05] md:text-7xl">
              Pestañas diseñadas para <em className="text-gold not-italic">armonizar</em> tu mirada
            </h1>
            <p className="mt-5 font-script text-3xl text-primary-glow md:text-4xl">
              Resalta tu mirada, expresa tu esencia.
            </p>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted-foreground">
              Clásicas, volumen 4D·5D·6D y diseño personalizado por Mirna Montes. Ligeras, cómodas
              y de larga duración.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <WhatsAppButton>Agenda por WhatsApp</WhatsAppButton>
              <Button asChild variant="goldOutline" size="xl">
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative border-y border-border/60 bg-card/60">
        <div className="mx-auto grid max-w-7xl gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="bg-background px-8 py-10">
              <b.icon className="size-7 text-primary" strokeWidth={1.2} />
              <h3 className="mt-5 font-display text-2xl">{b.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
        <SectionTitle eyebrow="Especialistas en extensiones" title="Nuestros servicios" script="a tu estilo" />
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.name}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold"
            >
              <span className="font-display text-5xl font-light text-primary/30">0{i + 1}</span>
              <p className="eyebrow mt-6">{s.tag}</p>
              <h3 className="mt-2 font-display text-3xl">{s.name}</h3>
              <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-muted-foreground">{s.text}</p>
              <a
                href={whatsappLink(`¡Hola Mirna! Me interesa el servicio de pestañas ${s.name}. ¿Me das información y precio?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary transition-colors hover:text-primary-glow"
              >
                <WhatsAppIcon className="size-4" />
                Consultar precio
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Work gallery */}
      <section id="trabajos" className="scroll-mt-20 bg-card/50 px-5 py-24 md:px-8 md:py-32">
        <SectionTitle eyebrow="Resultados reales" title="Nuestro trabajo" script="mirada con esencia" />
        <div className="mx-auto mt-16 grid max-w-6xl grid-flow-dense auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[260px] md:grid-cols-3 md:auto-rows-[300px] md:gap-6">
          {works.map((work) => (
            <figure
              key={work.src}
              className={`overflow-hidden rounded-2xl border border-border ${"span" in work ? work.span : ""}`}
            >
              <img
                src={work.src}
                alt={work.alt}
                loading="lazy"
                width={work.w}
                height={work.h}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
        <div className="mt-12 text-center">
          <WhatsAppButton message="¡Hola Mirna! Vi tus trabajos y quiero un look así. ¿Tienes disponibilidad?">
            Quiero este look
          </WhatsAppButton>
        </div>
      </section>

      {/* About Mirna */}
      <section id="mirna" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-gold">
            <img
              src={portadaAsset.url}
              alt="Mirna Montes, lash artist de Armonía Lash Studio"
              loading="lazy"
              width={960}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Sobre mí</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
              Hola, soy <span className="text-gold">Mirna Montes</span>
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
              En Armonía Lash Studio creo pestañas pensadas para ti: cada diseño busca equilibrar tus
              facciones y resaltar tu belleza natural. Trabajo con técnicas seguras y materiales ligeros
              para que luzcas una mirada increíble, cómoda y duradera.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
              Desde un look natural para el día a día hasta un volumen lleno de glamour, aquí encontrarás
              el estilo que expresa tu esencia.
            </p>
            <p className="mt-6 font-script text-4xl text-gold">Mirna Montes</p>
          </div>
        </div>
      </section>

      {/* Booking steps */}
      <section id="citas" className="scroll-mt-20 bg-blush px-5 py-24 text-center text-blush-foreground md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow">Reserva tu lugar</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
            Aparta tu cita en 3 pasos
          </h2>
          <ol className="mt-14 grid gap-10 font-light md:grid-cols-3">
            {[
              "Escríbeme por WhatsApp y elige tu servicio.",
              "Confirmamos fecha y horario disponible.",
              "Envía tu anticipo y ¡listo!",
            ].map((step, i) => (
              <li key={step} className="flex flex-col items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-full bg-gold font-display text-2xl text-primary-foreground shadow-gold">
                  {i + 1}
                </span>
                <span className="max-w-60 text-lg">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex justify-center">
            <WhatsAppButton>Agendar mi cita</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-5 py-28 text-center md:px-8">
        <p className="font-script text-4xl text-gold md:text-5xl">Tu mirada, en armonía</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-light leading-tight md:text-6xl">
          ¿Lista para resaltar tu mirada?
        </h2>
        <p className="mx-auto mt-6 max-w-md font-light text-muted-foreground">
          Escríbeme directo por WhatsApp al <span className="text-primary">{WHATSAPP_DISPLAY}</span> y con
          gusto te atiendo.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton>Escribir por WhatsApp</WhatsAppButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 px-5 py-12 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl tracking-[0.2em] text-gold">ARMONÍA</span>
            <span className="font-script text-lg text-primary">Lash Studio by Mirna Montes</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" strokeWidth={1.5} /> Ciudad Juárez, Chih.
            </span>
            <a
              href="https://www.instagram.com/lash_armonia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Instagram className="size-4" strokeWidth={1.5} /> lash_armonia
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086728576751"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Facebook className="size-4" strokeWidth={1.5} /> Facebook
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Armonía Lash Studio by Mirna Montes
        </p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp animate-wa-pulse transition-transform hover:scale-110 md:bottom-8 md:right-8 md:size-16"
      >
        <WhatsAppIcon className="size-7 md:size-8" />
      </a>
    </div>
  );
}
