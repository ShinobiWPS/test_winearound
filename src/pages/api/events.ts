import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const EVENTS_FILE = path.join(process.cwd(), 'events.json');

type Event = {
  title: string;
  date: string;
};

type GetEventsResponse = {
  events: Event[];
};

export function getEvents(req: NextApiRequest, res: NextApiResponse<GetEventsResponse>) {
  const fileContents = fs.readFileSync(EVENTS_FILE, 'utf8');
  const events = JSON.parse(fileContents);
  res.status(200).json({ events });
}