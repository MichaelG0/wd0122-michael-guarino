import { IUser } from "./iuser";

export class User implements IUser {
    email!: string;
    password!: string;
    id?: number;
}
