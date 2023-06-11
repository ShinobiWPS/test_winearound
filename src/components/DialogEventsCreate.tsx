import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useState } from 'react'

export type DialogEventsCreateProps = {
  onClose: () => void
  addEvent: (newEvents: Event[]) => void
  eventsList: Event[]
}

export const DialogEventsCreate: React.FC<DialogEventsCreateProps> = ({
  onClose,
  addEvent,
  eventsList,
}) => {
  const [eventDate, eventDateSet] = useState('')
  const handleDateChange = (event) => {
    eventDateSet(event.target.value)
  }
  const createEvent = () => {
    const newEvent = {
      title: 'New evento',
      date: eventDate,
    }
    const updatedEvents = [...eventsList, newEvent]
    addEvent(updatedEvents)
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
