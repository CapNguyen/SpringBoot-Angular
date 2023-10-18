import { Attendance } from './Attendance';
import { Course } from './Course';
import { Group } from './Group';
import { Room } from './Room';
import { TimeSlot } from './TimeSlot';
import { User } from './User';

export class Session {
  id!: number;
  date!: Date;
  status!: string;
  course?: Course;
  group?: Group;
  room?: Room;
  timeslot?: TimeSlot;
  user?: User;
  attendances?: Attendance[];
}
