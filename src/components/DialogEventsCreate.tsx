import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'

export const DialogEventsCreate = ({ onClose, calendarRef }) => {
  const createEvent = (arg) => {
    debugger
    const dateStr = prompt('Enter a date in YYYY-MM-DD format')
    const date = new Date(dateStr + 'T00:00:00') // local time

    if (!isNaN(date.valueOf())) {
      // valid?
      const calendarApi = calendarRef.current.getApi()
      calendarApi.addEvent({
        title: 'Nuovo',
        start: date,
        allDay: true,
      })
    } else {
      alert('Invalid date.')
    }
  }
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Creazione evento</DialogTitle>
      <DialogContent>
        <DialogContentText>Inserisci la data dell'evento</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="event-date"
          type="date"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annulla</Button>
        <Button onClick={createEvent}>Crea</Button>
      </DialogActions>
    </Dialog>
  )
}
