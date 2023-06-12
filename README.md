This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Consegna:
Dovrai impostare un repository da poi condividere con noi contenente un applicativo React+TypeScript che utilizzi i seguenti:

- next v13 (https://nextjs.org)
- @mui/material v5 (https://mui.com)
- @fullcalendar/react v6 (https://fullcalendar.io/docs/react)
- @tanstack/react-query v4 (https://tanstack.com/query/latest)

Questo applicativo dovrà leggere una lista di eventi tramite un endpoint API di next e disegnarli sul calendario.

Dovrai permettere all'utente di:

- spostare gli eventi interagendo con il calendario, chiamando l'API per aggiornare i dati temporali dell'evento spostato.
- [x]creare un nuovo evento da aggiungere al calendario (chiamando l'API per persisterlo)
- []eliminare gli eventi dal calendario cliccandoci sopra mentre preme "shift" (hint: leggi con attenzione le specifiche dell'evento click), chiamando l'API per rimuoverlo.

La persistenza degli eventi del calendario lato server la puoi gestire come preferisci, vale tutto.(incluso `fs` per operare su un semplice file su filesystem).

Ogni elemento grafico in interfaccia (calendario escluso) dovrà essere di MUI.
esempi di cosa potrebbe comparire con MUI:

- quando premi crea evento dovrai decidere il nome dell'evento e la data in cui inserirlo ad esempio
- [x]vuoi che il calendario sia centrato in mezzo alla pagina e sia in un container con una certa larghezza massima
- [x]vuoi mettere un menu, o un footer, o qualche elemento di contorno
- vuoi mettere un header e del testo che spiega come usare il calendario
- vuoi aprire un modale di conferma prima di cancellare gli eventi
- vuoi reimplementare l'header del calendario per conto tuo

Ogni chiamata API dovrà essere gestita tramite react-query.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
