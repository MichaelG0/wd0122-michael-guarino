import { IUser } from './iuser';

export class User implements IUser {
  email: string = '';
  username: string = '';
  password: string = '';
}
