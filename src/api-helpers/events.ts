export const fetchEvents = async () => {
  const response = await fetch('http://localhost:3000/api/events/getEvents');
  const data = await response.json();
  return data.events;
};

export const updateEvents = async (updatedEvents) => {
  const response = await fetch('http://localhost:3000/api/events/updateEvents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ events: updatedEvents }),
  });
  const data = await response.json();
  return data.events;
};