import { CalendarEvent } from '@/types-shared/CalendarEvent'
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
import { v4 as uuidv4 } from 'uuid'

export type DialogEventsCreateProps = {
  onClose: () => void
  addEvent: (newEvents: CalendarEvent[]) => void
  eventsList: CalendarEvent[]
}

export const DialogEventsCreate: React.FC<DialogEventsCreateProps> = ({
  onClose,
  addEvent,
  eventsList,
}) => {
  const [eventCreationData, eventCreationDataSet] = useState<CalendarEvent>({
    id: '',
    title: '',
    date: '',
  })
  const handleDateChange = (event) => {
    eventCreationDataSet((prevState) => ({
      ...prevState,
      date: event.target.value,
    }))
  }
  const handleTitleChange = (event) => {
    eventCreationDataSet((prevState) => ({
      ...prevState,
      title: event.target.value,
    }))
  }
  const createEvent = () => {
    const newEvent = {
      /* avrei usato essendo nativo ma solo in https: crypto.randomUUID(), */
      id: uuidv4(),
      title: eventCreationData.title,
      date: eventCreationData.date,
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
          Inserisci il titolo dell&apos;evento
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="event-title"
          type="text"
          fullWidth
          variant="standard"
          value={eventCreationData.title}
          onChange={handleTitleChange}
        />
        <DialogContentText>
          Inserisci la data dell&apos;evento
        </DialogContentText>
        <TextField
          margin="dense"
          id="event-date"
          type="date"
          fullWidth
          variant="standard"
          value={eventCreationData.date}
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
