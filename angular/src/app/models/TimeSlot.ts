import { Session } from './Session';

export class TimeSlot {
  id!: number;
  name!: String;
  sessions?: Session[];
}
