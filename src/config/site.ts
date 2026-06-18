/* ============================================================================
 * CONFIGURAÇÃO CENTRAL DO SITE — Nature Gear
 * ----------------------------------------------------------------------------
 * Tudo que muda com frequência (nome da empresa, telefones, e-mails,
 * imagens do hero, lista de produtos do catálogo, serviços, marcos da
 * história, etc.) vive AQUI. Altere apenas este arquivo para atualizar
 * o conteúdo do site inteiro.
 *
 * Para mudar CORES → edite src/styles.css (bloco "BRAND COLORS").
 * ============================================================================ */

import logo from "@/assets/nature-gear.png.asset.json";
import tratorImg from "@/assets/trator.png.asset.json";
import wheatField from "@/assets/wheat-field.jpg.asset.json";

// Imagens da área de serviços — troque aqui para trocar as fotos
import imgFleet from "@/assets/service-fleet.jpg.asset.json";
import imgLogistics from "@/assets/service-logistics.jpg.asset.json";
import imgEarthmoving from "@/assets/service-earthmoving.jpg.asset.json";

// Imagens dos equipamentos (já existentes em src/assets).
import excavatorCat from "@/assets/equipment-excavator-cat.jpg";
import excavatorKomatsu from "@/assets/equipment-excavator-komatsu.jpg";
import loaderJd from "@/assets/equipment-loader-jd.jpg";
import loaderBobcat from "@/assets/equipment-loader-bobcat.jpg";
import truckVolvo from "@/assets/equipment-truck-volvo.jpg";
import truckMb from "@/assets/equipment-truck-mb.jpg";
import tractorMf from "@/assets/equipment-tractor-mf.jpg";
import tractorNh from "@/assets/equipment-tractor-nh.jpg";
import craneLiebherr from "@/assets/equipment-crane-liebherr.jpg";

export const site = {
  // ─── Identidade ────────────────────────────────────────────────────────────
  name: "Nature Gear",
  tagline: "Soluções em Maquinário Pesado e Logística",
  description:
    "Equipamentos de alta performance para construção, mineração e logística. Aluguel, venda e serviços especializados.",

  // ─── Imagens principais ────────────────────────────────────────────────────
  // Troque aqui para mudar a logo / hero / mascote.
  images: {
    logo: logo.url,
    heroBackground: wheatField.url,
    heroForeground: tratorImg.url, // imagem do trator que flutua no hero
  },

  // ─── Contato ───────────────────────────────────────────────────────────────
  contact: {
    phonePrimary: "+55 11 9999-9999",
    phoneSecondary: "+55 11 8888-8888",
    emailPrimary: "contato@naturegear.com",
    emailSecondary: "vendas@naturegear.com",
    addressLine: "Av. Industrial, 1000",
    addressCity: "São Paulo - SP, 01234-567",
    hours: "Seg–Sex: 8h às 18h",
  },

  // ─── Redes sociais ─────────────────────────────────────────────────────────
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },

  // ─── Navegação principal ───────────────────────────────────────────────────
  nav: [
    { name: "Home", path: "/" },
    { name: "Catálogo", path: "/catalogo" },
    { name: "Serviços", path: "/servicos" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ],

  // ─── Estatísticas da home ──────────────────────────────────────────────────
  stats: [
    { value: "500+", label: "Projetos Completados" },
    { value: "150+", label: "Equipamentos" },
    { value: "15+", label: "Anos de Mercado" },
    { value: "24/7", label: "Suporte Técnico" },
  ],
} as const;

// ─── Catálogo de produtos ────────────────────────────────────────────────────
export const categories = [
  { id: "all", name: "Todos" },
  { id: "escavadeiras", name: "Escavadeiras" },
  { id: "carregadeiras", name: "Carregadeiras" },
  { id: "caminhoes", name: "Caminhões" },
  { id: "tratores", name: "Tratores" },
  { id: "guindastes", name: "Guindastes" },
] as const;

