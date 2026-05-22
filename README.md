<div align="center">

# ✦ Andrei Rodrigues — Portfólio Pessoal

### `> Desenvolvedor Full-Stack · Entusiasta de IA Aplicada · Estagiário na Prefeitura de SP`

<br/>

[![Deploy](https://img.shields.io/badge/🌐_Live_Demo-andreirb.web.app-38bdf8?style=for-the-badge&labelColor=09090f)](https://andreirb.web.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-andreirdebarros-0077b5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=09090f)](https://www.linkedin.com/in/andreirdebarros)
[![GitHub](https://img.shields.io/badge/GitHub-Andrei--RB-fff?style=for-the-badge&logo=github&logoColor=white&labelColor=09090f)](https://github.com/Andrei-RB)
[![Email](https://img.shields.io/badge/Email-Contato-ea4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=09090f)](mailto:andreirdebarros.contato@gmail.com)

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)

</div>

---

## 📋 Sobre o Projeto

Este é o meu **portfólio profissional pessoal**, desenvolvido do zero com foco em performance, design moderno e experiência do usuário. O site apresenta minha trajetória, projetos, stack tecnológico e formas de contato — tudo construído com as ferramentas que uso no meu dia a dia.

> **Design:** Dark mode com paleta azul-ciano (`#38bdf8`), micro-animações, glassmorphism e efeitos de scroll reveal para uma experiência visual premium.

---

## ✨ Funcionalidades

- **🎬 Typewriter Effect** — Subtítulos animados com efeito de digitação em tempo real
- **🌊 Scroll Reveal** — Elementos entram na tela suavemente conforme o usuário rola a página
- **⭐ Projetos em Destaque** — Cards com aura dourada para os projetos mais completos
- **📱 Totalmente Responsivo** — Funciona perfeitamente em mobile, tablet e desktop
- **⚡ Performance Otimizada** — Build com Vite, lazy loading e code splitting automático
- **🔒 HTTPS com SSL** — Hospedado no Firebase Hosting com certificado de segurança automático
- **🎨 Design System Completo** — Tokens de design centralizados via CSS `@theme` do Tailwind v4

---

## 🛠️ Stack Tecnológico

### Front-End
| Tecnologia | Versão | Uso |
|---|---|---|
| **React** | v19 | Framework de UI e componentização |
| **TypeScript** | ~5.8 | Tipagem estática e segurança de código |
| **Vite** | v6 | Bundler ultrarrápido para desenvolvimento e build |
| **Tailwind CSS** | v4 | Estilização utility-first com `@theme` CSS nativo |

### Libs & Ferramentas
| Ferramenta | Uso |
|---|---|
| **Lucide React** | Ícones modernos e consistentes |
| **Motion** | Animações suaves e fluidas |
| **Devicon** | Ícones das tecnologias da Stack section |
| **@fontsource** | Fontes auto-hospedadas: Syne, DM Sans, JetBrains Mono |

### Infra & Deploy
| Serviço | Uso |
|---|---|
| **Firebase Hosting** | Hospedagem estática com CDN global e SSL automático |
| **GitHub** | Controle de versão e repositório de código |

---

## 🗂️ Estrutura do Projeto

```
dreibarros.web/
├── 📁 public/
│   └── assets/          # CV e assets estáticos
├── 📁 src/
│   ├── 📁 componentes/
│   │   ├── Contato/     # Seção de contato com cards de redes sociais
│   │   ├── Footer/      # Rodapé com links
│   │   ├── Hero/        # Seção principal com typewriter e floating cards
│   │   ├── Navbar/      # Navegação fixa com smooth scroll
│   │   ├── Projetos/    # Grid de projetos com destaque dourado
│   │   ├── SobreMim/    # Seção sobre mim
│   │   ├── Stack/       # Grid do stack tecnológico
│   │   └── ui/          # Componentes de UI reutilizáveis (ScrollReveal)
│   ├── 📁 hooks/
│   │   └── useTypewriter.ts  # Hook customizado do efeito de digitação
│   ├── App.tsx          # Componente raiz e layout principal
│   ├── index.css        # Design system global + tokens Tailwind v4
│   └── main.tsx         # Entrypoint da aplicação
├── .firebaserc          # Configuração do projeto Firebase
├── .gitignore           # Arquivos ignorados pelo Git
├── firebase.json        # Configuração do Firebase Hosting (SPA rewrite)
├── index.html           # HTML base com meta tags SEO
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
└── vite.config.ts       # Configuração do Vite
```

---

## ⭐ Projetos em Destaque

> Esses projetos recebem destaque especial no portfólio (aura dourada) por serem os mais completos e que mais demandaram tempo de desenvolvimento.

### ⬇️ EasyDownload *(Projeto Completo)*
Ferramenta Python para download de vídeos e músicas de forma rápida e fácil.
`#python` `#download` `#utilitário` `#automação`
→ [Ver no GitHub](https://github.com/Andrei-RB/EasyDownload)

### 💬 Legendas Automáticas *(Projeto Completo)*
Ferramenta Python para geração automática de legendas em vídeos com processamento de áudio e transcrição.
`#python` `#automação` `#transcrição` `#audio`
→ [Ver no GitHub](https://github.com/Andrei-RB/LegendasAutomaticas)

---

## 🚀 Rodando Localmente

**Pré-requisitos:** Node.js v18+ instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/Andrei-RB/dreibarros.web.git
cd dreibarros.web

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`.

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (hot reload)
npm run build    # Gera o build de produção na pasta /dist
npm run preview  # Pré-visualiza o build de produção localmente
npm run lint     # Checagem de tipos TypeScript (tsc --noEmit)
```

---

## 🌐 Deploy no Firebase

```bash
# Instalar Firebase CLI (uma vez)
npm install -g firebase-tools

# Login na conta Google
firebase login

# Gerar build de produção
npm run build

# Publicar na internet
firebase deploy
```

> O site será publicado automaticamente em `https://andreirb.web.app` com HTTPS e CDN global.

---

## 📬 Contato

Estou aberto a oportunidades de estágio, projetos freelance e conexões profissionais!

<div align="center">

| Canal | Link |
|---|---|
| 📧 **Email** | [andreirdebarros.contato@gmail.com](mailto:andreirdebarros.contato@gmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/andreirdebarros](https://www.linkedin.com/in/andreirdebarros) |
| 🐙 **GitHub** | [github.com/Andrei-RB](https://github.com/Andrei-RB) |
| 🌐 **Portfólio** | [andreirb.web.app](https://andreirb.web.app) |

</div>

---

<div align="center">

Feito com ❤️ por **Andrei Rodrigues** · São Paulo, Brasil

*"Desenvolvedor em início de carreira, focado em aprender e construir soluções Full-Stack."*

</div>
