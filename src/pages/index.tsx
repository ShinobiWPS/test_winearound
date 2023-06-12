import { fetchEvents, updateEvents } from '@/api-helpers/events'
import Calendar from '@/components/Calendar'
import { DialogEventsCreate } from '@/components/DialogEventsCreate'
import Footer from '@/components/Footer'
import useModal from '@/hooks/useModal'
import { EventClickArg } from '@fullcalendar/core'
import { Box, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const initialEventsData = await fetchEvents()
  return {
    props: {
      initialEventsData,
    },
  }
}

export const Home = ({ initialEventsData }) => {
  const [isVisible, isVisibleSet] = useModal()

  const { data: eventsData, refetch } = useQuery(['events'], fetchEvents, {
    initialData: initialEventsData,
  })

  const updateEventsMutation = useMutation(updateEvents, {
    onSuccess: () => {
      refetch()
    },
  })

  const headerToolbar = {
    left: 'myCustomButton',
    center: 'title',
  }
  const handleEventClick = (arg: EventClickArg) => {
    if (arg.jsEvent.shiftKey) {
      /* ci sarebbe il revert() ma credo sia meglio un approccio di immutabilita */
      const updatedEvents = eventsData.filter(
        (event) => event.id !== arg.event.id
      )
      updateEventsMutation.mutate(updatedEvents)
    }
  }

  const customButtons = {
    myCustomButton: {
      text: 'Crea evento',
      click: () => isVisibleSet(false),
    },
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Typography variant="h3" gutterBottom align="center">
            Calendario Eventi
          </Typography>
        </header>
        <main>
          <Calendar
            events={eventsData}
            headerToolbar={headerToolbar}
            customButtons={customButtons}
            eventClick={handleEventClick}
          />
        </main>
        <Footer />
      </Box>
      {/* qui avrei usato un Portal che su next richiede un filo di codice in piu */}
      {isVisible && (
        <DialogEventsCreate
          onClose={() => isVisibleSet(false)}
          addEvent={updateEventsMutation.mutate}
          eventsList={eventsData}
        />
      )}
    </>
  )
}

export default Home
