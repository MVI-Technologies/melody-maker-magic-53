## Objetivo

Aproximar visualmente o site da estética LoveTune: fundo branco/lavanda muito claro, paleta roxo→rosa em gradiente, tipografia bold sans-serif (não serifada), botões pílula com gradiente, e uma logo de coração "derretendo" com nota musical.

## 1. Nova logo

Gerar `src/assets/logo.png` (PNG transparente, premium) — coração roxo→rosa com "gotejamento" inferior estilizado como ondas/barras de equalizador e uma nota musical no centro. Variante mark-only (sem texto) para usar no header ao lado do wordmark em texto.

Trocar o ícone atual `Music2` em `site-chrome.tsx` por `<img src={logo} />` + wordmark "CantataIA" (ou renomear se desejar — pergunto abaixo).

## 2. Design system (src/styles.css)

Trocar a paleta "warm wine/terracotta/gold" pela paleta LoveTune:

- `--background`: branco quase puro com leve tom lavanda (oklch ~0.99 0.005 300)
- `--foreground`: quase preto neutro
- `--primary`: roxo vibrante (~#7c3aed / oklch 0.55 0.25 295)
- `--accent`/secundária: rosa magenta (~#ec4899)
- `--gradient-hero`: `linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)`
- Remover tokens `wine`, `gold`, `cream`, `terracotta` (ou remapear para neutros) e substituir todos os usos em `index.tsx`, `criar.tsx`, `sucesso.tsx`, `musica.$token.tsx`, `site-chrome.tsx`.
- Tipografia: trocar Playfair Display por **Plus Jakarta Sans** (ou Poppins) — bold/extrabold para headings, sem itálico serifado. Atualizar `--font-display` e o `@import` do Google Fonts.
- Botões: forçar `rounded-full` com `bg-gradient-hero` + sombra roxa suave (já temos shadow-warm, recolorir).
- Halos/blobs: adicionar blobs roxo/rosa desfocados nas laterais do hero (mimetizando o fundo do LoveTune).

## 3. Ajustes de seções na landing

- **Hero**: logo centralizada acima do H1 (como no LoveTune), H1 em gradiente roxo→rosa, layout pode ficar centralizado em vez de 2 colunas — confirmo abaixo.
- **Depoimentos**: trocar fundo `bg-wine` (some) por card claro com borda gradiente.
- **CTA final**: manter mas com gradiente roxo.
- Substituir badges/ícones que usavam `text-gold` por `text-primary` ou amarelo neutro.

## 4. Não mexer

- Lógica de pedidos, Stripe, Suno, rotas, server functions, schema — só CSS/JSX visual e a nova logo.

## Perguntas rápidas antes de implementar

1. **Nome da marca**: manter "CantataIA" ou trocar (ex.: "LoveSong", "MinhaMusicaIA")?
2. **Layout do hero**: centralizado com logo grande em cima (igual LoveTune) ou manter 2 colunas com imagem à direita?
3. **Fonte**: Plus Jakarta Sans (mais arredondada, atual LoveTune) ou Poppins?
