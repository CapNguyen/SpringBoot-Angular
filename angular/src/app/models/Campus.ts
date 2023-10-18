import { Term } from './Term';
import { User } from './User';

export class Campus {
  id!: number;
  name!: String;
  terms?: Term[];
  user?: User[];
}
