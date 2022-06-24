export interface IUserWithToken {
  accessToken: string;
  user: {
    email: string;
    id: number;
    username: string;
  };
}
