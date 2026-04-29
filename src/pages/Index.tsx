import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search, ShoppingBag, MapPin, User, Heart, Truck, Shield,
  Sparkles, Scissors, Stethoscope, GraduationCap, Star, ChevronRight, PawPrint
} from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import dogImg from "@/assets/cat-dog.png";
import catImg from "@/assets/cat.png";
import birdImg from "@/assets/bird.png";
import fishImg from "@/assets/fish.png";

const categories = [
  { name: "Cachorro", img: dogImg, count: "+12.500 produtos" },
  { name: "Gato", img: catImg, count: "+8.200 produtos" },
  { name: "Pássaro", img: birdImg, count: "+1.400 produtos" },
  { name: "Peixe", img: fishImg, count: "+2.100 produtos" },
];

const services = [
  { icon: Scissors, title: "Banho & Tosa", desc: "Profissionais certificados, agende em minutos." },
  { icon: Stethoscope, title: "Vet Petz", desc: "Consultas, vacinas e exames com carinho." },
  { icon: GraduationCap, title: "Adestramento", desc: "Comportamento e obediência com método positivo." },
  { icon: Sparkles, title: "Spa & Estética", desc: "Tratamentos relaxantes para o seu melhor amigo." },
];

const products = [
  { name: "Ração Premium Salmão 15kg", price: "R$ 289,90", old: "R$ 349,90", tag: "-17%", brand: "Happy" },
  { name: "Brinquedo Mordedor Resistente", price: "R$ 49,90", old: "R$ 69,90", tag: "Novo", brand: "Petz" },
  { name: "Areia Sanitária Premium 4kg", price: "R$ 32,90", old: "R$ 39,90", tag: "-18%", brand: "Clean" },
  { name: "Cama Conforto Pet Soft G", price: "R$ 199,90", old: "R$ 259,90", tag: "Top", brand: "Comfy" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-secondary" />
            <span className="hidden sm:inline">Frete grátis em compras acima de R$ 99 — em todo o Brasil 🐾</span>
            <span className="sm:hidden">Frete grátis acima de R$ 99 🐾</span>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1 hover:text-secondary transition-colors">
            <MapPin className="w-4 h-4" /> Encontre uma loja
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center gap-6 py-4">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-hero grid place-items-center shadow-pop">
              <PawPrint className="w-5 h-5 text-secondary" />
            </div>
            <span className="font-display text-2xl font-extrabold tracking-tight">
              pet<span className="text-primary">zi</span>
            </span>
          </a>

          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Busque por ração, brinquedos, areia..."
              className="pl-12 h-12 rounded-full border-2 bg-muted/50 focus-visible:border-primary"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {["Cachorro", "Gato", "Outros pets", "Promoções", "Serviços"].map(i => (
              <a key={i} href="#" className="px-3 py-2 rounded-full hover:bg-secondary/30 transition-colors">{i}</a>
            ))}
          </nav>

          <div className="flex items-center gap-1 ml-auto lg:ml-0">
            <Button variant="ghost" size="icon" className="rounded-full"><Heart className="w-5 h-5" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full"><User className="w-5 h-5" /></Button>
            <Button size="icon" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs grid place-items-center font-bold">3</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-soft overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative">
          <div className="relative z-10">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-6 px-4 py-2 rounded-full font-bold">
              ✨ Assinatura Petzi — 15% OFF para sempre
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] mb-6">
              Tudo para o seu <span className="text-primary">melhor amigo</span> em um só lugar.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Mais de 30.000 produtos, banho & tosa, veterinários e o cuidado que o seu pet merece — entregue na sua porta.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-pop text-base font-bold">
                Comprar agora <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base font-bold">
                Agendar Banho & Tosa
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Compra segura</div>
              <div className="flex items-center gap-2"><Truck className="w-5 h-5 text-primary" /> Entrega expressa</div>
              <div className="flex items-center gap-2"><Star className="w-5 h-5 text-secondary fill-secondary" /> 4.9/5 — 320k avaliações</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-sun rounded-full blur-3xl opacity-40 animate-float-slow" />
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-pop border-8 border-background">
              <img src={heroPets} alt="Cachorro e gato felizes" className="w-full h-full object-cover" width={1024} height={1024} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-3xl p-4 shadow-card flex items-center gap-3 animate-float-slow">
              <div className="w-12 h-12 rounded-2xl bg-sun grid place-items-center">
                <Heart className="w-6 h-6 text-primary fill-primary" />
              </div>
              <div>
                <div className="font-bold text-sm">+2 milhões</div>
                <div className="text-xs text-muted-foreground">de pets felizes</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-3xl p-4 shadow-yellow animate-wag">
              <div className="font-display font-black text-3xl leading-none">50%</div>
              <div className="text-xs font-bold">OFF hoje</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee benefits */}
      <section className="bg-primary text-primary-foreground py-5 overflow-hidden border-y-4 border-secondary">
        <div className="flex animate-marquee whitespace-nowrap gap-12 font-display font-bold text-2xl">
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="flex items-center gap-12 shrink-0">
              {["Frete grátis ✦", "Cashback Clubzi ✦", "Vet 24h ✦", "Assinatura -15% ✦", "Retire na loja ✦", "Pix com desconto ✦"].map((t, i) => (
                <span key={i} className="flex items-center gap-12">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Badge variant="outline" className="mb-3 border-primary text-primary rounded-full">Departamentos</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-black">Compre por <span className="text-primary">pet</span></h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all">
            Ver todos <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c, i) => (
            <a
              key={c.name}
              href="#"
              className={`group relative rounded-[2rem] p-6 shadow-card hover:shadow-pop transition-bouncy hover:-translate-y-2 overflow-hidden ${
                i % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}
            >
              <div className="relative z-10">
                <div className="text-xs font-bold opacity-80 uppercase tracking-wider">{c.count}</div>
                <h3 className="font-display text-3xl font-black mt-1">{c.name}</h3>
                <div className="inline-flex items-center gap-1 mt-4 text-sm font-bold opacity-90 group-hover:gap-2 transition-all">
                  Explorar <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={400}
                height={400}
                className="absolute -bottom-4 -right-4 w-44 h-44 object-contain group-hover:scale-110 group-hover:rotate-6 transition-bouncy drop-shadow-2xl"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Subscription banner */}
      <section className="container py-10">
        <div className="relative rounded-[3rem] bg-hero p-10 md:p-16 overflow-hidden shadow-pop">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div className="text-primary-foreground">
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-4 rounded-full font-bold">
                ASSINATURA PETZI
              </Badge>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-tight mb-4">
                Receba ração todo mês com <span className="text-secondary">15% OFF</span>.
              </h2>
              <p className="opacity-90 mb-6 text-lg">
                Sem multa, sem fidelidade. Você escolhe quando, quanto e como receber. Frete grátis sempre.
              </p>
              <Button size="lg" className="h-14 px-8 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-yellow font-bold text-base">
                Quero assinar
              </Button>
            </div>
            <div className="relative h-72 md:h-96">
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary grid place-items-center shadow-yellow animate-float-slow">
                  <span className="font-display text-7xl md:text-8xl font-black text-primary">15%</span>
                </div>
              </div>
              <img src={dogImg} alt="" loading="lazy" width={400} height={400} className="absolute -bottom-6 right-0 w-48 md:w-64 drop-shadow-2xl animate-wag" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="mb-3 border-primary text-primary rounded-full">Serviços Petzi</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-black">Cuidado completo, <span className="text-primary">do focinho ao rabo</span></h2>
          <p className="text-muted-foreground mt-4 text-lg">Profissionais apaixonados por pets prontos para atender o seu.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(s => (
            <div key={s.title} className="group bg-card border border-border rounded-[2rem] p-7 hover:border-primary hover:shadow-pop transition-bouncy">
              <div className="w-14 h-14 rounded-2xl bg-sun grid place-items-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-bouncy">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-black mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <a href="#" className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                Agendar <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-3 rounded-full font-bold">🔥 Ofertas da semana</Badge>
              <h2 className="font-display text-4xl md:text-5xl font-black">Mais amados pelos <span className="text-primary">tutores</span></h2>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all">
              Ver todas as ofertas <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <div key={i} className="group bg-card rounded-[2rem] p-5 shadow-card hover:shadow-pop transition-bouncy hover:-translate-y-1 flex flex-col">
                <div className="relative aspect-square rounded-2xl bg-soft mb-4 overflow-hidden grid place-items-center">
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground hover:bg-primary rounded-full font-bold z-10">{p.tag}</Badge>
                  <Button size="icon" variant="ghost" className="absolute top-2 right-2 rounded-full hover:bg-secondary z-10">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <img
                    src={[dogImg, catImg, birdImg, fishImg][i]}
                    alt={p.name}
                    loading="lazy"
                    width={300}
                    height={300}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-bouncy"
                  />
                </div>
                <div className="text-xs font-bold text-primary uppercase tracking-wider">{p.brand}</div>
                <h3 className="font-semibold text-sm mt-1 mb-3 line-clamp-2 flex-1">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-2xl font-black text-primary">{p.price}</span>
                  <span className="text-xs text-muted-foreground line-through">{p.old}</span>
                </div>
                <Button className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-bold">
                  Adicionar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-20">
        <div className="bg-secondary rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-yellow">
          <PawPrint className="absolute top-8 left-8 w-16 h-16 text-primary/10 -rotate-12" />
          <PawPrint className="absolute bottom-8 right-8 w-20 h-20 text-primary/10 rotate-12" />
          <h2 className="font-display text-3xl md:text-5xl font-black text-primary max-w-2xl mx-auto mb-4">
            Cupons, novidades e dicas para o seu pet 💌
          </h2>
          <p className="text-primary/80 mb-8 max-w-xl mx-auto">Cadastre-se e ganhe <strong>R$ 30 OFF</strong> na sua primeira compra.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input placeholder="seu@email.com" className="h-14 rounded-full bg-background border-0 text-base px-6" />
            <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Quero meu cupom
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-20 pb-8">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-secondary grid place-items-center">
                  <PawPrint className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display text-2xl font-extrabold">pet<span className="text-secondary">zi</span></span>
              </div>
              <p className="opacity-80 text-sm max-w-sm mb-6">
                O ecossistema mais completo para o universo pet. Produtos, serviços e amor em um só lugar.
              </p>
              <div className="flex gap-2">
                {["FB", "IG", "TT", "YT"].map(s => (
                  <a key={s} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-primary grid place-items-center text-xs font-bold transition-colors">{s}</a>
                ))}
              </div>
            </div>
            {[
              { title: "Petzi", links: ["Sobre nós", "Lojas", "Trabalhe conosco", "Sustentabilidade"] },
              { title: "Ajuda", links: ["Central de atendimento", "Trocas e devoluções", "Frete e entrega", "Política de privacidade"] },
              { title: "Serviços", links: ["Banho & Tosa", "Vet Petzi", "Assinatura", "Clubzi fidelidade"] },
            ].map(c => (
              <div key={c.title}>
                <h4 className="font-display text-lg font-black mb-4 text-secondary">{c.title}</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  {c.links.map(l => <li key={l}><a href="#" className="hover:text-secondary hover:opacity-100 transition-colors">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-70">
            © 2026 Petzi — Inspirado pelo melhor amigo do homem. Feito com 💛 para pets.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
