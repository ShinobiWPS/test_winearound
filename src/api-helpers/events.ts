import { CalendarEvent } from '@/types-shared/CalendarEvent';

export const fetchEvents = async () => {
  const response = await fetch('http://localhost:3000/api/events/getEvents');
  const data = await response.json();
  return data.events;
};

export const updateEvents = async (updatedEvents: CalendarEvent[]) => {
  const response = await fetch('http://localhost:3000/api/events/updateEvents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    /* sarebbe da mandare solo l' id dell'evento in questione */
    body: JSON.stringify({ events: updatedEvents }),
  });
  const data = await response.json();
  return data.events;
};