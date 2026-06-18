/* Página de serviços. Edite a lista em src/config/site.ts (export `services`). */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { services, site } from "@/config/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: `Serviços — ${site.name}` },
      { name: "description", content: "Locação de frotas, logística de carga pesada e engenharia para movimentação de terra." },
      { property: "og:title", content: `Serviços — ${site.name}` },
      { property: "og:description", content: "Soluções completas em maquinário pesado." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-black tracking-tight md:text-6xl">Serviços</h1>
          <p className="max-w-2xl text-white/80 md:text-lg">
            Soluções integradas que atendem desde pequenas obras até grandes projetos
            de infraestrutura.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand/20 to-brand/5">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  Serviço 0{s.id}
                </span>
                <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">{s.title}</h2>
                <p className="mt-2 text-lg text-muted-foreground">{s.subtitle}</p>
                <p className="mt-4 text-muted-foreground">{s.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink">
                      <Check size={18} className="mt-0.5 flex-shrink-0 text-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contato"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition hover:bg-brand-dark"
                >
                  Solicitar este serviço <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}