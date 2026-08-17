# Dev House 🏠

[![NPM Version](https://img.shields.io/npm/v/seu-pacote?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

O **Dev House** é uma plataforma imobiliária moderna desenvolvida com foco em performance, responsividade e código limpo. O projeto simula uma listagem de imóveis na região do Espírito Santo (Vitória, Guarapari, Vila Velha, Serra) e foi planejado como uma aplicação de demonstração técnica para compor meu portfólio de desenvolvimento Front-End.

---

## 🚀 Demonstração de Boas Práticas

Este projeto foi reestruturado para simular um ambiente de produção real, aplicando os seguintes conceitos de engenharia de software:
- **Princípio DRY (Don't Repeat Yourself):** Eliminação de código HTML duplicado através da criação de componentes reutilizáveis.
- **Git Flow & Branching:** Desenvolvimento isolado em branches de funcionalidades (`feature/`), evitando commits diretos na `main`.
- **Arquitetura Modular (ES6):** Separação clara entre a base de dados local (`data.js`) e a lógica de controle do ecossistema (`main.js`).
- **Acessibilidade & Semântica:** Uso correto de tags HTML5 (`aside`, `main`, `article`, `header`) para melhor indexação e leitura de tela.

---

## 🛠️ Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram aplicadas na construção do projeto:

- **HTML5:** Estruturação semântica e acessível.
- **Tailwind CSS:** Estilização utilitária avançada, transições de opacidade e layout responsivo (*Mobile-First*).
- **JavaScript Moderno (ES6+):** Manipulação dinâmica do DOM, Template Literals, manipulação de arrays com `.map()` e módulos nativos (`import`/`export`).
- **Font Awesome 4.7:** Biblioteca de ícones vetoriais.

---

## 📦 Arquitetura de Pastas

A estrutura de arquivos foi organizada seguindo o padrão de modularidade de mercado:

```text
houses/
├── index.html          # Esqueleto estrutural da aplicação e views estáticas
├── styles/
│   └── output.css      # Arquivo de estilos compilado pelo Tailwind CSS
├── src/
│   ├── data.js         # Banco de dados local (Fonte Única de Verdade)
│   └── main.js         # Motor Javascript, componentes e ouvintes de eventos
└── assets/
    └── .jpg / .png     # Otimização de imagens dos imóveis catalogados
```

---

## 🔧 Como Rodar o Projeto Localmente

Como a aplicação faz uso de **Módulos Navais do JavaScript (`type="module"`)**, o navegador restringe o carregamento direto via protocolo `file:///` por segurança (CORS). É necessário rodar o projeto através de um servidor local.

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/leo-gomes-dev/houses.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd Dev-House
   ```

3. **Instale as dependências de desenvolvimento (Tailwind CSS):**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento do Tailwind:**
   ```bash
   npm run dev
   ```

5. **Abrindo no Navegador:**
   Abra o arquivo `index.html` utilizando a extensão **Live Server** do VS Code para gerar o endereço local `http://127.0.0`, ou utilize o servidor local configurado no seu ambiente Node.

---

## 📌 Nota sobre a versão Demo
Ao carregar a plataforma, um **Modal Informativo** é apresentado sinalizando que este ambiente é um projeto de simulação técnica. Os dados, valores, e imagens de imóveis contidos aqui são estritamente demonstrativos.

---

Desenvolvido com 💻 por [Leogom](https://github.com/leo-gomes-dev)
