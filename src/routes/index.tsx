/* Home / Landing — Nature Gear */
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Wrench, Shield, Clock, Award, Users } from "lucide-react";
import { site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — ${site.tagline}` },
      { property: "og:description", content: site.description },
      { property: "og:image", content: site.images.heroBackground },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Truck, title: "Frota Completa", desc: "Mais de 150 equipamentos de marcas premium." },
  { icon: Wrench, title: "Manutenção", desc: "Equipe técnica especializada e suporte 24/7." },
  { icon: Shield, title: "Segurança", desc: "Certificações e protocolos rigorosos." },
  { icon: Clock, title: "Pontualidade", desc: "Entregas no prazo, sem surpresas." },
  { icon: Award, title: "Qualidade", desc: "Mais de 15 anos liderando o setor." },
  { icon: Users, title: "Atendimento", desc: "Consultores dedicados a cada projeto." },
];

function Home() {
  return (
    <div className="bg-surface">
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        {/* imagem de fundo */}
        <div className="absolute inset-0">
          <img src={site.images.heroBackground} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-24 sm:px-6 md:py-32 lg:flex-row lg:px-8 lg:py-40">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-brand/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              {site.name}
            </span>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {site.tagline}
            </h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl">{site.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/catalogo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition hover:bg-brand-dark"
              >
                Ver Catálogo <ArrowRight size={18} />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* Trator flutuante */}
          <div className="relative w-full max-w-md lg:max-w-xl">
            <img
              src={site.images.heroForeground}
              alt="Maquinário pesado"
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <section className="relative z-10 -mt-10 bg-white py-10 shadow-lg md:mx-8 md:rounded-2xl">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mb-1 text-3xl font-black text-brand md:text-5xl">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── POR QUE NOS ESCOLHER ───────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-black text-ink md:text-5xl">Por que nos escolher</h2>
            <p className="text-muted-foreground">
              Combinamos equipamentos de ponta, equipe experiente e atendimento próximo
              para entregar resultados em qualquer escala.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-white p-8 transition hover:border-brand hover:shadow-xl"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                  <f.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="bg-brand py-16 text-brand-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black md:text-4xl">Pronto para começar seu projeto?</h2>
          <p className="max-w-2xl opacity-90">
            Fale com um especialista e receba uma proposta sob medida em até 24 horas.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-8 py-4 font-semibold text-ink-foreground transition hover:bg-ink/80"
          >
            Solicitar Orçamento <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
