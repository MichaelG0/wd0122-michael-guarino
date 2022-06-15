export interface Post {
  id: number;
  utente: string;
  caption: string;
  liked: number[]
}

export interface PostReg {
  utente: string;
  caption: string;
  liked: number[]
}
