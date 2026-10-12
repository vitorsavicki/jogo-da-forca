# 🎯 Jogo da Forca

**🌐 Jogue agora: [jogo-da-forca.vitorsavicki.workers.dev](https://jogo-da-forca.vitorsavicki.workers.dev/)** — deploy automático a cada push!

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

- **CSP estrita** via `_headers` servido pelo Cloudflare Worker: `default-src 'self'`, sem scripts inline, sem conexões externas
- **Zero dependências**: nada de npm/CDN → sem supply-chain risk
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: no-referrer`, `Permissions-Policy` mínima
- Apenas assets estáticos locais

## 🚀 Rodando localmente

É estático: abra o `index.html` no navegador, ou sirva com qualquer servidor:

```powershell
npx serve .        # ou: python -m http.server
```

## ☁️ Deploy (Cloudflare Workers)

Hospedado como **Worker de assets estáticos** na Cloudflare, com **deploy automático** a cada push na `main` (Workers Builds).
O passo a passo completo — do zero, com diagramas — está no [**DEPLOY.md**](DEPLOY.md).

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
