/* Catálogo de equipamentos. Edite produtos em src/config/site.ts */
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowRight } from "lucide-react";
import { products, categories, site } from "@/config/site";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: `Catálogo — ${site.name}` },
      { name: "description", content: "Catálogo completo de escavadeiras, carregadeiras, caminhões, tratores e guindastes para locação e venda." },
      { property: "og:title", content: `Catálogo — ${site.name}` },
      { property: "og:description", content: "Equipamentos pesados para construção, mineração e logística." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState<string>("all");

  const filtered = products.filter(
    (p) =>
      (cat === "all" || p.category === cat) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-surface min-h-screen">
      {/* Header */}
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-black tracking-tight md:text-6xl">Catálogo</h1>
          <p className="max-w-2xl text-white/80 md:text-lg">
            Explore nossa frota completa de maquinário pesado. Todos os equipamentos
            disponíveis para locação e venda.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="border-b border-border bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar equipamento..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  cat === c.id
                    ? "bg-brand text-brand-foreground"
                    : "bg-surface text-ink hover:bg-border"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground">Nenhum equipamento encontrado.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {categories.find((c) => c.id === p.category)?.name}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-ink">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    <Link
                      to="/contato"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
                    >
                      Solicitar cotação <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}