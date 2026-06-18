/* Rodapé global. Conteúdo vem de src/config/site.ts */
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Empresa */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <img src={site.images.logo} alt={site.name} className="h-10 w-10" />
            <span className="text-xl font-bold">{site.name}</span>
          </div>
          <p className="mb-4 text-sm text-white/70">{site.description}</p>
          <div className="flex gap-4 text-white/70">
            <a href={site.social.facebook} className="hover:text-brand"><Facebook size={20} /></a>
            <a href={site.social.instagram} className="hover:text-brand"><Instagram size={20} /></a>
            <a href={site.social.linkedin} className="hover:text-brand"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-brand">Links Rápidos</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {site.nav.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-white">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-brand">Contato</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-brand" /><span>{site.contact.addressLine}<br />{site.contact.addressCity}</span></li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 text-brand" />{site.contact.phonePrimary}</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 text-brand" />{site.contact.emailPrimary}</li>
          </ul>
        </div>

        {/* Horário */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-brand">Atendimento</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex gap-2"><Clock size={16} className="mt-0.5 text-brand" />{site.contact.hours}</li>
            <li>Suporte técnico 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}