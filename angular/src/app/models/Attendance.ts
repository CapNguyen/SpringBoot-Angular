import { Session } from './Session';
import { User } from './User';

export class Attendance {
  id!: number;
  note?: String;
  status!: string;
  session!: Session;
}
