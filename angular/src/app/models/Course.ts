import { Group } from './Group';
import { Session } from './Session';
import { Term } from './Term';

export class Course {
  id!: number;
  code?: String;
  name!: String;
  term?: Term;
  sessions?: Session[];
  groups?: Group[];
}