export const products = [
  { id: 1, name: "Escavadeira CAT 320", category: "escavadeiras", image: excavatorCat, description: "Escavadeira hidráulica de 20 toneladas." },
  { id: 2, name: "Escavadeira Komatsu PC200", category: "escavadeiras", image: excavatorKomatsu, description: "Alta performance para terraplanagem." },
  { id: 3, name: "Carregadeira John Deere 644", category: "carregadeiras", image: loaderJd, description: "Pá carregadeira de grande capacidade." },
  { id: 4, name: "Carregadeira Bobcat S650", category: "carregadeiras", image: loaderBobcat, description: "Mini carregadeira ágil." },
  { id: 5, name: "Caminhão Volvo FMX", category: "caminhoes", image: truckVolvo, description: "Basculante para transporte off-road." },
  { id: 6, name: "Caminhão Mercedes Axor", category: "caminhoes", image: truckMb, description: "Versátil para cargas pesadas." },
  { id: 7, name: "Trator Massey Ferguson 7180", category: "tratores", image: tractorMf, description: "Trator agrícola de alta potência." },
  { id: 8, name: "Trator New Holland T7", category: "tratores", image: tractorNh, description: "Conforto e tecnologia no campo." },
  { id: 9, name: "Guindaste Liebherr LTM", category: "guindastes", image: craneLiebherr, description: "Guindaste móvel de grande alcance." },
] as const;

// ─── Serviços ────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    title: "Locação de Frotas",
    subtitle: "Frota completa para todos os tipos de projetos",
    description:
      "Oferecemos uma frota diversificada de maquinário pesado disponível para aluguel diário, semanal ou mensal. Equipamentos de última geração com manutenção rigorosa.",
    image: imgFleet.url,
    benefits: [
      "Mais de 150 equipamentos disponíveis",
      "Flexibilidade de período (diário, semanal, mensal)",
      "Entrega em todo o território nacional",
      "Suporte técnico 24/7 incluso",
      "Marcas premium (CAT, John Deere, Komatsu)",
      "Manutenção preventiva garantida",
    ],
  },
  {
    id: 2,
    title: "Logística de Carga Pesada",
    subtitle: "Transporte especializado para grandes desafios",
    description:
      "Soluções completas de transporte para equipamentos pesados e cargas de grande porte com frota e equipe especializada.",
    image: imgLogistics.url,
    benefits: [
      "Cargas de até 100 toneladas",
      "Rastreamento em tempo real",
      "Seguro completo de carga",
      "Equipe especializada em carga e descarga",
      "Licenciamento e documentação inclusos",
      "Entrega pontual garantida",
    ],
  },
  {
    id: 3,
    title: "Engenharia e Movimentação de Terra",
    subtitle: "Soluções completas para terraplanagem",
    description:
      "Serviços especializados de engenharia civil e movimentação de terra para obras de grande porte, com equipe técnica experiente.",
    image: imgEarthmoving.url,
    benefits: [
      "Projetos de terraplanagem completos",
      "Escavação e nivelamento de precisão",
      "Equipe de engenheiros e topógrafos",
      "Equipamentos modernos para qualquer terreno",
      "Cumprimento rigoroso de prazos",
      "Segurança em todas as etapas",
    ],
  },
] as const;

// ─── Linha do tempo (Sobre) ──────────────────────────────────────────────────
export const milestones = [
  { year: "2010", title: "Fundação", description: "Início das operações com 5 equipamentos e a visão de transformar o mercado." },
  { year: "2015", title: "Expansão Nacional", description: "Abertura de filiais em SP e RJ. Frota de 50 equipamentos e certificação ISO 9001." },
  { year: "2020", title: "Transformação Digital", description: "Sistema de gestão digital e frota expandida para 100 equipamentos." },
  { year: "2026", title: "Liderança Consolidada", description: "Mais de 150 equipamentos e parcerias com Scania, John Deere e Komatsu." },
] as const;

export const companyValues = [
  { title: "Missão", content: "Fornecer soluções de maquinário pesado e logística que impulsionem o sucesso de nossos clientes." },
  { title: "Visão", content: "Ser referência nacional em soluções de maquinário pesado, com inovação e sustentabilidade." },
  { title: "Valores", content: "Excelência, integridade, segurança e inovação em todas as nossas operações." },
] as const;