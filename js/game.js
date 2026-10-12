/* Jogo da Forca — lógica principal (JavaScript puro, sem dependências) */
"use strict";
(function () {
  const MAX_ERROS = 6;
  const $ = (id) => document.getElementById(id);

  // Elementos
  const elPalavra = $("palavra"), elCategoria = $("categoria"), elDica = $("dica");
  const elErros = $("erros"), elTeclado = $("teclado"), elVitorias = $("vitorias");
  const elDerrotas = $("derrotas"), btnDica = $("btn-dica"), btnNovo = $("btn-novo");
  const overlay = $("overlay"), overlayTitulo = $("overlay-titulo");
  const overlayTexto = $("overlay-texto"), btnOverlay = $("btn-overlay");
  const partes = Array.from({ length: MAX_ERROS }, (_, i) => $("p" + i));

  // Estado
  let atual = null, letras = new Set(), erros = 0, fimDeJogo = false;
  let dicaUsada = false, vitorias = 0, derrotas = 0, indiceAtual = -1;

  function sortearPalavra() {
    let i;
    do { i = Math.floor(Math.random() * PALAVRAS.length); } while (i === indiceAtual && PALAVRAS.length > 1);
    indiceAtual = i;
    return PALAVRAS[i];
  }

  function renderPalavra() {
    elPalavra.textContent = atual.palavra.split("")
      .map((l) => (letras.has(l) ? l : "_")).join(" ");
  }

  function renderTeclado() {
    elTeclado.textContent = "";
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letra) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = letra;
      b.dataset.letra = letra;
      b.disabled = fimDeJogo || letras.has(letra);
      if (letras.has(letra)) {
        b.classList.add(atual.palavra.includes(letra) ? "certa" : "errada");
      }
      b.addEventListener("click", () => tentar(letra));
      elTeclado.appendChild(b);
    });
  }

  function atualizarPlacar() {
    elVitorias.textContent = "Vitórias: " + vitorias;
    elDerrotas.textContent = "Derrotas: " + derrotas;
    elErros.textContent = String(erros);
    partes.forEach((p, i) => p.classList.toggle("visivel", i < erros));
  }

  function tentar(letra) {
    if (fimDeJogo || letras.has(letra)) return;
    letras.add(letra);
    if (!atual.palavra.includes(letra)) erros += 1;
    renderPalavra();
    renderTeclado();
    atualizarPlacar();
    verificarFim();
  }

  function verificarFim() {
    const ganhou = atual.palavra.split("").every((l) => letras.has(l));
    if (ganhou) return encerrar(true);
    if (erros >= MAX_ERROS) return encerrar(false);
  }

  function encerrar(ganhou) {
    fimDeJogo = true;
    if (ganhou) { vitorias += 1; } else { derrotas += 1; }
    atualizarPlacar();
    renderTeclado();
    overlayTitulo.textContent = ganhou ? "🎉 Você venceu!" : "💀 Fim de jogo";
    overlayTexto.textContent = ganhou
      ? "A palavra era " + atual.palavra + ". Mandou bem!"
      : "A palavra era " + atual.palavra + ". Tente de novo!";
    overlay.hidden = false;
    btnOverlay.focus();
  }

  function novoJogo() {
    atual = sortearPalavra();
    letras = new Set();
    erros = 0;
    fimDeJogo = false;
    dicaUsada = false;
    btnDica.disabled = false;
    elCategoria.textContent = atual.categoria;
    elDica.textContent = "—";
    overlay.hidden = true;
    renderPalavra();
    renderTeclado();
    atualizarPlacar();
  }

  // Eventos
  btnNovo.addEventListener("click", novoJogo);
  btnOverlay.addEventListener("click", novoJogo);
  btnDica.addEventListener("click", () => {
    if (dicaUsada || fimDeJogo) return;
    dicaUsada = true;
    btnDica.disabled = true;
    elDica.textContent = atual.dica;
  });
  document.addEventListener("keydown", (e) => {
    const letra = (e.key || "").toUpperCase();
    if (/^[A-Z]$/.test(letra) && overlay.hidden) tentar(letra);
    if (e.key === "Enter" && !overlay.hidden) novoJogo();
  });

  novoJogo();
})();
