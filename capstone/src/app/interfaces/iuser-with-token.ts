export interface IUserWithToken {
  accessToken: string;
  user: {
    id: number;
    email: string;
    username: string;
    name: string;
    surname: string
  };
}
