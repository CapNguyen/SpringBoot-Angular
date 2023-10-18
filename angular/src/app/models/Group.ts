import { Course } from './Course';
import { Session } from './Session';
import { User } from './User';

export class Group {
  id!: number;
  name!: String;
  users?: User[];
  sessions?: Session[];
  course?: Course[];
}
