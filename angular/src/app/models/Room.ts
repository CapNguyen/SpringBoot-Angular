import { Session } from "./Session";

export class Room {
  id!: number;
  name!: String;
  sessions?: Session[];
}
