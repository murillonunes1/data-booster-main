# Gerador de Pessoas e Empresas - React/Vite

Este projeto é uma aplicação **React** criada com **Vite** que permite gerar dados de pessoas físicas e jurídicas. O objetivo é fornecer informações para criar **propostas** e facilitar o **teste de fluxo na Finza**.

---

## Funcionalidades

- Gerar **Pessoa Física**:

  - Nome completo
  - CPF
  - Outros dados simulados (opcional)

- Gerar **Pessoa Jurídica**:

  - Nome da empresa
  - CNPJ
  - Outros dados simulados (opcional)

- Botão para **copiar os dados** gerados para a área de transferência
- Interface simples e intuitiva para testes rápidos

---

## Tecnologias

- React 18
- Vite
- TailwindCSS (opcional)
- React Hook Form / Zod (opcional, se houver validação de dados)
- Clipboard API (`navigator.clipboard`) para copiar dados

---

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn
Rode o projeto:

bash
Copiar
Editar
npm run dev
# ou
yarn dev
O projeto estará disponível em http://localhost:5173 (porta padrão do Vite).

Estrutura do Projeto
bash
Copiar
Editar
src/
 ├─ components/        # Componentes reutilizáveis (botão copiar, cards de dados, etc)
 ├─ utils/             # Funções utilitárias para gerar pessoas e empresas
 ├─ App.jsx            # Componente principal
 └─ main.jsx           # Entrada do React
Como Usar
Abra a aplicação no navegador

Clique em Gerar Pessoa Física ou Gerar Pessoa Jurídica

Visualize os dados gerados

Clique no botão Copiar para copiar os dados e usá-los no fluxo da Finza
```
