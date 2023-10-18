import { Campus } from './Campus';
import { Course } from './Course';

export class Term {
  id!: number;
  season!: String;
  year!: String;
  campus?: Campus;
  courses?: Course[];
}
