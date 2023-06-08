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

export const DialogEventsCreate = ({ onClose, calendarRef }) => {
  const [eventDate, eventDateSet] = useState('')
  const handleDateChange = (event) => {
    eventDateSet(event.target.value)
  }
  const createEvent = () => {
    debugger
    const inputDate = eventDate // Store the input date value
    const [year, month, day] = inputDate.split('-')
    const formattedDate = `${year}-${month}-${day}` // Convert to YYYY-MM-DD format

    const date = new Date(formattedDate + 'T00:00:00') // local time

    if (!isNaN(date.valueOf())) {
      // valid?
      const calendarApi = calendarRef.current.getApi()
      calendarApi.addEvent({
        title: 'Nuovo',
        start: date,
        allDay: true,
      })
      onClose()
    } else {
      alert('Formato della data non valido')
    }
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
