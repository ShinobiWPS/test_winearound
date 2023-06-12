import { CalendarEvent } from '@/types-shared/CalendarEvent'
import { EventClickArg } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import { Grid } from '@mui/material'

type CalendarProps = {
  events: CalendarEvent[]
  headerToolbar: object
  customButtons: object
  eventClick: (arg: EventClickArg) => void
}

const Calendar: React.FC<CalendarProps> = ({
  events,
  headerToolbar,
  customButtons,
  eventClick,
}) => {
  return (
    <Grid container spacing={2} justifyContent={'center'}>
      <Grid item>
        <FullCalendar
          events={events}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          nowIndicator={true}
          headerToolbar={headerToolbar}
          customButtons={customButtons}
          eventClick={eventClick}
        />
      </Grid>
    </Grid>
  )
}
export default Calendar
