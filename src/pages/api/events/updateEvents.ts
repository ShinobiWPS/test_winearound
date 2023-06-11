import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const EVENTS_FILE = path.join(process.cwd(), 'eventsDB.json');

type Event = {
  title: string;
  date: string;
};

type UpdateEventsRequest = {
  events: Event[];
};

type UpdateEventsResponse = {
  events: Event[];
};

export default function updateEvents(
  req: NextApiRequest,
  res: NextApiResponse<UpdateEventsResponse>
) {
  const { events }: UpdateEventsRequest = req.body;
  fs.writeFileSync(EVENTS_FILE, JSON.stringify(events));
  res.status(200).json({ events });
}