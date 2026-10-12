# Política de Segurança 🔒

## Reportando uma vulnerabilidade

**Não abra uma issue pública para falhas de segurança.**
Use a aba **Security → Report a vulnerability** (GitHub Private Vulnerability Reporting)
ou contate o mantenedor pelo GitHub ([@vitorsavicki](https://github.com/vitorsavicki)).

Respondemos em até 7 dias. Obrigado por ajudar a manter o projeto seguro!

## Medidas ativas neste repositório

- **CSP estrita** (`_headers`): sem scripts inline, sem conexões externas
- **Zero dependências**: elimina supply-chain risk
- **Gitleaks** no CI: bloqueia vazamento de credenciais
- **CodeQL** no CI: análise estática de JavaScript semanal + por push/PR
- **Secret scanning** do GitHub ativado (repo público)
