# winearound
Consegna:
Dovrai impostare un repository da poi condividere con noi contenente un applicativo React+TypeScript che utilizzi i seguenti:
- next v13 (https://nextjs.org)
- @mui/material v5 (https://mui.com)
- @fullcalendar/react v6 (https://fullcalendar.io/docs/react)
- @tanstack/react-query v4 (https://tanstack.com/query/latest)

Questo applicativo dovrà leggere una lista di eventi tramite un endpoint API di next e disegnarli sul calendario.

Dovrai permettere all'utente di spostare gli eventi interagendo con il calendario, chiamando l'API per aggiornare i dati temporali dell'evento spostato.
Dovrai permettere all'utente di creare un nuovo evento da aggiungere al calendario (chiamando l'API per persisterlo)
Dovrei permettere all'utente eliminare gli eventi dal calendario cliccandoci sopra mentre preme "shift" (hint: leggi con attenzione le specifiche dell'evento click), chiamando l'API per rimuoverlo.

La persistenza degli eventi del calendario lato server la puoi gestire come preferisci, vale tutto.
Ogni elemento grafico in interfaccia (calendario escluso) dovrà essere di mui.
Ogni chiamata API dovrà essere gestita tramite react-query.