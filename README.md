# 🎯 Jogo da Forca

O clássico jogo da forca em **HTML + CSS + JavaScript puros** — sem frameworks, sem build, sem dependências.

## ✨ Recursos

- 25 palavras em 5 categorias (Animais, Frutas, Tecnologia, Países, Esportes)
- Teclado na tela **e** teclado físico
- Dica por palavra (1 por jogo) 💡
- Placar de vitórias/derrotas na sessão
- Desenho da forca em SVG (sem imagens externas)
- Layout responsivo + tema escuro
- Acessível: `aria-live`, botões reais, foco no diálogo final

## 🔒 Segurança (boas práticas aplicadas)

- **CSP estrita** via `_headers` do Cloudflare Pages: `default-src 'self'`, sem scripts inline, sem conexões externas
- **Zero dependências**: nada de npm/CDN → sem supply-chain risk
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: no-referrer`, `Permissions-Policy` mínima
- Apenas assets estáticos locais

## 🚀 Rodando localmente

É estático: abra o `index.html` no navegador, ou sirva com qualquer servidor:

```powershell
npx serve .        # ou: python -m http.server
```

## ☁️ Deploy (Cloudflare Pages)

Deploy direto deste repositório: **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git** → selecione este repo → framework "None", build command vazio, output `/`. O arquivo `_headers` é aplicado automaticamente.

## 🛠️ Estrutura

```
├── index.html      # marcação (sem JS/CSS inline → CSP estrita)
├── css/style.css   # estilos (tema escuro, responsivo)
├── js/words.js     # banco de palavras
├── js/game.js      # lógica do jogo
├── _headers        # cabeçalhos de segurança (Cloudflare Pages)
└── LICENSE         # MIT
```

---

## 📊 Status do CI/CD

[![CI](https://github.com/vitorsavicki/jogo-da-forca/actions/workflows/ci.yml/badge.svg)](https://github.com/vitorsavicki/jogo-da-forca/actions/workflows/ci.yml)
[![Segurança](https://github.com/vitorsavicki/jogo-da-forca/actions/workflows/security.yml/badge.svg)](https://github.com/vitorsavicki/jogo-da-forca/actions/workflows/security.yml)

---

Feito com 💜 por Vitor Savicki, com ajuda de Zeta (Letta Code) — usando Claude Code grátis via OmniRoute.
