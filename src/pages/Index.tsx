import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Menu, Phone, MapPin, Star, Stethoscope, Scissors, ShoppingBag, PawPrint,
  Heart, Zap, Sparkles, ChevronRight, MessageCircle, Instagram, Facebook, Clock, X
} from "lucide-react";
import { useState } from "react";
import heroPets from "@/assets/hero-pets.jpg";
import prodRacao from "@/assets/prod-racao.png";
import prodBrinquedo from "@/assets/prod-brinquedo.png";
import prodAcessorio from "@/assets/prod-acessorio.png";
import prodHigiene from "@/assets/prod-higiene.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const WHATSAPP = "https://wa.me/5567996081588";
const waLink = (msg: string) => `https://wa.me/5567996081588?text=${encodeURIComponent(msg)}`;

const WA_MSGS = {
  hero: "Olá! Vim pelo site e gostaria de agendar um horário para meu pet 🐾",
  menu: "Olá! Quero agendar um atendimento na Cãotainer 🐾",
  contato: "Olá! Vim pelo site e gostaria de mais informações sobre a Cãotainer 🐾",
  ctaFinal: "Olá! Quero agendar uma visita para meu pet na Cãotainer 🐾",
  floating: "Olá! Vim pelo site da Cãotainer e quero falar com vocês 🐾",
  servico: (nome: string) => `Olá! Vim pelo site e tenho interesse no serviço: ${nome} 🐾`,
  produto: (nome: string) => `Olá! Vim pelo site e quero informações sobre: ${nome} 🐾`,
};

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Clínica", href: "#clinica" },
  { label: "Banho & Tosa", href: "#banho" },
  { label: "Contato", href: "#contato" },
];

const categorias = [
  { icon: Stethoscope, title: "Clínica Veterinária", desc: "Consultas, vacinas e exames", color: "primary" },
  { icon: Scissors, title: "Banho & Tosa", desc: "Higiene e estética com carinho", color: "secondary" },
  { icon: ShoppingBag, title: "Pet Shop", desc: "Rações, acessórios e brinquedos", color: "primary" },
  { icon: PawPrint, title: "Cuidados & Serviços", desc: "Atendimento completo para pets", color: "secondary" },
];

const diferenciais = [
  { icon: Heart, title: "Profissionais que amam animais", desc: "Equipe apaixonada e qualificada" },
  { icon: PawPrint, title: "Atendimento com carinho", desc: "Cada pet tratado como único" },
  { icon: Stethoscope, title: "Estrutura veterinária completa", desc: "Tudo que seu pet precisa" },
  { icon: Zap, title: "Atendimento rápido", desc: "Agilidade sem perder qualidade" },
];

const produtos = [
  { name: "Rações Premium", desc: "Nutrição completa para todas as fases", img: prodRacao, badge: "Top vendas", alt: "Saco de ração premium para cães e gatos" },
  { name: "Brinquedos", desc: "Diversão garantida para seu pet", img: prodBrinquedo, badge: "Novidade", alt: "Brinquedos coloridos para pets" },
  { name: "Acessórios", desc: "Coleiras, guias e muito mais", img: prodAcessorio, badge: "Estilo", alt: "Acessórios para cães e gatos" },
  { name: "Higiene", desc: "Shampoos, escovas e cuidados", img: prodHigiene, badge: "Cuidado", alt: "Produtos de higiene pet" },
];

