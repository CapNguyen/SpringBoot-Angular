import { Attendance } from '../Attendance';
import { Session } from '../Session';
import { User } from '../User';

export interface ScheduleResponse {
  user: User;
  sessions: Session[];
  attendances: Attendance[];
}
