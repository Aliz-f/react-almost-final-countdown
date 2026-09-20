# Almost Final Countdown

A small timer-guessing game built as a React practice project. Pick a challenge, start its timer, and stop it as close as possible to the target time.

## Features

- Eight timed challenges, from 1 to 35 seconds
- Start and stop controls for each timer
- Score calculation based on how close the stop time is to the target
- Result dialog with a blurred page backdrop
- Name input with a personalized welcome message
- Responsive card grid styled with Tailwind CSS

## Built with

- React 19
- Vite
- Tailwind CSS 4

## Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/<your-username>/almost-final-countdown.git
cd almost-final-countdown
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates a production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs Oxlint. |

## What I practiced

- Managing component state with `useState`
- Keeping timer and dialog DOM references with `useRef`
- Rendering challenge cards from an array with `.map()`
- Passing props and callback functions between components
- Using the native HTML `<dialog>` element and React portals
- Creating responsive layouts and interactive states with Tailwind CSS

## Project structure

```text
src/
├── components/
│   ├── Challenges.jsx    # Challenge cards and timer behavior
│   ├── Header.jsx        # Page heading and name input
│   └── ResultModal.jsx   # Score dialog
├── App.jsx
├── index.css             # Tailwind theme and custom colors
└── main.jsx
```

## License

This project is for learning and practice purposes.
