## Paleta baseada na fachada da loja

Vou usar exatamente as duas cores da foto enviada (fachada da Cãotainer):

- **Azul fachada** (cor dominante): azul vibrante e saturado, tipo `hsl(212 85% 42%)` — usado em header, botões primários, blocos de destaque, ícones e gradientes.
- **Amarelo letreiro** (cor de destaque): amarelo quente das letras "CÃO", tipo `hsl(45 100% 58%)` — usado em CTAs secundários, badges, highlights e detalhes.
- Fundo geral claro e neutro para o azul e amarelo respirarem.

## O que muda

1. **`src/index.css`** — atualizar tokens HSL:
   - `--primary` → azul da fachada
   - `--primary-glow` → azul um pouco mais claro
   - `--secondary` / `--accent` → amarelo do letreiro
   - `--ring` → azul
   - `--gradient-hero` → azul → azul-claro
   - `--gradient-sun` → mantém amarelo
   - `--shadow-pop` / `--shadow-card` → tons de azul
   - Dark mode ajustado para a mesma dupla

2. **`src/assets/hero-pets.jpg`** — regerar imagem hero com fundo/ambiente azul, pets felizes, vibe da fachada (chapas metálicas azuis + amarelo).

3. **`src/pages/Index.tsx`** — sem mudança estrutural; já usa tokens semânticos (`bg-primary`, `text-primary`, `bg-secondary`), então as cores se atualizam automaticamente.

4. **Botão flutuante WhatsApp** — manter verde WhatsApp (padrão de reconhecimento), só com leve animação já existente.

## O que NÃO muda

- Conteúdo, textos, links, endereço, WhatsApp, rodapé, créditos.
- Layout, seções e tipografia (Fraunces + Plus Jakarta Sans).
- Estrutura de componentes.

Resultado: identidade visual fiel à fachada real da loja — azul forte com letras/CTAs amarelos.