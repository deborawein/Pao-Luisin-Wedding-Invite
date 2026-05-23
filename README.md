# Pao & Luisi — Wedding invite

Digital wedding invitation for **Pao & Luisi** in Cúcuta, Colombia (**January 10, 2026**). This repo is the **portfolio archive** of the live site: fixed event dates, and the RSVP button turns off automatically after the confirmation deadline (**November 20, 2025**, Cúcuta time).

**Live site:** [https://paoyluisi.netlify.app/](https://paoyluisi.netlify.app/)

## Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- Hosted on [Netlify](https://www.netlify.com/)

## Local development

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

| Command | Description |
|--------|-------------|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Deploy on Netlify

`netlify.toml` is configured with:

- **Build:** `npm run build`
- **Publish:** `dist`

### First-time setup

1. Connect this repository in the [Netlify dashboard](https://app.netlify.com/).
2. Point your custom domain to the site (e.g. `paoyluisi.netlify.app`).
3. Each push to the production branch triggers a deploy.

### Manual deploy (CLI)

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## Project structure

```
src/
├── App.jsx                 # Layout + sections
├── context/                # Wedding dates (computed on visit)
├── config/                 # Copy, dates, links — edit here
│   ├── navigation.js       # Menu items
│   ├── wedding.js          # Fixed dates, RSVP deadline, calendar times, music
│   ├── agenda.js           # Ceremony & reception
│   ├── gallery.js          # Gallery photos
│   └── dressCode.js        # Dress code copy & swatches
├── hooks/                  # Reusable logic (menu, carousel, dates…)
├── lib/                    # Helpers (calendar .ics, countdown, formatting)
└── components/
    ├── layout/             # Header, footer, background
    ├── sections/           # Page sections
    ├── countdown/          # “Faltan…” countdown
    ├── ui/                 # Shared UI (buttons)
    └── MusicToggle.jsx     # Background music control
```

Static assets (images, fonts, video) live in `public/`. The calendar `.ics` file is built in the browser when guests click **Añadir al calendario**.

Imports use the `@/` alias → `src/` (see `vite.config.js` and `jsconfig.json`).

## Configuration (no layout changes needed)

| What to change | File |
|----------------|------|
| Wedding date | `src/config/wedding.js` → `WEDDING_DATE_ISO` |
| RSVP deadline (last day inclusive) | `src/config/wedding.js` → `RSVP_DEADLINE_YMD` |
| Event times for calendar (`.ics`) | `src/config/wedding.js` → `WEDDING_EVENT_START` / `END` |
| Tally RSVP URL, music, carousel | `src/config/wedding.js` |
| Menu links | `src/config/navigation.js` |
| Venues & schedule | `src/config/agenda.js` |
| Gallery images | `src/config/gallery.js` |
| Dress code | `src/config/dressCode.js` |
| Global colors & fonts | `src/index.css` |

### RSVP behavior

- Displayed deadline: **November 20, 2025** (fixed).
- **Before** the deadline: **Confirmar asistencia** opens the [Tally form](https://tally.so/r/3E9PV4) in a new tab.
- **After** the deadline (`America/Bogota` timezone): the button is disabled and a short closed-message is shown.

All times and date comparisons use **Cúcuta, Colombia** (`America/Bogota`).

## Credits

- Development: [Debora Weinmann](mailto:debiwein@gmail.com)
- Design: Lizeth Pineda
