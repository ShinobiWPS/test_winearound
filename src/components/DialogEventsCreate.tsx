import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'

export type DialogEventsCreateProps = {
  onClose: () => void
  updateEvents: Dispatch<SetStateAction<Event[]>>
  eventsList: Event[]
}

export const DialogEventsCreate: React.FC<DialogEventsCreateProps> = ({
  onClose,
  updateEvents,
  eventsList,
}) => {
  const [eventDate, eventDateSet] = useState('')
  const handleDateChange = (event) => {
    eventDateSet(event.target.value)
  }
  const createEvent = () => {
    updateEvents([
      ...eventsList,
      {
        title: 'New evento',
        start: eventDate,
        allDay: true,
      },
    ])
    onClose()
  }
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Creazione evento</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Inserisci la data dell&apos;evento
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="event-date"
          type="date"
          fullWidth
          variant="standard"
          value={eventDate}
          onChange={handleDateChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annulla</Button>
        <Button onClick={createEvent}>Crea</Button>
      </DialogActions>
    </Dialog>
  )
}
