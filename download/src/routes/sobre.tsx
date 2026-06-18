/* Página Sobre. Edite marcos/valores em src/config/site.ts */
import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { milestones, companyValues, site } from "@/config/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: `Sobre Nós — ${site.name}` },
      { name: "description", content: `Conheça a história, missão e valores da ${site.name}.` },
      { property: "og:title", content: `Sobre Nós — ${site.name}` },
      { property: "og:description", content: `Conheça a história, missão e valores da ${site.name}.` },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Manifesto */}
      <section className="bg-ink py-24 text-ink-foreground md:py-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-10 text-5xl font-black tracking-tight md:text-7xl">NOSSA HISTÓRIA</h1>
          <div className="max-w-3xl space-y-6 text-lg text-white/80 md:text-xl">
            <p>
              Nascemos da visão de transformar o mercado de maquinário pesado,
              construindo uma trajetória pautada pela excelência e inovação.
            </p>
            <p>
              Ao longo de mais de uma década, consolidamos nossa posição como líderes
              em soluções integradas para construção, mineração e logística — sempre
              com compromisso inabalável com qualidade e segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {companyValues.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border p-8">
              <h2 className="mb-4 text-2xl font-black text-brand">{v.title}</h2>
              <p className="text-muted-foreground">{v.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-14 text-center text-3xl font-black text-ink md:text-5xl">
            Linha do Tempo
          </h2>
          <div className="relative space-y-12 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-brand md:before:left-1/2">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative grid gap-6 md:grid-cols-2 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-brand ring-4 ring-surface md:left-1/2" />
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-4xl font-black text-brand">{m.year}</span>
                </div>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <h3 className="text-xl font-bold text-ink">{m.title}</h3>
                  <p className="mt-2 text-muted-foreground">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-16">
        <div className="mx-auto flex max-w-3xl items-start gap-4 px-4 sm:px-6 lg:px-8">
          <MapPin className="mt-1 flex-shrink-0 text-brand" />
          <div>
            <h3 className="font-bold text-ink">Sede</h3>
            <p className="text-muted-foreground">
              {site.contact.addressLine} — {site.contact.addressCity}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}