import { Event } from '@/types/event'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'

type CalendarProps = {
  events: Event[]
  headerToolbar: object
  customButtons: object
  eventClick: (arg: EventClickArg) => void
}

export default function CalendarReact.FC<CalendarProps>({ events, headerToolbar, customButtons, eventClick }) {
  return (
    <Grid container spacing={2} justifyContent={'center'}>
      <Grid item>
        <FullCalendar
          events={eventsData}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          nowIndicator={true}
          headerToolbar={headerToolbar}
          customButtons={customButtons}
          eventClick={handleEventClick}
        />
      </Grid>
    </Grid>
  )
}
