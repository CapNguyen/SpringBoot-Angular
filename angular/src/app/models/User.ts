import { Attendance } from './Attendance';
import { Campus } from './Campus';
import { Group } from './Group';
import { Session } from './Session';

export class User {
  id!: number;
  email!: String;
  full_name!: String;
  image!: String;
  password!: String;
  phone_number!: String;
  role!: String;
  campus?: Campus;
  sessions?: Session[];
  attendances?: Attendance[];
  groups?: Group[];
  mfaEnabled?: boolean;

}
