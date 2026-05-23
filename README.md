# Pao & Luisi — Convite de casamento

Site convite digital para a boda de **Pao & Luisi** (Cúcuta, Colombia — **10/01/2026**). Versão de arquivo para portfolio: datas fixas; o botão de RSVP desativa automaticamente após o prazo (**20/11/2025**, hora de Cúcuta).

**Site publicado:** [https://paoyluisi.netlify.app/](https://paoyluisi.netlify.app/)

## Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- Hospedagem: [Netlify](https://www.netlify.com/)

## Desenvolvimento local

Requisitos: Node.js 18+ e npm.

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) no navegador.

Outros comandos:

| Comando | Descrição |
|--------|-----------|
| `npm run build` | Gera a pasta `dist/` para produção |
| `npm run preview` | Serve o build localmente |
| `npm run lint` | Verifica o código com ESLint |

## Deploy no Netlify

O repositório inclui `netlify.toml` com:

- **Build:** `npm run build`
- **Publish:** `dist`

### Primeira vez

1. Conecta este repositório no [Netlify](https://app.netlify.com/).
2. Confirma que o domínio customizado aponta para o site (ex.: `paoyluisi.netlify.app`).
3. Cada push na branch principal dispara um deploy automático.

### Deploy manual (CLI)

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## Estrutura do projeto

```
src/
├── App.jsx                 # Monta layout + seções
├── context/                # Datas calculadas no acesso
├── config/                 # Textos, offsets de data, links (edite aqui)
│   ├── navigation.js       # Itens do menu
│   ├── wedding.js          # Datas fixas, prazo RSVP, horários, música
│   ├── agenda.js           # Cerimônia e recepção
│   ├── gallery.js          # Fotos da galeria
│   └── dressCode.js        # Código de vestimenta
├── hooks/                  # Lógica reutilizável (menu, carrossel…)
├── lib/                    # Funções auxiliares (calendário, contagem)
└── components/
    ├── layout/             # Cabeçalho, rodapé, fundo
    ├── sections/           # Seções da página
    ├── countdown/          # Contador “Faltan…”
    ├── ui/                 # Botões e componentes visuais
    └── MusicToggle.jsx     # Controle de música
```

Arquivos estáticos (imagens, fontes, vídeo) ficam em `public/`. O `.ics` do calendário é gerado no navegador ao clicar em “Añadir al calendario”.

Imports usam o alias `@/` → `src/` (configurado em `vite.config.js` e `jsconfig.json`).

## O que editar sem mexer no layout

| O que mudar | Arquivo |
|-------------|---------|
| Data do casamento | `src/config/wedding.js` → `WEDDING_DATE_ISO` |
| Prazo RSVP (último dia inclusive) | `src/config/wedding.js` → `RSVP_DEADLINE_YMD` |
| Horário do evento no calendário (`.ics`) | `src/config/wedding.js` → `WEDDING_EVENT_START` / `END` |
| Música, carrossel | `src/config/wedding.js` |
| Links do menu | `src/config/navigation.js` |
| Locais e horários da agenda | `src/config/agenda.js` |
| Fotos da galeria (quantidade/caminhos) | `src/config/gallery.js` |
| Cores reservadas e textos de vestimenta | `src/config/dressCode.js` |
| Cores e fontes globais | `src/index.css` |

### RSVP (portfolio)

- Data exibida: **20/11/2025** (fixa).
- Antes do prazo, o botão abre o [formulário Tally](https://tally.so/r/3E9PV4).
- Depois do prazo (fuso **America/Bogota**), o botão fica desativado.

## Créditos

- Desenvolvimento: [Debora Weinmann](mailto:debiwein@gmail.com)
- Design: Lizeth Pineda