const galeria = [g1, g2, g3, g4, g5, g6];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
        <div className="container flex items-center justify-between py-2 gap-3">
          <div className="flex items-center gap-2 truncate">
            <PawPrint className="w-4 h-4 text-secondary shrink-0" />
            <span className="truncate">Amor e cuidado para o seu pet — Campo Grande/MS</span>
          </div>
          <a href="tel:+5567996081588" className="hidden sm:flex items-center gap-1 hover:text-secondary transition-colors shrink-0">
            <Phone className="w-3.5 h-3.5" /> (67) 99608-1588
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between gap-4 py-3">
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <div className="w-11 h-11 rounded-2xl bg-hero grid place-items-center shadow-pop">
              <PawPrint className="w-5 h-5 text-secondary" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
                Cão<span className="text-primary">tainer</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-0.5">Petshop</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {nav.map(i => (
              <a key={i.label} href={i.href} className="px-3 py-2 rounded-full hover:bg-secondary/30 transition-colors">{i.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex h-11 px-5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-yellow">
              <a href={waLink(WA_MSGS.menu)} target="_blank" rel="noopener noreferrer">Agendar</a>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden rounded-full" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fade-in">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-background shadow-pop p-6 animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <span className="font-display font-extrabold text-xl">Menu</span>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setMenuOpen(false)} aria-label="Fechar">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-1">
              {nav.map(i => (
                <a key={i.label} href={i.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-2xl hover:bg-secondary/30 font-medium">{i.label}</a>
              ))}
            </nav>
            <Button asChild className="mt-6 w-full h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
              <a href={waLink(WA_MSGS.menu)} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a>
            </Button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section id="inicio" className="relative bg-soft overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 sm:py-16 lg:py-24 relative">
          <div className="relative z-10 text-center lg:text-left">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-5 px-4 py-2 rounded-full font-bold">
              🐾 Pet Shop · Clínica · Banho & Tosa
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] mb-5">
              Cão<span className="text-primary">tainer</span> Petshop — Clínica Veterinária, Banho e Tosa em Campo Grande 🐾
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
              Amor, cuidado e profissionais que realmente amam animais. Em Campo Grande/MS.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="h-14 px-7 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-pop text-base font-bold">
                <a href={waLink(WA_MSGS.hero)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" /> Agendar pelo WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-7 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base font-bold">
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-1.5"><Star className="w-4 h-4 text-secondary fill-secondary" /> Atendimento 5 estrelas</div>
              <div className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-primary fill-primary" /> +5 anos de carinho</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-sun rounded-full blur-3xl opacity-40 animate-float-slow" />
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-pop border-8 border-background">
              <img src={heroPets} alt="Cachorro e gato felizes na Cãotainer Petshop" className="w-full h-full object-cover" width={1024} height={1024} fetchPriority="high" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-background rounded-3xl p-3 sm:p-4 shadow-card flex items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-sun grid place-items-center">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm">Pets felizes</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">todos os dias</div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-secondary text-secondary-foreground rounded-3xl p-3 sm:p-4 shadow-yellow animate-wag">
              <div className="font-display font-black text-2xl sm:text-3xl leading-none">100%</div>
              <div className="text-[10px] sm:text-xs font-bold">amor pet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section id="servicos" className="container py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="outline" className="mb-3 border-primary text-primary rounded-full">Nossos serviços</Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">Tudo que seu pet <span className="text-primary">precisa</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {categorias.map((c, i) => {
            const isPrimary = c.color === "primary";
            return (
              <a
                key={c.title}
                href={waLink(WA_MSGS.servico(c.title))}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-[2rem] p-5 sm:p-7 shadow-card hover:shadow-pop transition-bouncy hover:-translate-y-2 overflow-hidden ${
                  isPrimary ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl grid place-items-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-bouncy ${
                  isPrimary ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                }`}>
                  <c.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black leading-tight">{c.title}</h3>
                <p className="text-sm opacity-90 mt-2">{c.desc}</p>
                <ChevronRight className="absolute bottom-5 right-5 w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>
            );
          })}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-muted/40 py-16 sm:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="mb-3 border-primary text-primary rounded-full">Diferenciais</Badge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">Por que somos a <span className="text-primary">escolha certa</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {diferenciais.map(d => (
              <div key={d.title} className="group bg-card border border-border rounded-[2rem] p-6 hover:border-primary hover:shadow-pop transition-bouncy text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-sun grid place-items-center mb-5 mx-auto sm:mx-0 group-hover:scale-110 group-hover:-rotate-6 transition-bouncy">
                  <d.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-black mb-2 leading-tight">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loja / Produtos */}
      <section id="banho" className="container py-16 sm:py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-3 rounded-full font-bold">🛍️ Pet Shop</Badge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">Produtos para o seu <span className="text-primary">pet</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {produtos.map((p, i) => (
            <div key={i} className="group bg-card rounded-[2rem] p-4 sm:p-5 shadow-card hover:shadow-pop transition-bouncy hover:-translate-y-1 flex flex-col">
              <div className="relative aspect-square rounded-2xl bg-soft mb-4 overflow-hidden grid place-items-center">
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground hover:bg-primary rounded-full font-bold z-10 text-[10px] sm:text-xs">{p.badge}</Badge>
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-bouncy"
                />
              </div>
              <h3 className="font-display font-black text-base sm:text-lg leading-tight">{p.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 mb-4 flex-1">{p.desc}</p>
              <Button asChild className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-bold">
                <a href={waLink(WA_MSGS.produto(p.name))} target="_blank" rel="noopener noreferrer">Comprar</a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="clinica" className="container py-10">
        <div className="relative rounded-[3rem] bg-hero p-8 sm:p-12 md:p-16 overflow-hidden shadow-pop">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-primary-foreground">
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-4 rounded-full font-bold">SOBRE A CÃOTAINER</Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5">
                Amor, cuidado e <span className="text-secondary">profissionais</span> que amam animais.
              </h2>
              <p className="opacity-90 text-base sm:text-lg leading-relaxed mb-6">
                A Cãotainer Petshop oferece amor, cuidado e serviços completos para o seu pet, incluindo clínica veterinária, banho e tosa, sempre com profissionais apaixonados por animais.
              </p>
              <div className="flex flex-wrap gap-2">
                {["🩺 Clínica", "✂️ Banho & Tosa", "🐕 Pet Shop", "💛 Carinho"].map(t => (
                  <span key={t} className="px-4 py-2 rounded-full bg-primary-foreground/15 text-sm font-bold backdrop-blur-sm">{t}</span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-pop border-8 border-background/20">
                <img src={g2} alt="Veterinário cuidando de pet" loading="lazy" width={600} height={600} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="container py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="outline" className="mb-3 border-primary text-primary rounded-full inline-flex items-center gap-1">
            <Instagram className="w-3.5 h-3.5" /> @caotainerpets
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">Pets que <span className="text-primary">passaram por aqui</span> 💛</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galeria.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/caotainerpets"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-pop transition-bouncy"
            >
              <img src={img} alt={`Pet atendido na Cãotainer Petshop ${i + 1}`} loading="lazy" width={500} height={500} className="w-full h-full object-cover group-hover:scale-110 transition-bouncy" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors grid place-items-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Localização */}
      <section id="contato" className="bg-muted/40 py-16 sm:py-20">
        <div className="container grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-card rounded-[2.5rem] p-8 sm:p-10 shadow-card flex flex-col justify-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary rounded-full w-fit">📍 Onde estamos</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-black mb-5">Venha nos <span className="text-primary">visitar</span></h2>
            <div className="space-y-4 text-base">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-bold">Av. Rita Vieira de Andrade, 870</div>
                  <div className="text-muted-foreground">Campo Grande - MS, Brasil</div>
                  <div className="text-muted-foreground text-sm">CEP: 79051-770</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <a href="tel:+5567996081588" className="font-bold hover:text-primary transition-colors">(67) 99608-1588</a>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-bold">Seg a Sáb</div>
                  <div className="text-muted-foreground text-sm">Atendimento todos os dias úteis</div>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="mt-7 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-pop font-bold w-fit">
              <a href={waLink(WA_MSGS.contato)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-card min-h-[320px] border-4 border-background">
            <iframe
              title="Mapa Cãotainer Petshop"
              src="https://www.google.com/maps?q=Av.+Rita+Vieira+de+Andrade,+870,+Campo+Grande+-+MS,+79051-770&output=embed"
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container py-16 sm:py-20">
        <div className="bg-secondary rounded-[3rem] p-10 sm:p-14 md:p-20 text-center relative overflow-hidden shadow-yellow">
          <PawPrint className="absolute top-8 left-8 w-20 h-20 text-primary/10 -rotate-12" />
          <PawPrint className="absolute bottom-8 right-8 w-24 h-24 text-primary/10 rotate-12" />
          <Sparkles className="absolute top-12 right-16 w-10 h-10 text-primary/20" />
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-primary max-w-2xl mx-auto mb-6 leading-tight">
            Seu pet merece o melhor cuidado 🐾
          </h2>
          <p className="text-primary/80 mb-8 max-w-xl mx-auto text-base sm:text-lg">
            Agende agora pelo WhatsApp e venha conhecer a Cãotainer.
          </p>
          <Button asChild size="lg" className="h-16 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg shadow-pop">
            <a href={waLink(WA_MSGS.ctaFinal)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 w-6 h-6" /> Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-secondary grid place-items-center">
                  <PawPrint className="w-5 h-5 text-primary" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-2xl font-extrabold">Cão<span className="text-secondary">tainer</span></div>
                  <div className="text-[10px] uppercase tracking-widest opacity-70">Petshop</div>
                </div>
              </div>
              <p className="opacity-80 text-sm max-w-sm mb-5">
                🐾 Amor e cuidado para o seu pet. Clínica Veterinária | Banho & Tosa.
              </p>
              <div className="flex gap-2">
                <a href="https://instagram.com/caotainerpets" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-primary grid place-items-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-primary grid place-items-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={waLink(WA_MSGS.contato)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-primary grid place-items-center transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-black mb-4 text-secondary">Navegação</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {nav.map(i => <li key={i.label}><a href={i.href} className="hover:text-secondary hover:opacity-100 transition-colors">{i.label}</a></li>)}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-black mb-4 text-secondary">Contato</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li className="flex gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5 text-secondary" /> Av. Rita Vieira de Andrade, 870 — Campo Grande/MS</li>
                <li className="flex gap-2"><Phone className="w-4 h-4 shrink-0 mt-0.5 text-secondary" /> (67) 99608-1588</li>
                <li className="flex gap-2"><Instagram className="w-4 h-4 shrink-0 mt-0.5 text-secondary" /> @caotainerpets</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs opacity-80">
            <div>© 2026 Cãotainer Petshop. Todos os direitos reservados.</div>
            <div>
              Desenvolvido por{" "}
              <a
                href="https://wa.me/67999222070"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-secondary hover:underline"
              >
                Gabriel Cavalcanti
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={waLink(WA_MSGS.floating)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 group"
      >
        <span className="absolute inset-2 rounded-full bg-[hsl(142_70%_45%)] animate-pulse-ring" />
        <span className="relative grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:scale-110 transition-bouncy drop-shadow-[0_10px_20px_hsl(142_70%_45%/0.5)]">
          <img src={whatsappLogo} alt="Logotipo do WhatsApp" width={64} height={64} className="w-full h-full object-contain" />
        </span>
      </a>
    </div>
  );
};

export default Index;
