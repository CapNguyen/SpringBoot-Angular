import { Campus } from "./Campus";

export class User {
  id!: number;
  code!: String;
  email!: String;
  full_name!: String;
  image!: String;
  password!: String;
  phone_number!: String;
  role!: String;
  campus ?: Campus;
}
