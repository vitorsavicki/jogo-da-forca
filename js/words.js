// Banco de palavras do Jogo da Forca (sem acentos, para simplificar as regras)
"use strict";
const PALAVRAS = [
  // Animais
  { palavra: "CACHORRO", categoria: "Animais", dica: "Melhor amigo do homem" },
  { palavra: "ELEFANTE", categoria: "Animais", dica: "Maior terrestre" },
  { palavra: "GIRAFA",   categoria: "Animais", dica: "Pescoço comprido" },
  { palavra: "PINGUIM",  categoria: "Animais", dica: "Vive no gelo" },
  { palavra: "TARTARUGA",categoria: "Animais", dica: "Lenta e de casco" },
  // Frutas
  { palavra: "BANANA",   categoria: "Frutas", dica: "Amarela e curva" },
  { palavra: "MORANGO",  categoria: "Frutas", dica: "Vermelha com sementes fora" },
  { palavra: "ABACAXI",  categoria: "Frutas", dica: "Coroa de espinhos" },
  { palavra: "MELANCIA", categoria: "Frutas", dica: "Gigante e verde por fora" },
  { palavra: "UVA",      categoria: "Frutas", dica: "Vem no cacho" },
  // Tecnologia
  { palavra: "COMPUTADOR", categoria: "Tecnologia", dica: "Máquina de trabalhar" },
  { palavra: "INTERNET",   categoria: "Tecnologia", dica: "Rede mundial" },
  { palavra: "TECLADO",    categoria: "Tecnologia", dica: "Você digita nele" },
  { palavra: "ROBO",       categoria: "Tecnologia", dica: "Máquina que se move" },
  { palavra: "SENHA",      categoria: "Tecnologia", dica: "Segredo de acesso" },
  // Países
  { palavra: "BRASIL",   categoria: "Países", dica: "O nosso!" },
  { palavra: "JAPAO",    categoria: "Países", dica: "Terra do sol nascente" },
  { palavra: "CANADA",   categoria: "Países", dica: "Folha de bordo" },
  { palavra: "EGITO",    categoria: "Países", dica: "Pirâmides" },
  { palavra: "FRANCA",   categoria: "Países", dica: "Torre Eiffel" },
  // Esportes
  { palavra: "FUTEBOL",  categoria: "Esportes", dica: "Paixão nacional" },
  { palavra: "NATACAO",  categoria: "Esportes", dica: "Na piscina" },
  { palavra: "VOLEI",    categoria: "Esportes", dica: "Rede e saque" },
  { palavra: "SURFE",    categoria: "Esportes", dica: "Nas ondas" },
  { palavra: "CICLISMO", categoria: "Esportes", dica: "Duas rodas" }
];
