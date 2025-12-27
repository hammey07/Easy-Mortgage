# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Easy-Mortgage

A simple React-based mortgage calculator for Ireland that estimates your maximum borrowing capacity based on income, deposit, and interest rates. It also shows monthly repayments, total repayment, and total interest, while respecting Central Bank lending limits.

## Features

- Input your **annual income** and **deposit**.
- Select from a range of **interest rates**.
- Calculates:
  - Maximum loan allowed
  - Monthly repayment
  - Total repayment
  - Total interest
- Supports **first-time and subsequent buyers** with Central Bank LTI limits (4× for first-time buyers, 3.5× for others).
- Clean, interactive UI with selectable interest rate buttons.

## Tech Stack

- **React** (functional components + hooks)
- **CSS/SCSS** for styling
- **Vite** (development & build tooling)
- JavaScript for calculations

## Run on your machine

Clone the repo:

```bash
git clone https://github.com/hammey07/Easy-Mortgage.git
cd Easy-Mortgage
npm install
npm run dev
```
