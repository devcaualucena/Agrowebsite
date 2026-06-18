/* Página de contato. Formulário local (sem backend). */
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { site } from "@/config/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: `Contato — ${site.name}` },
      { name: "description", content: "Entre em contato com nossa equipe para solicitar orçamentos e tirar dúvidas." },
      { property: "og:title", content: `Contato — ${site.name}` },
      { property: "og:description", content: "Fale com nossos especialistas." },
    ],
  }),
  component: Contact,
});

const contactInfo = [
  { icon: MapPin, title: "Endereço", lines: [site.contact.addressLine, site.contact.addressCity] },
  { icon: Mail, title: "E-mail", lines: [site.contact.emailPrimary, site.contact.emailSecondary] },
  { icon: Phone, title: "Telefone", lines: [site.contact.phonePrimary, site.contact.phoneSecondary] },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simula envio. Para integrar com e-mail real, conecte Lovable Cloud
    // e crie uma server function que dispare o e-mail.
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setOk(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setOk(false), 4000);
  };

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-ink py-20 text-ink-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-black tracking-tight md:text-6xl">Entre em Contato</h1>
          <p className="max-w-2xl text-white/80 md:text-lg">
            Estamos prontos para atender você. Envie sua mensagem ou use nossos canais diretos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-ink">Informações</h2>
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <info.icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-ink">{info.title}</h3>
                  {info.lines.map((l) => (
                    <p key={l} className="text-muted-foreground">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-4 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-2xl font-black text-ink">Envie uma mensagem</h2>
            <input
              name="name" required value={form.name} onChange={change}
              placeholder="Nome completo"
              className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-brand"
            />
            <input
              name="email" type="email" required value={form.email} onChange={change}
              placeholder="E-mail"
              className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-brand"
            />
            <input
              name="phone" value={form.phone} onChange={change}
              placeholder="Telefone"
              className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-brand"
            />
            <textarea
              name="message" required rows={5} value={form.message} onChange={change}
              placeholder="Como podemos ajudar?"
              className="w-full rounded-lg border border-border px-4 py-3 outline-none focus:border-brand"
            />
            <button
              type="submit" disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition hover:bg-brand-dark disabled:opacity-50"
            >
              {sending ? "Enviando..." : (<>Enviar <Send size={16} /></>)}
            </button>
            {ok && (
              <div className="flex items-center gap-2 rounded-lg bg-brand/10 px-4 py-3 text-sm text-brand-dark">
                <CheckCircle size={18} /> Mensagem enviada! Entraremos em contato em breve.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}